const RESTATE = 'RESTATE';

const moduleA = {
	namespaced: true,
	state: {
		name: 'moduleA', v: 2 
	},
	mutations: {
		[RESTATE](state) {
			state.v += 2; 
		} 
	},
	actions: {
		getReState({ commit }) {
			commit('RESTATE'); 
		}
	},
	getters: {
		setName(state) {
			return state.name + ' =)' 
		}
	}
}

export default moduleA;