import request from './config.js';
import axios from 'axios';
export function getTravelDetails(){
    return  request({
        url:'appTmcItineraryController.do?getTravelDetails',
        methods:'POST'
    }).then(res=>{
        return Promise.resolve(res.data)
    })
}