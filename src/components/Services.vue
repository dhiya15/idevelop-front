<template>
    <div class="how-it-work pt-10 pb-10 text-center" id="services">
        <v-container>
            <h1 class="heading">{{services_header.title}}</h1>
            <p class="paragraph">
                {{services_header.description}}
            </p>
            <v-row class="how-it-work-row text-center" align="center" align-content="center" justify="center">
                <v-col md="3" sm="6" cols="12" v-for="index in paginationLength" :key="index">
                    <div class="how-it-work-item" @click="console.log('hello')" v-if="index <= services_content.length">
                        <img class="how-it-work-item-image" alt="service image" height="150" :src="'https://idevelop.club/Dashboard/IDevelopBack/public/' + services_content[page * paginationLength - paginationLength + index - 1].image">
                        <h3 style="text-overflow: ellipsis; padding-left: 10px; padding-right: 10px" class="how-it-work-item-title">
                            {{services_content[page * paginationLength - paginationLength + index - 1].title}}
                        </h3>
                        <p style="text-overflow: fade; padding-left: 10px; padding-right: 10px" class="how-it-work-item-content">
                            {{services_content[page * paginationLength - paginationLength + index - 1].description}}
                        </p>
                    </div>
                </v-col>
            </v-row>
<!--            <div class="text-center mt-6" v-if="services_content.length > 0">-->
<!--                <v-pagination-->
<!--                        color="#1D8BE1"-->
<!--                        v-model="page"-->
<!--                        :length="Math.ceil(services_content.length/paginationLength)"-->
<!--                ></v-pagination>-->
<!--            </div>-->
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "HowitWork",
        props: {
            services_header: Object,
            services_content: Array,
        },
        data: () => ({
            paginationLength: 4,
            page: 1
        })
    }
</script>

<style scoped>
    .how-it-work{
        /*background-color: #FFFEE9;*/
    }
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
    .how-it-work-row {
        margin-top: 15px;
    }
    .how-it-work-item-image {
        border-radius: 5%;
        width: 80%;
    }
    .how-it-work-item {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #F8FAFC;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 380px;
    }
    .how-it-work-item-title {
        margin-top: 10px;
    }
    .how-it-work-item-content {
        margin-top: 10px;
    }
    .how-it-work-item:hover {
        cursor: pointer;
        background-color: #c8d3ec;
    }
</style>