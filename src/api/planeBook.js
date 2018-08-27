import request from './config.js';

export function getBudgetSpaceType(){
    request.post('appBudgetRuleController.do?getBudgetSpaceType')
           .then(res => {

           })
}