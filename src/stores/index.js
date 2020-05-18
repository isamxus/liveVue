import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    	//全局缓存视图
        keepAliveViews: [],
    },
    mutations: {

    }
})