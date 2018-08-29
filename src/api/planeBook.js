import request from './config.js';

export function getBudgetSpaceType(){
     return request({
         url:'appBudgetRuleController.do?getBudgetSpaceType',
         method:'post'
     }).then(res => {
         return Promise.resolve(res.data)
     })             
}