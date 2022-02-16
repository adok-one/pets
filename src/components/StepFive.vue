<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Чи Вам стало відомо про жорстоке поводження з тваринами, що належать до хребетних, у тому числі з безпритульними тваринами, порушення правил транспортування тварин, якщо такі дії призвели до тілесних ушкоджень, каліцтва чи загибелі тварини, нацьковування тварин одна на одну, вчинене з хуліганських чи корисливих мотивів, а також пропаганда, публічні заклики до вчинення дій, що мають ознаки жорстокого поводження з тваринами, поширення матеріалів із закликами до вчинення таких дій?
            </label>
            <div class="control">
                <label class="radio">
                    <input type="radio" class="radio-button" :value="1" name="first_question" v-model="form.first_question">
                    <span>Так</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label class="label">Чи були ці дії вчинені у присутності малолітнього чи неповнолітнього?
            </label>
            <div class="control">
                <label class="radio">
                    <input type="radio" class="radio-button" :value="1" name="second_question" v-model="form.second_question">
                    <span>Так</span>
                </label>
                <label class="radio">
                    <input type="radio" class="radio-button" :value="0" name="second_question" v-model="form.second_question">
                    <span>Ні</span>
                </label>
            </div>
        </div>
        <div class="field">
            <label class="label">Чи були ці дії вчинені з особливою жорстокістю або щодо двох і більше тварин, або повторно, або групою осіб, або вчинені активним способом, або насильницькі дії щодо тварини, спрямовані на задоволення статевої пристрасті?

            </label>
            <div class="control">
                <label class="radio">
                    <input type="radio" class="radio-button" :value="1" name="third_question" v-model="form.third_question">
                    <span>Так</span>
                </label>
                <label class="radio">
                    <input type="radio" class="radio-button" :value="0" name="third_question" v-model="form.third_question">
                    <span>Ні</span>
                </label>
            </div>
        </div>
        <div class="field">
            <label class="label">Чи були ці дії вчинені з метою створення зображень, творів, кіно-, відео-, аудіопродукції, або збут чи поширення зображень, творів, кіно-, відео-, аудіопродукції, що пропагують жорстоке поводження з тваринами?

            </label>
            <div class="control">
                <label class="radio">
                    <input type="radio" class="radio-button" :value="1" name="fourth_question" v-model="form.fourth_question">
                    <span>Так</span>
                </label>
                <label class="radio">
                    <input type="radio" class="radio-button" :value="0" name="fourth_question" v-model="form.fourth_question">
                    <span>Ні</span>
                </label>
            </div>
        </div>
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
                    first_question: 1,
                    second_question: null,
                    third_question: null,
                    fourth_question: null,
                }
            }
        },

        validations: {
            form: {
                first_question: {
                    required
                },
                second_question: {
                    required
                },
                third_question: {
                    required
                },
                fourth_question: {
                    required
                },
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