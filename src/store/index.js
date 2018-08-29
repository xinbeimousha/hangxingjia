import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';
//开发的时候借助这个我们可以在控制台追踪到state更改的各个状态
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})