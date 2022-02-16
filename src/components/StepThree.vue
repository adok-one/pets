<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Виклад обставин, що можуть свідчити про вчинення кримінального правопорушення, джерел інформації в хронологічній послідовності</label>
            <div class="control">
                <textarea :class="['textarea', ($v.form.description.$error) ? 'is-danger' : '']"  placeholder="...." v-model="form.description"></textarea>
                <p v-if="$v.form.description.$error" class="help is-danger">This description is invalid</p>
            </div>
        </div>
        <div class="field">
            <label class="label">Перелік доказів, якими можуть бути підтверджені зазначені обставини: фотографії, відеозаписи, ветеринарні документи, що свідчать про жорстоке поводження, тощо із зазначенням обставин, на підтвердження яких вони подаються</label>
            <div class="control">
                <textarea :class="['textarea', ($v.form.proof.$error) ? 'is-danger' : '']"  placeholder="...." v-model="form.proof"></textarea>
                <p v-if="$v.form.proof.$error" class="help is-danger">This proof is invalid</p>
            </div>
        </div>
        <div class="field">
            <label class="label">За наявності заподіяння матеріальної та моральної шкоди опишіть докази, що підтверджують їх заподіяння та розмір шкоди</label>
            <div class="control">
                <textarea class="textarea"  placeholder="...." v-model="form.injury"></textarea>
            </div>
        </div>
        <div class="field">
            <label class="label">Опис документів та матеріалів, що додаються до заяви (За наявності)</label>
            <div class="control">
                <textarea class="textarea"  placeholder="...." v-model="form.documents_description"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required} from 'vuelidate/lib/validators'
    export default {
        props: ['currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    description: '',
                    proof: '',
                    injury: '',
                    documents_description: ''
                }
            }
        },
        methods: {
          canContinue() {
              this.$emit('can-continue', {value: true});
          }
        },

        validations: {
            form: {
                description: {
                    required
                },
                proof: {
                    required
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