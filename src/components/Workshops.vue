<template>
    <div class="services pt-15 pb-10" id="workshops">
        <v-container>
            <h1 class="heading">{{workshops_header.title}}</h1>
<!--            <p class="paragraph">-->
<!--                {{workshops_header.description}}-->
<!--            </p>-->
            <v-row>
                <v-col md="4" sm="6" cols="12" v-for="index in paginationLength" :key="index">
                    <div class="services-item" v-if="((page * paginationLength - paginationLength + index - 1) >= 0) && ((page * paginationLength - paginationLength + index - 1) < workshops_content.length)">
                        <h2 class="service-title">{{workshops_content[page * paginationLength - paginationLength + index - 1].title}}</h2>
                        <img class="service-image mt-3" alt="service image" height="150" :src="'https://idevelop.club/Dashboard/IDevelopBack/public/' + workshops_content[page * paginationLength - paginationLength + index - 1].image">
                        <p class="service-content">
                            {{workshops_content[page * paginationLength - paginationLength + index - 1].description.toString().substring(0, 45)}}
                            <span v-if="workshops_content[page * paginationLength - paginationLength + index - 1].description.toString().length > 45">...</span> <br>
                        </p>
                        <v-btn
                            class="service-button"
                            color="#1D8BE1"
                            outlined rounded
                            @click="$router.push({path: '/details/' + workshops_content[page * paginationLength - paginationLength + index - 1].id})"
                        >
                            Read more
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <div class="text-center mt-6" v-if="workshops_content.length > 0">
                <v-pagination
                        color="#1D8BE1"
                        v-model="page"
                        :length="Math.ceil(workshops_content.length / paginationLength)"
                ></v-pagination>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Solutions",
        data: () => ({
            paginationLength: 6,
            page: 1
        }),
        props: {
            workshops_header: Object,
            workshops_content: Array,
        },
    }
</script>

<style scoped>
    .heading {
        font-size: 36px;
        font-weight: 600;
    }
    .paragraph {
        color: #777;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        padding: 10px;
    }
    .services-row {
        margin-top: 15px;
    }
    .services-content {
        margin-top: 15px;
        font-size: 20px;
    }
    .services-item {
        padding: 10px;

    }
    .services-item:hover {
        padding: 10px;
        /*background-color: #ddeafc;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/
        cursor: pointer;
    }
    .services-title {
        font-size: 40px;
    }
    .service-image {
        border-radius: 20px;
        width: 100%;
    }
    .service-title {
        margin-top: 10px;
    }
    .service-content {
        margin-top: 10px;
    }
</style>