<template>
    <div>
        <Header :magasin="magasin"/>
        <div class="contact mt-12">
            <v-container>
                <v-row>
                    <v-col class="contact-item" md="4" cols="12">
                        <v-row>
                            <v-col cols="2">
                                <v-icon>mdi-phone</v-icon>
                            </v-col>
                            <v-col cols="10">
                                <h3>Contact information</h3>
                                <p class="mt-2">
                                    <span>Email: {{magasin.email}}</span>
                                    <br>
                                    <span>Phone: {{magasin.phone}}</span>
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="contact-item" md="4" cols="12">
                        <v-row>
                            <v-col cols="2">
                                <v-icon>mdi-map-marker</v-icon>
                            </v-col>
                            <v-col cols="10">
                                <h3>Address</h3>
                                <p class="mt-2">
                                    <span>{{magasin.address}}</span>
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="contact-item" md="3" cols="12">
                        <v-row>
                            <v-col cols="2">
                                <v-icon>mdi-store-clock</v-icon>
                            </v-col>
                            <v-col cols="10">
                                <h3>Working Hours</h3>
                                <p class="mt-2">
                                    <span>{{magasin.working_days}}</span>
                                    <br>
                                    <span>{{magasin.working_hours}}</span>
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <div class="contact-form mt-6">
                    <v-row>
                        <v-col md="6" cols="12">
                            <iframe class="contact-map" :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.4818338440095!2d'+ magasin.longitude +'!3d' + magasin.latitude +'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff196f0cf888f8f5!2zMzHCsDM1JzM1LjciTiAywrAxMycyNy4xIlc!5e0!3m2!1sar!2sdz!4v1663965947336!5m2!1sar!2sdz'" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                            >
                                <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Full Name"
                                        required
                                        filled
                                        dense
                                        rounded
                                ></v-text-field>

                                <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                        filled
                                        dense
                                        rounded
                                ></v-text-field>

                                <v-textarea
                                        v-model="message"
                                        :rules="messageRules"
                                        label="Message"
                                        required
                                        filled
                                        dense
                                        rounded
                                ></v-textarea>


                                <v-btn
                                        :disabled="!valid"
                                        color="#E5E5E5"
                                        @click="validate"
                                >
                                    Validate
                                    <span class="mx-2"></span>
                                    <v-progress-circular
                                            v-if="contactLoad === true"
                                            indeterminate
                                            color="#e9f4ff"
                                            size="20"
                                    ></v-progress-circular>
                                </v-btn>
                            </v-form>
                            <v-alert dismissible class="mt-5" v-if="contactAlert === 1" type="success">Your message has been send succesfully.</v-alert>
                            <v-alert dismissible class="mt-5" v-if="contactAlert === 2" type="error">Error</v-alert>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
        <Footer :magasin="magasin"/>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Contact",
        components: {Header, Footer},
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 100) || 'Name must be less than 100 characters',
                v => (v && v.length > 5) || 'Name must be more than 5 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            message: '',
            messageRules: [
                v => !!v || 'Message is required',
                v => (v && v.length <= 500) || 'Message must be less than 500 characters',
                v => (v && v.length > 10) || 'Name must be more than 10 characters',
            ],
            magasin: {},
            contactLoad: false,
            contactAlert: 0,
            overlay: false
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Contact'
        },
        methods: {
            validate () {
                if(this.$refs.form.validate()) {
                    this.contactLoad = true
                    const info = {
                        full_name: this.name,
                        email: this.email,
                        message: this.message,
                    };
                    this.$http.post("contact", info)
                        .then(response => {
                            this.contactLoad = false
                            console.log(response.data)
                            if(response.data.success === true){
                                this.contactAlert = 1
                            }else{
                                this.contactAlert = 2
                            }
                            this.reset()
                        })
                        .catch(error => {
                            this.contactLoad = false
                            this.reset()
                            this.errorMessage = error.message;
                            console.error("There was an error!", error);
                        });
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            initialize() {
                this.overlay = true
                this.$http.get("magasin").then(response => {
                    this.overlay = false
                    if(response.data != null){
                        this.magasin = response.data
                    }
                }).catch(error => {
                    console.log(error)
                    this.overlay = false
                })
            },
        }
    }
</script>

<style scoped>
    .contact {
        background-color: #FFF;
        padding: 30px;
    }
    .contact-item {
        background-color: #e9f4ff;
        padding: 15px;
        border-radius: 20px;
        margin: 8px;
    }
    .contact-form {
        background-color: #e9f4ff;
        padding: 25px;
        border-radius: 20px;
    }
    .contact-map {
        height: 400px;
        width: 95%;
    }
    .contact-form-input {
        border-radius: 30px;
        background-color: #EFF2F9;
        border-bottom: none;
    }
</style>