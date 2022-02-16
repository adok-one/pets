<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Ім'я</label>
            <div class="control">
                <input :class="['input', ($v.form.first_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше ім'я..."
                       v-model="form.first_name">
            </div>
            <p v-if="$v.form.first_name.$error" class="help is-danger">This first_name is invalid</p>
        </div>
        <div class="field">
            <label class="label">Прізвище</label>
            <div class="control">
                <input :class="['input', ($v.form.last_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше прізвище..."
                       v-model="form.last_name">
            </div>
            <p v-if="$v.form.last_name.$error" class="help is-danger">This last_name is invalid</p>
        </div>
        <div class="field">
            <label class="label">По батькові</label>
            <div class="control">
                <input :class="['input', ($v.form.middle_name.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше по батькові..."
                       v-model="form.middle_name">
            </div>
            <p v-if="$v.form.middle_name.$error" class="help is-danger">This middle_name is invalid</p>
        </div>
        <div class="field">
            <label class="label">Область/Район</label>
            <div class="control">
              <v-select 
                :options="regions" 
                v-model="form.region"
                :class="[($v.form.region.$error) ? 'is-danger' : '']"
                placeholder="Виберіть Вашу область та район..."
              ></v-select>
            </div>
            <p v-if="$v.form.region.$error" class="help is-danger">This region is invalid</p>
        </div>
        <div class="field">
            <label class="label">Місто</label>
            <div class="control">
                <input :class="['input', ($v.form.city.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Ваше місто..."
                       v-model="form.city">
            </div>
            <p v-if="$v.form.city.$error" class="help is-danger">This city is invalid</p>
        </div>
        <div class="field">
            <label class="label">Вулиця</label>
            <div class="control">
                <input :class="['input', ($v.form.street.$error) ? 'is-danger' : '']" type="text" placeholder="Вкажіть Вашу вулицю прописки..."
                       v-model="form.street">
            </div>
            <p v-if="$v.form.street.$error" class="help is-danger">This street is invalid</p>
        </div>
        <div class="field">
            <label class="label">Будинок</label>
            <div class="control">
                <input :class="['input', ($v.form.building.$error) ? 'is-danger' : '']"  type="text" placeholder="Вкажіть номер будинку..." v-model="form.building">
            </div>
            <p v-if="$v.form.building.$error" class="help is-danger">This building is invalid</p>
        </div>
        <div class="field">
            <label class="label">Квартира</label>
            <div class="control">
                <input :class="['input', ($v.form.flat.$error) ? 'is-danger' : '']"  type="text" placeholder="Вкажіть номер квартири..." v-model="form.flat">
            </div>
            <p v-if="$v.form.flat.$error" class="help is-danger">This flat is invalid</p>
        </div>
        <div class="field">
            <label class="label">Телефон</label>
            <div class="control">
                <input :class="['input', ($v.form.phone.$error) ? 'is-danger' : '']"  type="text" placeholder="Вкажіть Ваш телефон..." v-model="form.phone">
            </div>
            <p v-if="$v.form.phone.$error" class="help is-danger">This phone is invalid</p>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input :class="['input', ($v.form.email.$error) ? 'is-danger' : '']"  type="text" placeholder="Вкажіть Вашу пошту..." v-model="form.email">
            </div>
            <p v-if="$v.form.email.$error" class="help is-danger">This email is invalid</p>
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
                region: {
                    required
                },
                city: {
                    required
                },
                street: {
                    required
                },
                building: {
                    required
                },
                flat: {
                    required
                },
                phone: {
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