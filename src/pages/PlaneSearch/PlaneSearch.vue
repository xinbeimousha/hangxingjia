<template>
  <div class="plane-search">
    <HeaderTitle title="机票预订" :btnLeft="true" />
    <div class="search-container">
      <div class="trip-choosed" @click="showSelet">
        <span class="trip-title">{{ tripName }}</span>
        <Icon name="arrow" />
      </div>
      <div class="flight-detail">
        <Tabs class="reset" @click="getCurrentTabIndex">
          <Tab 
            v-for="(item,index) in tripTypes" 
            :title="item.name" 
            :key="index"
          >
          </Tab>
        </Tabs>
        <div class="flight-content">
          <div class="one-way" v-if="currentTabIndex === 0">
            <div class="city border-1px">
              <div class="from">
                {{ fromCity }}
              </div>
              <div class="icon">
                <div class="logo">
                  <img src="./return.png" alt="">
                </div>
              </div>
              <div class="to">
                {{ toCity }}
              </div>
            </div>
            <div class="date border-1px">
              <span class="depart" @click="showDatePicker(currentTabIndex)">{{ departDate }}</span>
            </div>
          </div>
          <div class="two-way" v-else-if="currentTabIndex === 1">
            <div class="city border-1px">
              <div class="from">
                {{ fromCity }}
              </div>
              <div class="icon">
                <div class="logo">
                  <img src="./return.png" alt="">
                </div>
              </div>
              <div class="to">
                {{ toCity }}
              </div>
            </div>
            <div class="date border-1px">
              <span class="depart" @click="showDatePicker(currentTabIndex-1)"> {{ departDate }} </span>
              <span class="pad"></span>
              <span class="arrival" @click="showDatePicker(currentTabIndex)"> {{ arrivalDate }}</span>
            </div>
          </div>
          <div class="multi-way" v-else>其他</div>
        </div>
      </div>
      <div class="cabin-wrapper">
        <p class="title">要求舱位</p>
        <ul class="cabin-require">
          <li 
            class="item"
            v-for="(cabin,index) in cabinData"
            :class="{'active-item':cabin.value}"
            :key="index"
            @click="chooseSpaceType(index)"
          >
            {{ cabin.name }}
          </li>
        </ul>
      </div>
      <div class="btn-query" @click="query">
        查询
      </div>
    </div>
    <Actionsheet v-model="showTrip" :actions="tripList" @select="hideSelect" />
    <Popup 
      v-model="showDate" 
      position="bottom"
    >
      <DatetimePicker 
        v-model="currentDate" 
        type="date" 
        :min-date="new Date(this.departDate)" 
        @cancel="hideDatePicker" 
        @confirm="chooseDate" 
      />
    </Popup>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { cabinData } from './cabinData.js';
import { Actionsheet, Icon } from "vant";
import { Tab, Tabs, DatetimePicker, Popup, Toast } from "vant";
import { getBudgetSpaceType, getItineraryList } from "api/planeBook";
import { getDate1, getDate2, getTime } from "common/js/day.js";
import { setLocal } from 'common/js/storage.js';
import { mapGetters,mapMutations } from 'vuex';

