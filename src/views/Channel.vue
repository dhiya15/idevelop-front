<template>
    <div class="all2">
        <Header :magasin="magasin"/>

        <v-container style="margin-top: 80px;">

            <v-row>
                <v-col md="6" cols="12">
                    <iframe class="item" src="https://www.youtube.com/embed/KJ12q2PEW5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-col>
                <v-col md="6" cols="12">
                    <img class="item" alt="id img" src="../assets/cover.png">
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <a href="https://www.youtube.com/channel/UCOy62Ds4jMZasjrnvd6Z0wg"><img class="channel-image" height="100" alt="id img" src="../assets/youtube.png"></a>
                </v-col>
            </v-row>

        </v-container>

        <Footer :magasin="magasin"/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Channel",
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
    .item {
        width: 100%;
        height: 100%;
    }
    .channel-image:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 480px) {
        .item {
            height: 300px;
        }
    }
</style>