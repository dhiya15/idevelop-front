<template>
    <div class="all2">
        <Header :magasin="magasin"/>

        <v-container style="margin-top: 80px">
            <iframe
                class="magazine"
                src="https://heyzine.com/api1?pdf=https://idevelop.club/test.pdf&k=048288116f984006&d=0&t=Volume 01 N° 01&s=Hello World&lg=https://idevelop.club/test.png"
            ></iframe>
        </v-container>

        <Footer :magasin="magasin"/>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Magazine",
        components: {Header, Footer},
        data: () => ({
            magasin: {},
            overlay: false
        }),
        created() {
            this.initialize()
        },
        mounted() {
            document.title = 'Magazine'
        },
        methods: {
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
    .all2 {
        background-color: #F8FAFC;
    }
    .magazine {
        width: 100%;
        border-radius: 10px;
        height: 500px;
    }
</style>