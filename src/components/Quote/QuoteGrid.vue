<template>
    <div class="row">
        <quote-grid-item
            v-for="(quote, quoteIndex) in quotes"
            :key="quoteIndex"
            @dblclick.native="deleteQuote(quoteIndex)"
        >{{ quote }}</quote-grid-item>
    </div>
</template>

<script>
import QuoteGridItem from "./QuoteGridItem.vue";
export default {
    name: "QuoteGrid",
    props: {
        quotes: Array
    },
    components: {
        QuoteGridItem
    },
    methods: {
        deleteQuote(quoteIndex) {
            this.$store.dispatch("deleteQuote", quoteIndex);
        }
    }
};
</script>

<style>
</style>
