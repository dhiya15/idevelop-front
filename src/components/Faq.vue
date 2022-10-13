<template>
    <div class="faq pt-10 pb-10" id="faq">
        <h1 class="heading text-center">Frequently Asked Questions</h1>
        <v-row class="faq-row">
            <v-col cols="12">
                <v-expansion-panels flat style="margin-bottom: 10px">
                    <v-expansion-panel>
                        <v-expansion-panel-header class="faq-header">
                            Frequently Asked Questions 1
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div>
                                <p>The VueJs framework is a progressive JavaScript framework used to implement user interfaces (UIs) and single-page applications (SPAs).</p>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels flat style="margin-bottom: 10px">
                    <v-expansion-panel>
                        <v-expansion-panel-header class="faq-header">
                            Frequently Asked Questions
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div>
                                <p>The VueJs framework is a progressive JavaScript framework used to implement user interfaces (UIs) and single-page applications (SPAs).

                                </p>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels flat style="margin-bottom: 10px">
                    <v-expansion-panel>
                        <v-expansion-panel-header class="faq-header">
                            Frequently Asked Questions 3
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div>
                                <p>The VueJs framework is a progressive JavaScript framework used to implement user interfaces (UIs) and single-page applications (SPAs).

                                </p>
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