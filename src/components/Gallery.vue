<template>
    <div id="events">
        <v-container class="gallery">
            <h1 class="gallery-title">{{gallery_header.title}}</h1>
            <v-card flat tile class="mt-4">
                <v-window v-model="onboarding" reverse>
                    <v-window-item v-for="(carousel, i) in gallery_content" :key="i">
                        <v-card color="grey" height="400">
                            <v-row class="fill-height" align="center" justify="center">
                                <img alt="" :src="'https://idevelop.club/Dashboard/IDevelopBack/public/' + carousel.image" style="border-radius: 20px; width: 100%; height: 400px"/>
                            </v-row>
                        </v-card>
                        <div class="mt-3">
                            <h2 class="text-center">{{carousel.title}}</h2>
                            <div class="text-center" style="font-size: 14px">{{carousel.description}}</div>
                        </div>
                    </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                    <v-btn text @click="prev">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-item-group v-model="onboarding" class="text-center" mandatory>
                        <v-item v-for="i in gallery_content.length" :key="i" v-slot="{ active, toggle }">
                            <v-btn :input-value="active" icon @click="toggle">
                                <v-icon>mdi-record</v-icon>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn text @click="next">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Gallery",
        props: {
            gallery_header: Object,
            gallery_content: Array
        },
        data() {
            return {
                length: this.gallery_content.length,
                onboarding: 1,
            }
        },
        methods: {
            next () {
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            },
        },
        created() {
            setInterval(() => {
                this.next()
            }, 10000)
        }
    }
</script>

<style scoped>
    .gallery {
        padding: 30px;
    }
    .gallery-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .gallery-title {
        font-size: 40px;
    }
    .paragraph {
        color: #777;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        padding: 10px;
    }
</style>