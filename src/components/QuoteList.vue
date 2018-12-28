<template>
    <div class="container">
        <the-header :quote-count="quotes.length" :max-quotes="maxQuotes"/>
        <new-quote/>
        <quote-grid :quotes="quotes"></quote-grid>
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">Info: Doubleclick on a Quote to delete it!</div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from "./Quote/QuoteGrid.vue";
import NewQuote from "./Quote/NewQuote.vue";
import TheHeader from "./Quote/TheHeader.vue";
import { mapGetters } from "vuex";

export default {
    name: "QuotesList",
    data() {
        return {
            maxQuotes: 10
        };
    },
    computed: {
        ...mapGetters(["quotes"])
    },
    components: {
        QuoteGrid,
        NewQuote,
        TheHeader
    }
};
</script>
