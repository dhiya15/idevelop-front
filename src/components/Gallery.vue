<template>
    <div id="events">
        <v-container class="gallery">
            <h1 class="gallery-title">{{gallery_header.title}}</h1>
            <p class="paragraph">
                {{gallery_header.description}}
            </p>
            <v-carousel cycle style="overflow: auto;" :show-arrows="true" :hide-delimiters="true" :hide-delimiter-background="true">
                <v-carousel-item
                        v-for="(carousel, i) in gallery_content"
                        :key="i"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        @click="$router.push({path: '/details/' + carousel.id})"
                        style="cursor: pointer;"
                >
                    <div class="text-center" >
<!--                        <img alt="image" :src="'http://localhost:8000/' + carousel.image" style="border-radius: 20px; width: 100%; height: 400px"/>-->
                        <img :src="'https://idevelop.club/Dashboard/IDevelopBack/public/' + carousel.image" style="border-radius: 20px; width: 100%; height: 420px"/>
                        <v-col class="text-pre-wrap" align="center" justify="center" align-self="center">
                            <span class="title">{{carousel.title}}</span>
                            <p>{{carousel.description}}</p>
                        </v-col>
                    </div>
                </v-carousel-item>
            </v-carousel>
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

            }
        },
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