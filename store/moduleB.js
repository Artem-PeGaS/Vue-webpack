const RESTATE = 'RESTATE';

const moduleB = {
	namespaced: true,
	state: {
		name: 'moduleB', v2: 4
	},
	mutations: {
		[RESTATE](state) {
			state.v2 += 4;
		}
	},
	actions: {
		getReState({ commit, rootState }) {
			console.log(rootState.count);
			setTimeout(() => {
				commit('RESTATE');
			}, 2000);
		}
	},
	getters: {
		setName(state) {
			return state.name + ' =)' 
		}
	},
	modules: {
		qwe: {
			actions: {
				ehuuuuu({ commit, rootState }) {
					commit('RESTATE');
				} 
			}
		}
	}
}

export default moduleB;