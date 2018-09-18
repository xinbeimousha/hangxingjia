import { getDate2 } from 'common/js/day.js';

const firstDay = new Date();
const secondDay = new Date().setDate(firstDay.getDate() + 1);
const thirdDay = new Date().setDate(firstDay.getDate() + 2);
const [first,second,third] = [getDate2(firstDay),getDate2(secondDay),getDate2(thirdDay)];

const data = {
  tripId: "",
  date:[first,second,third],
  stopsIds:['CAN','SHA','SHA','SZX'],
  stops:{
    CAN:{
      c:'CAN',
      n:'广州',
      region:0
    },
    SHA:{
      c:'SHA',
      n:'上海',
      region:0
    },
    SZX:{
      c:'SZX',
      name:'深圳',
      region:0
    }
  },
  cabinRequire:'',
  tripType:0,
}

export default data;

