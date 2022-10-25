<template>
    <div class="all">
        <Header :magasin="magasin" v-if="isHidden === false"/>
        <v-container>
            <Hero :magasin="magasin"/>
            <Services :services_header="services_header" :services_content="services_content"/>
            <Solutions :solutions_header="solutions_header" :solutions_content="solutions_content"/>
            <Gallery :gallery_header="gallery_header" :gallery_content="gallery_content"/>
            <Faq :faq_header="faq_header" :faq_content="faq_content"/>
        </v-container>
        <CallToAction/>
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

<script >
    import Header from '../components/Header';
    import Hero from '../components/Hero';
    import Services from '../components/Services';
    import Faq from '../components/Faq';
    import Footer from "../components/Footer";
    import CallToAction from "../components/CallToAction";
    import Solutions from "../components/Solutions";
    import Gallery from "../components/Gallery";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            Gallery,
            Solutions,
            CallToAction,
            Footer,
            Header,
            Hero,
            Services,
            Faq
        },
        data: () => ({
            isHidden: true,
            overlay: false,
            magasin: {},
            faq_header: {},
            faq_content: [],
            solutions_header: {},
            solutions_content: [],
            services_header: {},
            services_content: [],
            gallery_header: {},
            gallery_content: []
        }),
        created () {
            window.addEventListener('scroll', this.handleScroll)
            this.initialize()
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        },
        mounted() {
            document.title = 'Home'
        },
        methods: {
            handleScroll () {
                if(window.scrollY > 100){
                    this.isHidden = false
                }else{
                    this.isHidden = true
                }
            },
            initialize() {
                this.overlay = true
                this.$http.get("init").then(response => {
                    if(response.data != null){
                        this.magasin = response.data.magasin;
                        this.faq_header = response.data.faq_header[0];
                        this.faq_content = response.data.faq_content;
                        this.solutions_header = response.data.solutions_header[0];
                        this.solutions_content = response.data.solutions_content;
                        this.services_header = response.data.services_header[0];
                        this.services_content = response.data.services_content;
                        this.gallery_header = response.data.gallery_header[0];
                        this.gallery_content = response.data.gallery_content;
                        this.overlay = false
                    }
                }).catch(error => {
                    console.log(error)
                    this.overlay = false
                })
            }
        },
    }
</script>


<style>
    html {
        scroll-behavior: smooth;
    }
    .all{
        background: #F8FAFC url("../assets/bg_shape.png") no-repeat right top;
    }
    @media(max-width: 350px) {
        .all{
            background: #F8FAFC url("../assets/bg_shape_mobile.png") no-repeat right top;
            height: 1500px;
        }
    }
</style>


