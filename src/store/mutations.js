import * as types from './mutation-types';

const mutations = {
    [types.SET_SESSIONID](state,sessionId){
        state.sessionId = sessionId;
    },
    [types.SET_TICKET](state,ticket){
        state.ticket = ticket;
    },
    [types.SET_DATE](state,newData){
        const {index,newDate} = newData;
        state.planeSearchData.date.splice(index,1,newDate);
    },
    [types.SET_TRIPTYPE](state,newTripType){
        state.planeSearchData.tripType = newTripType;
    },
    [types.SET_CABINREQUIRE](state,cabinrequire){
        state.planeSearchData.cabinRequire = cabinrequire;
    }
}

export default mutations;