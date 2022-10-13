<template>
    <div class="all">
        <v-container>
            <Header v-if="isHidden === false"/>
            <Hero/>
            <Services/>
            <WhyUs/>
            <Faq/>
        </v-container>

    </div>
</template>

<script >
    import Header from '../components/Header';
    import Hero from '../components/Hero';
    import Services from '../components/Services';
    import Faq from '../components/Faq';
    import WhyUs from "../components/WhyUs";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            WhyUs,
            Header,
            Hero,
            Services,
            Faq
        },
        data: () => ({
            isHidden: true,
        }),
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
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


