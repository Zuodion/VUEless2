import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const ADDING_QUOTE = 'ADDING_QUOTE'
const DELETING_QUOTE = 'DELETING_QUOTE'

const state = {
	quotes: []
}

const getters = {
	quotes: state => state.quotes,
}

const actions = {
	addQuote({
		commit
	}, quote) {
		commit(ADDING_QUOTE, quote)
	},
	deleteQuote({
		commit
	}, quoteIndex) {
		commit(DELETING_QUOTE, quoteIndex)
	}
}

const mutations = {
	[ADDING_QUOTE](state, quote) {
		state.quotes.push(quote);
	},
	[DELETING_QUOTE](state, quoteIndex) {
		state.quotes.splice(quoteIndex, 1)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
});

export default store;