import * as types from './mutation-types';

const mutations = {
    [types.SET_SESSIONID](state,sessionId){
        state.sessionId = sessionId;
    },
    [types.SET_TICKET](state,ticket){
        state.ticket = ticket;
    },
    [types.SET_DATE](state,index,newDate){
        state.planeSearchData.date[index] = newDate;
    }
}

export default mutations;