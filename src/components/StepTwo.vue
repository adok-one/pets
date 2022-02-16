<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Назва територіального органу поліції за місцем вчинення кримінального правопорушення</label>
            <div class="control">
                <input :class="['input', ($v.form.police_station_name.$error) ? 'is-danger' : '']" type="text" placeholder="..."
                       v-model="form.police_station_name">
            </div>
            <p v-if="$v.form.police_station_name.$error" class="help is-danger">This police_station_name is invalid</p>
        </div>
        <div class="field">
            <label class="label">Адреса відділу поліції</label>
            <div class="control">
                <input :class="['input', ($v.form.police_station_address.$error) ? 'is-danger' : '']" type="text" placeholder="..."
                       v-model="form.police_station_address">
            </div>
            <p v-if="$v.form.police_station_address.$error" class="help is-danger">This police_station_address is invalid</p>
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
                    police_station_name: '',
                    police_station_address: ''
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
                police_station_name: {
                    required
                },
                police_station_address: {
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