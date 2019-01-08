import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'

import moduleA from './moduleA.js'
import moduleB from './moduleB.js'

Vue.use(Vuex);

const INCREMENT = 'INCREMENT';

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doneTodos (state) {
            return state.count + 5;
        }
    },
    mutations: {
        [INCREMENT] (state, { a }) {
            state.count = a;
        }
	},
	actions: {
		increment({commit}, obj) {
			setTimeout(() => {
				commit('INCREMENT', obj);
			}, 2000);
		}
	},
	modules: {
		moduleA,
		moduleB
	}
});

store.registerModule('myModule', {
	state: {
		y: 990
	}
});

store.watch(
	function (state) {
	  return state.count
	},
	function() {
		console.log('watch у хранилища');
	}
);

// store.unregisterModule('myModule');

export default store;