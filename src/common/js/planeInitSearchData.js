import { getDate2 } from 'common/js/day.js';

const firstDay = new Date();
const secondDay = new Date().setDate(firstDay.getDate() + 1);
const thirdDay = new Date().setDate(firstDay.getDate() + 2);
const [first,second,third] = [getDate2(firstDay),getDate2(secondDay),getDate2(thirdDay)];

const data = {
  id: "",
  date:[first,second,third],
  stopsIds:['CAN','SHA','SHA'],
  trips:{},
  stops:{
    CAN:{
      c:'CAN',
      n:'广州'
    },
    SHA:{
      c:'SHA',
      n:'上海'
    }
  },
  cabinRequire:'',
  tripType:0,
}

export default data;