export default {
  created() {
    this._getBudgetSpaceType();
    this._getItineraryList();
  },

  data() {
    return {
      showTrip: false,
      showDate: false,
      currentTabIndex:0,
      currentSearchDataIndex:0,
      tripList: [
        {
          name: "无"
        }
      ],
      tripName: "无",
      tripTypes: [
        {
          name: "单程",
          tripType: 0
        },
        {
          name: "往返",
          tripType: 1
        },
        {
          name: "多程",
          tripType: 2
        }
      ],
      tripType:0,
      cabinData:cabinData,
      currentDate: new Date(),
    };
  },
  
  computed:{
    ...mapGetters([
      'planeSearchData'
    ]),
    fromCity(){
      const stopId = this.planeSearchData.stopsIds[0];
      const stopN = this.planeSearchData.stops[stopId].n;
      return stopN;
    },
    toCity(){
      const stopId = this.planeSearchData.stopsIds[1];
      const stopN = this.planeSearchData.stops[stopId].n;
      return stopN;
    },
    departDate(){
      return this.planeSearchData.date[0];
    },
    arrivalDate(){
      return this.planeSearchData.date[1];
    }
  },
  methods: {
    ...mapMutations({
      setDate:'SET_DATE',
      setTripType:'SET_TRIPTYPE',
      setCabin:'SET_CABINREQUIRE'
    }),
    hideSelect(item) {
      this.showTrip = false;
      this.tripName = item.name;
    },

    showSelet() {
      this.showTrip = true;
    },
    
    getCurrentTabIndex(index){
      this.currentTabIndex = index;
      this.tripType = index;
      this.setTripType(index);
    },

    showDatePicker(index) {
      this.showDate = true;
      this.currentSearchDataIndex = index;
    },

    hideDatePicker() {
      this.showDate = false;
    },

    chooseDate(val) {
      const index = this.currentTabIndex;
      const newDate = getDate2(val);
      const obj = {
        index,
        newDate
      }
      this.showDate = false;
      this.setDate(obj);
    },

    chooseSpaceType(index){
      if(!this.cabinData[index].changeable){
        Toast('根据预算规则，您无权预订该舱位!');
        return;
      }
      const record = this.cabinData.filter(item => {
        return item.value === true;
      })
      if(record.length < 2){
        Toast('请至少选择一个仓位等级');
      }else{
        this.cabinData[index].value = !this.cabinData[index].value;
      }
    },
    // 查询
    query(){
      this._handleCabinRequire();
      this._setTripIntoLocal();
      console.log(this.planeSearchData)
    },
    // 获取行程
    _getItineraryList() {
      getItineraryList().then(res => {
        if (res.success) {
          this._normalizeTripList(res.obj);
        }
      });
    },
    // 处理行程返回的数据
    _normalizeTripList(obj) {
      obj.forEach((item, i) => {
        this.tripList.push({
          name: i + "." + item.itinerWorkType,
          subname: this._handleTripDate(item.itinerBegin, item.itinerEnd)
        });
      });
    },
    // 处理行程的开始和截止日期
    _handleTripDate(begin, end) {
      return getDate1(begin) + " ~ " + getDate1(end);
    },
    // 获取舱位等级
    _getBudgetSpaceType() {
      getBudgetSpaceType().then(res => {
        if(res.success){
          this._handleSpaceType(res.obj.spaceType);
        }
      })
    },
    _handleSpaceType(type){
      switch(type){
        case 'first':
        break;

        case 'business':
        this._handleSpaceTypeVal(3);
        break;

        case 'superTourist':
        this._handleSpaceTypeVal(3);
        this._handleSpaceTypeVal(2);
        break;
        default:
        this._handleSpaceTypeVal(3);
        this._handleSpaceTypeVal(2);
        this._handleSpaceTypeVal(1);

      }
    },
    _handleSpaceTypeVal(index){
      this.cabinData[index].value = false;
      this.cabinData[index].changeable = false;
    },
    // 处理已经选择的舱位
    _handleCabinRequire(){
      const cabinArr = [];
      let cabinRequire = '';
      this.cabinData.forEach(item => {
        if(item.value){
          cabinArr.push(item.data);
        }
      })
      cabinRequire = cabinArr.join(',');
      this.setCabin(cabinRequire);
    },
    // 保存行程记录到本地
    _setTripIntoLocal(){
      let record = {
        date:[],
        tripType:this.tripType,
        cabinRequire:this.planeSearchData.cabinRequire,
        stops:[]
      };
      this._setTripInfo(record);
      setLocal('record',JSON.stringify(record));
    },
    // 给行程记录填充信息
    _setTripInfo(record){
      const {date,stops,stopsIds} = this.planeSearchData;
      const multiStops = [...stopsIds];
      switch(this.tripType){
        case 0:
        record.date.push(date[0]);
        record.stops.push(
          [
            stops[stopsIds[0]],
            stops[stopsIds[1]],
          ]
        );
        break;
        case 1:
        record.date.push(date[0],date[1]);
        record.stops.push(
         [
            stops[stopsIds[0]],
            stops[stopsIds[1]]
         ]
        );
        break;
        default :
        record.date = date;
        this._handleMultiInfo(multiStops,record,stops);
      }
    },
    // 处理多程的行程信息
    _handleMultiInfo(ids,record,stops){
      const tripLength = ids.length / 2;
      const newArr = [];
      for(let i = 0;i < tripLength;i++){
        newArr.push(
          ids.splice(0,2)
        )
      }
      newArr.forEach(item => {
        record.stops.push(
         [
            stops[item[0]],
            stops[item[1]]
         ]
        );
      })
    }

  },

  components: {
    HeaderTitle,
    Actionsheet,
    Icon,
    Tab,
    Tabs,
    Popup,
    Toast,
    DatetimePicker
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.plane-search {
  y-view();

  .search-container {
    .trip-choosed {
      x-middle();
      padding: 0 0.2rem;
      margin-bottom: 0.1rem;
      background-color: $color-white;
      line-height: 3;

      .trip-title {
        flex: 1;
        color: $color-text;
      }
    }

    .flight-detail {
      margin-bottom: 0.1rem;
      background-color: $color-white;

      .reset >>> .van-tabs__line {
        background-color: $color-text-active;
      }

      .reset >>> .van-tab--active {
        color: $color-text-active;
      }

      .flight-content{
        .city,.date{
          x-middle();
          padding:0 0.2rem;
          line-height :3;
          border-1px(#e5e5e5);

          .icon,.pad{
            flex:1;
      
            .logo{
              width:0.5rem;
              margin:0 auto;
            }
          }
        }
      }
    }

    .cabin-wrapper {
      padding: 0.2rem 0.1rem 0.2rem 0.2rem;
      background-color: $color-white;

      .title {
        margin-bottom: 0.4rem;
      }

      .cabin-require {
        x-middle();
        text-align: center;
        & > .active-item {
          color:$color-white;
          background-color :$color-text-active;
        }

        .item {
          flex: 1;
          padding: 0.1rem 0;
          margin-right: 0.1rem;
          border: 1px solid #e1e1e1;
          border-radius: 5px;
        }
      }
    }

    .btn-query {
      padding: 0.2rem;
      border-radius: 5px;
      margin: 1rem 0.2rem;
      font-size: 0.32rem;
      color: $color-white;
      text-align: center;
      background-color: $color-bg-high;
    }
  }
}
</style>


