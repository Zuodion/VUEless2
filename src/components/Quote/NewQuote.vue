<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
                Characters: {{ quote.length }}/30
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuoteGrid",
    data() {
        return {
            quote: ""
        };
    },
    methods: {
        createNew() {
            if (this.$store.getters.quotes.length > 9) {
                alert('Please delete Quotes first!')
                return;
            }
            if (this.quote.length < 31) {
                this.$store.dispatch("addQuote", this.quote);
                this.quote = "";
            } else {
                alert('You must enter up to 20 characters!')
            }
        }
    }
};
</script>

