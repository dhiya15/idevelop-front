<template>
    <div class="services pt-15 pb-10" id="workshops">
        <v-container>
            <h1 class="heading">Workshops title</h1>
            <p class="paragraph">
                Workshops title workshops title workshops title workshops title
            </p>
            <v-row class="services-row">
                <v-col md="4" sm="6" cols="12">
                    <div class="services-item">
                        <img class="service-image" alt="service image" height="150" src="https://source.unsplash.com/user/c_v_r/100x100">
                        <h3 class="service-title">Workshop 01</h3>
                        <p class="service-content">
                            Workshops title workshops title workshops title workshops title<br>
                            <small><i>12/02/2022</i></small>
                        </p>
                        <v-btn
                            class="service-button"
                            color="#1D8BE1"
                            outlined rounded
                            @click="console.log('hello')"
                        >
                            Read more
                        </v-btn>
                    </div>
                </v-col>
                <v-col md="4" sm="6" cols="12">
                    <div class="services-item">
                        <img class="service-image" alt="service image" height="150" src="https://source.unsplash.com/user/c_v_r/100x100">
                        <h3 class="service-title">Workshop 01</h3>
                        <p class="service-content">
                            Workshops title workshops title workshops title workshops title<br>
                            <small><i>12/02/2022</i></small>
                        </p>
                        <v-btn
                                class="service-button"
                                color="#1D8BE1"
                                outlined rounded
                                @click="console.log('hello')"
                        >
                            Read more
                        </v-btn>
                    </div>
                </v-col>
                <v-col md="4" sm="6" cols="12">
                    <div class="services-item">
                        <img class="service-image" alt="service image" height="150" src="https://source.unsplash.com/user/c_v_r/100x100">
                        <h3 class="service-title">Workshop 01</h3>
                        <p class="service-content">
                            Workshops title workshops title workshops title workshops title<br>
                            <small><i>12/02/2022</i></small>
                        </p>
                        <v-btn
                                class="service-button"
                                color="#1D8BE1"
                                outlined rounded
                                @click="console.log('hello')"
                        >
                            Read more
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <div class="text-center mt-6">
                <v-pagination
                        color="#1D8BE1"
                        v-model="page"
                        :length="Math.ceil(3/paginationLength)"
                ></v-pagination>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Services",
        data: () => ({
            paginationLength: 3,
            page: 1
        })
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
        padding: 30px;
    }
    .services-item:hover {
        padding: 30px;
        background-color: #ddeafc;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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