import * as types from './mutation-types';

const mutations = {
    [types.SET_SESSIONID](state,sessionId){
        state.sessionId = sessionId;
    },
    [types.SET_TICKET](state,ticket){
        state.ticket = ticket;
    }
}

export default mutations;