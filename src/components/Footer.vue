<template>
    <div class="footer">
        <v-row class="text-center">
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">Test name</h3>
                <p class="footer-item-content">Test short address<p/>
            </v-col>
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">Address & Contact</h3>
                <p class="footer-item-content">
                    <span><v-icon>mdi-email</v-icon> contact@idevelop.club</span>
                    <br>
                    <span><v-icon>mdi-phone</v-icon> 06-72-02-34-97</span>
                    <br>
                    <span><v-icon>mdi-map-marker</v-icon> Street of ali bouhassoun, Kerzaz</span>
                </p>
            </v-col>
            <v-col class="footer-item" md="4" cols="12">
                <h3 class="footer-item-title">Be Social with US</h3>
                <p class="footer-item-content pt-2">
                    <v-row class="text-center" justify="center">
                        <v-col cols="1"><a href="www.google.com" target="_blank"><v-icon color="blue">mdi-facebook</v-icon></a></v-col>
                        <v-col cols="1"><a href="www.google.com" target="_blank"><v-icon color="blue">mdi-twitter</v-icon></a></v-col>
                        <v-col cols="1"><a href="www.google.com"><v-icon>mdi-instagram</v-icon></a></v-col>
                        <v-col cols="1"><a href="www.google.com"><v-icon color="red">mdi-youtube</v-icon></a></v-col>
                    </v-row>
                </p>
                <p>
                    Copyright © idevelop - {{new Date().getFullYear() }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Footer",
        data: () => ({

        }),
        created() {
            this.initialize()
        },
        methods: {
            initialize() {

            }
        },
    }
</script>

<style scoped>
    .footer {
        padding: 30px;
        background-image: linear-gradient(to right, #c1e1fc, #e8f5ff);
    }
    .footer-item-content {
        margin-top: 10px;
    }
    a {
        text-decoration: none;
    }
</style>