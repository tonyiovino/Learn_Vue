const state = {
    qty: 0,
    valore: 10,
    sec: 0,
    costo_buy: 10,
    costo_upgrade: 100,
}

const getters = {
    dipendentiQty: state => state.qty,
    dipendentiValore: state => state.valore,
    dipendentiSec: state => state.sec,
    dipendentiCostoBuy: state => state.costo_buy,
    dipendentiCostoUpgrade: state => state.costo_upgrade
}

const mutations = {

}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}