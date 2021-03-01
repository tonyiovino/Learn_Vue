const state = {
	qty: 0,
	valore: 0.1,
	costo_upgrade: 1,
}

const getters = {
	clickQty: state => state.qty,
	clickValore: state => state.valore
}

const mutations = {
	incrClick: state => state.qty++
}

const actions = {

}

export default {
	state,
	getters,
	mutations,
	actions
}