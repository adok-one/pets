<template>
    <div id="app">
        <loading :active.sync="isLoading" :is-full-page="true"></loading>

        <!--Example dependecies-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css">
        <!--Example Elements-->
        <section class="hero">
            <div class="hero-body" style="padding: 1rem 0">
                <div class="container">
                    <div class="columns">
                        <div class="column is-8 is-offset-4" style="display: flex; align-items: center;">
                            <div class="is-pulled-left">
                                <img width="350px" src="https://pro-consulting.ua/uploads/files/Klients/open-cages%20%282%29.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: .5rem">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <horizontal-stepper :steps="demoSteps" @completed-step="completeStep" :top-buttons="true"
                                            @active-step="isStepActive" @stepper-finished="alert"></horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <strong>Створено</strong> у <a
                            href="https://opencages.com.ua/">Відкриті клітки</a>.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
  // import "vue-select/dist/vue-select.css";
    import { saveAs } from 'file-saver';
    import HorizontalStepper from 'vue-stepper';
    import StepOne from './components/StepOne.vue';
    import StepTwo from './components/StepTwo.vue';
    import StepThree from './components/StepThree.vue';
    import StepFour from './components/StepFour.vue';
    import StepFive from './components/StepFive.vue';
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    export default {
        name: 'app',
        components: {
            HorizontalStepper,
            Loading
        },
        data(){
            return {
                isLoading: false,
                form: {},
                demoSteps: [
                    {
                        icon: 'announcement',
                        name: 'five',
                        title: 'Суть правопорушення',
                        subtitle: 'Дайте відповіді на запитання що до вчиненого правопорушення',
                        component: StepFive,
                        completed: false
                    },
                    {
                        icon: 'mail',
                        name: 'first',
                        title: 'Дані заявника',
                        subtitle: 'Вкажіть дані особи що є заявником у справі (як в паспорті)',
                        component: StepOne,
                        completed: false
                    },
                    {
                        icon: 'report_problem',
                        name: 'second',
                        title: 'Дані відділку поліції',
                        subtitle: 'Вкажіть дані відділку які ви отримаєте від представника поліції',
                        component: StepTwo,
                        completed: false
                    },
                    {
                        icon: 'announcement',
                        name: 'third',
                        title: 'Суть правопорушення',
                        subtitle: 'Виклад обставин, що можуть свідчити про вчинення кримінального правопорушення, джерел інформації в хронологічній послідовності',
                        component: StepThree,
                        completed: false
                    },
                    {
                        icon: 'announcement',
                        name: 'four',
                        title: 'Свідки',
                        subtitle: 'Якщо у Вас є свідки, вкажіть їх контактні дані',
                        component: StepFour,
                        completed: false
                    },

                ],
                activeStep: 0
            }
        },
        computed: {},
        methods: {
            completeStep(payload) {
                this.form = {...this.form, ...payload.form}
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            alert(payload) {
              this.form = {...this.form, ...payload.form}
              this.form.witnesses = this.form.witnesses || []
              console.log(this.form)
              this.convertFile()
            },
            async convertFile(){
              const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
              const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
              const Apikey = defaultClient.authentications['Apikey'];
              Apikey.apiKey = "d3826900-ad0b-41e7-b3ac-866a1b913235"
              const api = new CloudmersiveConvertApiClient.EditDocumentApi();
              const url = 'https://privfile.com/download.php?fid=620c55cfc6c42-MTI0OTI='
  
              const reqConfig = new CloudmersiveConvertApiClient.MultiReplaceStringRequest();
              const strings = []

              let string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#DATE#]"
              string.replaceString = this.$moment().format('DD.MM.YYYY');
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#police_station_name#]"
              string.replaceString = this.form.police_station_name;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#police_station_address#]"
              string.replaceString = this.form.police_station_address;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#full_name#]"
              string.replaceString = `${this.form.last_name} ${this.form.first_name} ${this.form.middle_name}`;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#full_address#]"
              string.replaceString = `${this.form.region}, ${this.form.city},вул ${this.form.street} ${this.form.building}/${this.form.flat}`;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#full_contacts#]"
              const contacts = [this.form.phone]
              if(this.form.email) {
                contacts.push(this.form.email)
              }
              string.replaceString = contacts.join(',');
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#initials#]"
              string.replaceString = `${this.form.last_name} ${this.form.first_name[0].toUpperCase()}. ${this.form.middle_name[0].toUpperCase()}`;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#description#]"
              string.replaceString = this.form.description;
              strings.push({...string})


              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#injury_header#]"
              string.replaceString = this.form.injury.trim().length ? 'Заподіяння матеріальної та моральної шкоди' : '';
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#injury#]"
              string.replaceString = this.form.injury;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#proof#]"
              string.replaceString = this.form.proof;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#injury_desc#]"
              string.replaceString = `Згідно ч. 1 ст. 60 КПК України потерпілим у кримінальному провадженні може бути фізична особа, якій кримінальним правопорушенням завдано моральної, фізичної або майнової шкоди, юридична особа, якій кримінальним правопорушенням завдано майнової шкоди, а також адміністратор за випуском облігацій, який відповідно до положень Закону України "Про ринки капіталу та організовані товарні ринки" діє в інтересах власників облігацій, яким кримінальним правопорушенням завдано майнової шкоди.
                При цьому згідно ч. 2 цієї статті права і обов’язки потерпілого виникають в особи з моменту подання заяви про вчинення щодо неї кримінального правопорушення або заяви про залучення її до провадження як потерпілого. Потерпілому вручається пам’ятка про процесуальні права та обов’язки особою, яка прийняла заяву про вчинення кримінального правопорушення.`;
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#documents_title#]"
              string.replaceString = this.form.documents_description.trim().length ? 'Додатки: ' : '';
              strings.push({...string})
              
              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#documents_description#]"
              string.replaceString = this.form.documents_description;
              strings.push({...string})


              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#witnesses_header#]"
              string.replaceString = this.form.witnesses.length ? 'Крім того, зазначену мною інформацію можуть підтвердити свідки:' : '';
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#witnesses#]"
              string.replaceString = this.form.witnesses.map(function(item){
                return `- ${item.last_name} ${item.first_name} ${item.middle_name}, ${item.address}, ${item.phone}`
              }).join("\n");
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#number#]"
              string.replaceString = '1,4';
              strings.push({...string})

              string = new CloudmersiveConvertApiClient.SingleReplaceString();
              string.matchString = "[#injury_item#]"
              string.replaceString = this.form.injury.trim().length  ? '6.  Визнати мене потерпілим/ою та вручити мені пам’ятку про процесуальні права і обов’язки потерпілого у кримінальному провадженні.' : '';
              strings.push({...string})

              reqConfig.inputFileUrl = url
              reqConfig.replaceStrings = strings

              console.log(reqConfig)
              const callback = (error, data, response) => {
                console.log(response)
                this.isLoading = false
                if (error) {
                  alert(response.error);
                } else {
                  saveAs(response.body, "Заява.docx");
                  console.log('API called successfully. Returned data: ' + data);
                }
              };
              this.isLoading = true
              api.editDocumentDocxReplaceMulti(reqConfig, callback);

            }
        }
    }
</script>

<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .pointer {
        cursor: pointer;
    }
    h1, h2 {
        font-weight: normal;
    }
    hr {
        background-color: transparent;
        border: none;
        display: block;
        height: inherit;
        margin: 1.5rem 0;
        border-top: dashed 1px;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #0b99b9;
        text-decoration: underline;
    }
    .text-medium-grey {
        color: #333;
    }
    .text-light-grey {
        color: #888;
    }
    .box.formated {
        position: relative;
        padding: 0;
    }
    .box.formated .heading {
        font-size: 1rem;
        text-transform: capitalize;
        padding: .8rem 1.5rem;
        background-color: #fafafa;
    }
    .box.formated .content {
        padding: 1rem 2rem;
    }
    i.top-left {
        position: absolute;
        left: 1.5rem;
        top: 0.8rem;
    }
    .vertical-separator {
        display: flex;
        justify-content: space-around;
    }
    .vertical-separator .line {
        border-right: 1px solid #cccccc;
    }
</style>