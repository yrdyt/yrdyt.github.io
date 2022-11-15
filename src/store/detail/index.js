import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from '@/utils/uuid_token'

const state = {
    goodInfo: {},
    uuid_token: getUUID()
};
const mutations = {
    GETGOODINFO(state, goodinfo) {
        state.goodInfo = goodinfo
    }
};
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}