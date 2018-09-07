<template>
  <div class="search-result">
    <HeaderTitle title="我的机票" :btnLeft="true" />
    <div class="choose-sort border-1px">
      <span class="sort time-sort">时间排序</span>
      <span class="sort price-sort">价格排序</span>
    </div>
    <div class="flight-list-wrapper">
      <FlightList 
        v-if="showList"
        :flightData="flightData"
        :showSeat="showSeat"
      />
      <div class="fail-tips" v-if="showTips"> 
        <icon 
          name="warn"
          size="1.5rem"
          color="#c8c8c8"
        />
        <p class="text">抱歉，查询不到满足条件的航班</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import FlightList from "components/FlightList/FlightList";
import { getLocal } from "common/js/storage.js";
import { searchPlaneList } from "api/planeSearchResult.js";
import { getTime } from 'common/js/day.js';
import { airPortInfos } from 'common/js/newairport.js';
import { Icon } from 'vant';

export default {
  components: {
    HeaderTitle,
    FlightList,
    Icon
  },

  props: ["id"],
  data() {
    return {
      record: null,
      showList:false,
      showTips:false,
      flightData:[],
      seatData:[],
      showSeat:false
    };
  },
  computed: {
    page() {
      return Number.parseInt(this.id);
    }
  },
  created() {
    this.record = JSON.parse(getLocal("record"));
    this.tripType = this.record.tripType;
    this._searchPlaneList();
  },
  methods: {
    // 查询机票列表
   async _searchPlaneList() {
      const searchData = this._handleSearchPlaneData();
      const searResult = await searchPlaneList(searchData);

      if(searResult.success){
        const obj = searResult.obj.data.flights;
        // 过滤没有仓位的航班
        const flights = obj.filter(item => {
          return item.seats.length > 0
        });
        if(flights.length === 0){
          this.showTips = true;
          return;
        }
        const newFlights = this._normalizeFlightData(flights)
        this.flightData = newFlights;
        this.showList = true;
      }else{
        this.showTips = true;
      }
    },
    /**
     * @description 处理查询机票所需要的数据
     * @param {index} 当前行程的索引，单程和往返只有一条行程，所以默认为0
     */
    _handleSearchPlaneData(index = 0) {
      if(this.tripType === 2){
        index = this.page
      }
      const searchData = {
        fromCity: this.record.stops[index][0].c,
        toCity: this.record.stops[index][1].c,
        airDate: this.record.date[this.page],
        siteType: this.record.cabinRequire,
        cmdShare: "1",
        stopType: "N"
      };
      if(this.tripType === 1 && this.page === 1){
        searchData.fromCity = this.record.stops[index][1].c;
        searchData.toCity = this.record.stops[index][0].c;
      }

      return searchData;
    },
    // 整理查询机票返回的航班列表数据
    _normalizeFlightData(data){
      const flightList = []
      data.forEach(item => {
        const [
          depDate,
          arrDate,
          depAirportCode,
          arrAirportCode,
          depAirportTerm,
          arrAirportTerm,
          airlineCode,
          flightNo,
          shareFlightNo,
          flightType,
          lowPrice
        ] = [
          item.departureDate.time,
          item.arrivalDate.time,
          item.depart,
          item.arrival,
          item.departureTerminal,
          item.arrivalTerminal,
          item.carrier,
          item.flightNo,
          item.shareFlightNo,
          item.aircraft,
          item.price
        ]
        flightList.push({
          depDate,
          arrDate,
          depTime:getTime(depDate),
          arrTime:getTime(arrDate),
          depAirportCode,
          arrAirportCode,
          depAirportName:this._getAirportName(depAirportCode,depAirportTerm),
          arrAirPortName:this._getAirportName(arrAirportCode,arrAirportTerm),
          airlineCode,
          flightNo,
          flightName:airlineCode + flightNo,
          shareFlightNo,
          flightType,
          lowPrice
        })
      });

      return flightList;
    },
    // 获取机场的名称
    _getAirportName(code,iterm){
      let airportName = '';
      airportName = airPortInfos[code].airPortName + iterm;
      return airportName;
    }

  },
  watch:{
    '$route'(to,from){
      this._searchPlaneList();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.search-result {
  full-fixed(100);
  y-view();
  background-color: $color-body;

  .choose-sort {
    x-middle();
    padding: 0.2rem 0;
    border-1px(#BABABA);
    background-color: $color-white;

    .sort {
      flex: 1;
      text-align: center;
    }

    .time-sort {
      border-right: 1px solid #e1e1e1;
    }
  }

  .flight-list-wrapper{
    position:relative;
    flex:1;
    overflow-y :scroll;
    -webkit-overflow-scrolling: touch;

    .fail-tips {
      position:absolute;
      top:30%;
      left:0;
      right:0;
      text-align:center;
       
       .text{
         color:$color-text;
       }
    }
  }


}
</style>


