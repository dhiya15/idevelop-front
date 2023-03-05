<template>
    <div>
        <Header :magasin="magasin"/>
        <div class="contact mt-12" style="background-color: #f2f6fc">
            <v-container>
                <div class="contact-form mt-6">

                    <v-form  enctype="multipart/form-data" ref="form" v-model="valid" lazy-validation>

                        <v-col md="6" cols="12" class="align-center justify-center pt-5">
                            <v-text-field
                                v-model="fullName"
                                :rules="fullNameRules"
                                label="Full Name"
                                required
                                filled
                                dense
                                rounded
                            ></v-text-field>
                            <v-text-field
                                v-model="phone"
                                :rules="phoneRules"
                                label="Phone Number"
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
                            <h4>Please select a category</h4>

                            <v-chip-group v-model="selectedCategory">
                                <v-chip filter outlined>
                                    Student
                                </v-chip>
                                <v-chip filter outlined>
                                    Other
                                </v-chip>
                            </v-chip-group>
                            <v-text-field
                                    v-if="selectedCategory == 1"
                                    v-model="profession"
                                    :rules="professionRules"
                                    label="Your profession or your activity"
                                    :required="selectedCategory == 1"
                                    filled
                                    dense
                                    height="10"
                                    rounded
                            ></v-text-field>


                            <h4>Please select your programing level</h4>
                            <v-chip-group v-model="selectedProgramingLevel" class="ml-0 pl-0">
                                <v-chip filter outlined>
                                    Beginner
                                </v-chip>
                                <v-chip filter outlined>
                                    Medium
                                </v-chip>
                                <v-chip filter outlined>
                                    Professional
                                </v-chip>
                            </v-chip-group>


                            <h4>Please select the workshops</h4>
                            <v-chip-group v-model="selectedWorkshops" multiple class="ml-0 pl-0">
                                <v-chip filter outlined>
                                    Web Development
                                </v-chip>
                                <v-chip filter outlined>
                                    Mobile Apps Development
                                </v-chip>
                                <v-chip filter outlined>
                                    Cyber Security
                                </v-chip>
                                <v-chip filter outlined>
                                    Artificial Intelligence
                                </v-chip>
                            </v-chip-group>

                            <v-checkbox v-model="terms" style="margin-top: 0px; padding-top: 0px" color="#1D8BE1" :rules="termsRules"
                                        label="I undertake to attend all workshops"
                            ></v-checkbox>
                            <v-btn :disabled="!valid && (this.selectedWorkshops.length == 0) && (this.selectedProgramingLevel == null) && (this.selectedCategory == null) && (this.terms == false)" color="#1D8BE1" @click="validate" class="mb-2 ml-2">
                                <span style="color: white">Submit</span>
                                <span class="mx-2"></span>
                                <v-progress-circular
                                        v-if="contactLoad === true"
                                        indeterminate
                                        color="#f2f6fc"
                                        size="20"
                                ></v-progress-circular>
                            </v-btn>
                        </v-col>





                    </v-form>
                    <v-alert dismissible class="mt-5" v-if="contactAlert === 1" type="success">Your registration has been sent successfully, we will contact you by email soon.</v-alert>
                    <v-alert dismissible class="mt-5" v-if="contactAlert === 2" type="error">Error</v-alert>

                </div>
            </v-container>
        </div>
        <Footer :magasin="magasin"/>
        <v-overlay :value="overlay" color="white" :opacity="1">
            <v-progress-circular
                    indeterminate
                    size="60"
                    color="#1D8BE1"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default {
        name: "IDJourney",
        components: {Header, Footer},
        data: () => ({
            selectedCategory: null,
            selectedWorkshops: [],
            selectedProgramingLevel: null,
            terms: false,
            valid: true,
            fullName: '',
            fullNameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 100) || 'Field must be less than 100 characters',
                v => (v && v.length > 5) || 'Field must be more than 5 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            phone: '',
            phoneRules: [
                v => !!v || 'Phone is required',
                v => /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(v) || 'Phone must be valid',
            ],
            profession: '',
            professionRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 100) || 'Field must be less than 100 characters'
            ],
            termsRules: [
                v => (v !== false) || 'Checking this is essential',
            ],
            magasin: {},
            contactLoad: false,
            contactAlert: 0,
            overlay: false,
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Registration'
        },
        methods: {
            getSelectedCategory() {
                switch (this.selectedCategory) {
                    case 0:
                        return "Student"
                    default:
                        return "Other"
                }
            },
            getSelectedProgramingLevel() {
                switch (this.selectedProgramingLevel) {
                    case 0:
                        return "Beginner"
                    case 1:
                        return "Medium"
                    case 2:
                        return "Professional"
                    default:
                        return "Beginner"
                }
            },
            getSelectedWorkshops() {
                let workshops = ""
                for(var i=0; i<this.selectedWorkshops.length; i++) {
                    if(this.selectedWorkshops[i] !== null){
                        workshops += this.getWorkShopName(this.selectedWorkshops[i])
                        if(this.selectedWorkshops[i + 1] != null){
                            workshops += " & "
                        }
                    }
                }
                return workshops
            },
            getWorkShopName(index) {
                switch (index) {
                    case 0:
                        return "Web Development"
                    case 1:
                        return "Mobile Apps Development"
                    case 2:
                        return "Cyber Security"
                    case 3:
                        return "Artificial Intelligence"
                }
            },
            validate () {
                if(this.$refs.form.validate() && (this.selectedWorkshops.length > 0) && (this.selectedProgramingLevel != null) && (this.selectedCategory != null) && (this.terms != false)) {
                    this.contactLoad = true
                    const info = {
                        full_name: this.fullName,
                        email: this.email,
                        phone_number: this.phone,
                        category: this.getSelectedCategory(),
                        programing_level: this.getSelectedProgramingLevel(),
                        workshops: this.getSelectedWorkshops(),
                        profession: this.profession
                    };
                    this.$http.post("new-registration", info)
                        .then(response => {
                            this.contactLoad = false
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
                            console.error("There was an error!", error);
                        });
                }
            },
            reset () {
                this.selectedCategory = null
                this.selectedProgramingLevel = null
                this.selectedWorkshops = []
                this.terms = false
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
        padding-bottom: 25px;
    }
    .contact-form {
        background-color: #f2f6fc;

        border-radius: 20px;
    }
</style>