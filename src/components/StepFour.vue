<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <template v-for="(item, index) in form.witnesses">
            <div :key="index">
                <div class="columns">
                    <div class="field column is-4">
                        <label class="label">Ім'я</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Вкажіть ім'я свідка..."
                                   v-model="form.witnesses[index].first_name">
                        </div>
                    </div>
                    <div class="field column is-4">
                        <label class="label">Прізвище</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Вкажіть прізвище свідка..."
                                   v-model="form.witnesses[index].last_name">
                        </div>
                    </div>
                    <div class="field column is-4">
                        <label class="label">По батькові</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Вкажіть ім'я свідка..."
                                   v-model="form.witnesses[index].middle_name">
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="field column is-4">
                        <label class="label">Адреса проживання</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Вкажіть адресу свідка..."
                                   v-model="form.witnesses[index].address">
                        </div>
                    </div>
                    <div class="field column is-4">
                        <label class="label">Контактний телефон</label>
                        <div class="control">
                            <input class="input" type="text" v-mask="'38 0## ### ## ##'" placeholder="38 099 999 99 99" 
                                   v-model="form.witnesses[index].phone">
                        </div>
                    </div>
                    <div class="column is-4">
                        <label class="label">Дії</label>
                        <button class="button" style="color:red" @click="remove(index)">Видалити</button>
                    </div>
                </div>
            </div>
        </template>
        <button class="button" style="color:blue" @click="add">Додати свідка</button>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required} from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    witnesses: [],
                }
            }
        },
        methods: {
          canContinue() {
              this.$emit('can-continue', {value: true});
          },
          add(){
            this.form.witnesses.push({});
            this.$v.form.$touch();
          },
          remove(index){
            this.form.witnesses.splice(index, 1);
            this.$v.form.$touch();
          }
        },

        validations: {
            form: {
                witnesses: {
                    $each: {
                        first_name: {
                            required
                        },
                        middle_name: {
                            required
                        },
                        last_name: {
                            required
                        },
                        address: {
                            required
                        },
                        phone: {
                            required
                        }
                    }
                }
            }
        },
        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                        this.currentStep.form = this.form
                        this.$emit('can-continue', {value: true});
                    } else {
                        this.$emit('can-continue', {value: false});
                        setTimeout(()=> {
                            this.$emit('change-next', {nextBtnValue: false});
                        }, 3000)
                    }
                },
                deep: true
            },
            clickedNext(val) {
                if(val === true) {
                    this.currentStep.form = this.form
                    this.$v.form.$touch();
                }
            }
        },
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>