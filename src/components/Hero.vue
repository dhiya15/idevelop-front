<template>
    <v-col class="hero">
        <v-row justify="center" align="center" align-content="center">
            <img :src="'https://idevelop.club/Dashboard' + magasin.logo" height="32" alt="ID Logo" class="mt-1"/>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-list class="d-flex align-center" style="background-color: transparent">
                    <a style="text-decoration: none" :href="menu.id" v-for="(menu, index) in menus" :key="index">
                        <v-list-item  link>
                            <v-list-item-title><b>{{menu.title}}</b></v-list-item-title>
                        </v-list-item>
                    </a>
                    <v-list-item  link to="/magazine">
                        <v-list-item-title><b>ID Magazine</b></v-list-item-title>
                    </v-list-item>
                    <v-list-item  link to="/magazine">
                        <v-list-item-title><b>ID Channel</b></v-list-item-title>
                    </v-list-item>
                    <v-list-item  link to="/contact">
                        <v-list-item-title><b>Contact US</b></v-list-item-title>
                    </v-list-item>
                    <v-spacer></v-spacer>
                </v-list>
            </v-toolbar-items>
            <div class="hidden-md-and-up">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <a style="text-decoration: none" :href="menu.id" v-for="(menu, index) in menus" :key="index">
                            <v-list-item  link>
                                <v-list-item-title><b>{{menu.title}}</b></v-list-item-title>
                            </v-list-item>
                        </a>
                        <v-list-item  link to="/magazine">
                            <v-list-item-title><b>ID Magazine</b></v-list-item-title>
                        </v-list-item>
                        <v-list-item  link to="/magazine">
                            <v-list-item-title><b>ID Channel</b></v-list-item-title>
                        </v-list-item>
                        <v-list-item  link to="/contact">
                            <v-list-item-title><b>Contact US</b></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-row>
        <v-row style="margin-top: 40px">
            <v-col lg="7" md="7" cols="12" align-self="center">
                <h1 class="hero-title">{{magasin.title}}</h1>
                <p class="hero-content">
                    {{magasin.description}}
                </p>
                <v-btn color="#1D8BE1" class="hero-button" @click="$router.push({path: '/contact'})" large>
                    Contact-US
                </v-btn>
            </v-col>
            <v-col lg="5" md="5" cols="12" align-self="center">
                <img class="hero-image text-right" alt="hero image" src="../assets/hero.png">
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Hero",
        props:{
            magasin: Object
        },
        data: () => ({
            menus: [
                {id: "/", title: "Home", route:"/"}
            ]
        })
    }
</script>

<style scoped>
    .hero {
        height: 100vh;
    }
    .hero-title {
        font-size: 50px;
        color: #66666a;
    }
    .hero-content {
        font-size: 16px;
        color: #66666a;
        text-align: justify;
        width: 90%;
    }
    .hero-button {
        padding: 50px;
        color: white;
    }
    @media screen and (max-width: 550px) {
        .hero-title {
            font-size: 40px;
        }
        .hero-content {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 280px) {
        .hero-title {
            font-size: 40px;
        }
        .hero-content {
            font-size: 15px;
        }
    }

    .hero-image {
        margin: 0 auto;
        /*max-width: 400px;*/
        width: 100%;
        height: auto;
        border-radius: 2.25rem;
    }
</style>