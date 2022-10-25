<template>
    <div class="faq pt-10" id="faq">
        <h1 class="heading text-center">{{faq_header.title}}</h1>
        <v-row class="faq-row">
            <v-col cols="12">
                <v-expansion-panels flat>
                    <v-expansion-panel v-for="(item,i) in faq_content" :key="i" style="margin-bottom: 12px">
                        <v-expansion-panel-header class="faq-header">
                            {{item.title}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div>
                                <p>{{item.description}}</p>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Faq",
        props:{
            faq_header: Object,
            faq_content: Array
        },
    }
</script>

<style scoped>
    .faq-row {
        margin-top: 30px;
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
    .faq-header {
        margin: 5px;
    }
</style>