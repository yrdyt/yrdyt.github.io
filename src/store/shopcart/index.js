import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api"

const state = {
    cartList: []
}
const mutations = {
    CETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('CETCARTLIST', result.data)
        }

    },
    async deleteCartListById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListById', item.skuId) : '';
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch('updateCheckedById', {
                skuId: item.skuId,
                isChecked,
            })
            promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}