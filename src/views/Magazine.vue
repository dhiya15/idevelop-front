<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-card :class="hover ? 'card-with-border' : 'card-without-border'">
                <v-row justify="center">
                    <v-icon size="80px" class="mt-5 color-display" :color="hover ? 'green' : 'grey'">
                        mdi-account
                    </v-icon>
                </v-row>
                <v-row justify="center">
                    <p  class="color-display" :style="hover ? 'color:green' : 'grey'">Specific Broker</p>
                </v-row>
            </v-card>
        </v-hover>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Magazine"
    }
</script>

<style scoped>
    .card-with-border {
        cursor: pointer;
        border: solid green 1px;
        border-radius: 5px;
    }
    .card-without-border {
        cursor: none;
    }
</style>