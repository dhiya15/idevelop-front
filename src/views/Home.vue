<template>
    <div class="all">
        <Header :magasin="magasin" v-if="isHidden === false"/>
        <v-container>
            <Hero :magasin="magasin"/>
            <Gallery :gallery_header="gallery_header" :gallery_content="gallery_content"/>
            <Solutions :solutions_header="solutions_header" :solutions_content="solutions_content"/>
            <Workshops :workshops_header="workshops_header" :workshops_content="workshops_content"/>
<!--            <Faq :faq_header="faq_header" :faq_content="faq_content"/>-->
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
    import Solutions from '../components/Solutions';
    import Faq from '../components/Faq';
    import Footer from "../components/Footer";
    import CallToAction from "../components/CallToAction";
    import Workshops from "../components/Workshops";
    import Gallery from "../components/Gallery";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            Gallery,
            Workshops,
            CallToAction,
            Footer,
            Header,
            Hero,
            Solutions,
            // eslint-disable-next-line vue/no-unused-components
            Faq
        },
        data: () => ({
            isHidden: true,
            overlay: false,
            magasin: {},
            faq_header: {},
            faq_content: [],
            workshops_header: {},
            workshops_content: [],
            solutions_header: {},
            solutions_content: [],
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
                        this.workshops_header = response.data.workshops_header[0];
                        this.workshops_content = response.data.workshops_content;
                        this.solutions_header = response.data.solutions_header[0];
                        this.solutions_content = response.data.solutions_content;
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


