<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="columns">
            <div class="field column is-4">
                <label class="label">Прізвище</label>
                <div class="control">
                    <input :class="['input', ($v.form.last_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше прізвище..."
                           v-model="form.last_name">
                </div>
                <p v-if="$v.form.last_name.$error" class="help is-danger">This last_name is invalid</p>
            </div>
            <div class="field column is-4">
                <label class="label">Ім'я</label>
                <div class="control">
                    <input :class="['input', ($v.form.first_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше ім'я..."
                           v-model="form.first_name">
                </div>
                <p v-if="$v.form.first_name.$error" class="help is-danger">This first_name is invalid</p>
            </div>
            <div class="field column is-4">
                <label class="label">По батькові</label>
                <div class="control">
                    <input :class="['input', ($v.form.middle_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше по батькові..."
                           v-model="form.middle_name">
                </div>
                <p v-if="$v.form.middle_name.$error" class="help is-danger">This middle_name is invalid</p>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-12">
                <label class="label">Адреса (Область, місто, район, вулиця будинок/квартира)</label>
                <div class="control">
                    <input :class="['input', ($v.form.address.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Вашу адресу..."
                           v-model="form.address">
                </div>
                <p v-if="$v.form.address.$error" class="help is-danger">This address is invalid</p>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Телефон</label>
                <div class="control">
                    <input :class="['input', ($v.form.phone.$error) ? 'is-danger' : '']" v-mask="'38 0## ### ## ##'" type="text" placeholder="38 099 999 99 99" v-model="form.phone">
                </div>
                <p v-if="$v.form.phone.$error" class="help is-danger">This phone is invalid</p>
            </div>
            <div class="field column is-6">
                <label class="label">Email</label>
                <div class="control">
                    <input :class="['input', ($v.form.email.$error) ? 'is-danger' : '']"  type="text" placeholder="Вкажіть Вашу пошту..." v-model="form.email">
                </div>
                <p v-if="$v.form.email.$error" class="help is-danger">This email is invalid</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'
    import regions from '../regions'
    import "vue-select/dist/vue-select.css";

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    region: '',
                    district: '',
                    city: '',
                    street: '',
                    building: '',
                    flat: '',
                    address: ''
                },
                regions: regions
            }
        },

        validations: {
            form: {
                first_name: {
                    required
                },
                middle_name: {
                    required
                },
                last_name: {
                    required
                },
                phone: {
                    required
                },
                address: {
                    required
                },
                email: {
                    email
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