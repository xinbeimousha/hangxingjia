<template>
  <div class="search-result">
    <HeaderTitle 
      :title="title" 
      :btnLeft="true"
      :btnRight="true"
      :className="'fa-calendar'" 
      @back="goback" 
    />
    <div class="choose-sort border-1px">
      <span class="sort time-sort" @click="sortbyTime()">时间排序</span>
      <span class="sort price-sort" @click="sortbyPrice()">价格排序</span>
    </div>
    <div class="flight-list-wrapper">
      <FlightList v-if="showList" :flightData="flightData" @show="showSeat" @book="planebook" />
      <div class="fail-tips" v-if="showTips">
        <icon name="warn" size="1.5rem" color="#c8c8c8" />
        <p class="text">抱歉，查询不到满足条件的航班</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import FlightList from "components/FlightList/FlightList";
import classCode from "common/js/classCode.js";
import { getLocal, setLocal } from "common/js/storage.js";
import { searchPlaneList, checkPrice } from "api/planeSearchResult.js";
import { getTime } from "common/js/day.js";
import { airPortInfos } from "common/js/newairport.js";
import { Icon, Dialog } from "vant";
import { gobackMixin } from 'common/js/mixins.js';
let flag = true;
export default {
  components: {
    HeaderTitle,
    FlightList,
    Icon
  },
  mixins:[gobackMixin],
  props: ["id"],
  created() {
    this.tripType = this.record.tripType;
    this._searchPlaneList();
  },
  data() {
    return {
      record: JSON.parse(getLocal("record")),
      showList: false,
      showTips: false,
      flightData: [],
      currIndex: -1,
      page: Number.parseInt(this.id)
    };
  },
  computed: {
    title() {
      let [title, fromCity, toCity, index] = ["", "", "", 0];
      if (this.tripType === 2) {
        index = this.page;
      }
      fromCity = this.record.stops[index][0].n;
      toCity = this.record.stops[index][1].n;

      if (this.tripType === 1 && this.page === 1) {
        fromCity = this.record.stops[index][1].n;
        toCity = this.record.stops[index][0].n;
      }
      title = fromCity + " —— —— " + toCity;
      return title;
    }
  },
  methods: {
    // 时间排序
    sortbyTime() {
      if (!this.flightData.length) {
        return;
      }
      if (this.currIndex > -1) {
        this.flightData[this.currIndex].showSeat = false;
      }
      this.flightData.sort((a, b) => {
        if (flag) {
          return a.depDate - b.depDate;
        } else {
          return b.depDate - a.depDate;
        }
      });
      flag = !flag;
    },
    // 价格排序
    sortbyPrice() {
      if (!this.flightData.length) {
        return;
      }
      if (this.currIndex > -1) {
        this.flightData[this.currIndex].showSeat = false;
      }
      this.flightData.sort((a, b) => {
        if (flag) {
          return a.lowPrice - b.lowPrice;
        } else {
          return b.lowPrice - a.lowPrice;
        }
      });
      flag = !flag;
    },
    // 控制座位显示选项
    showSeat(index, lastIndex) {
      this.currIndex = index;
      this.flightData[index].showSeat = !this.flightData[index].showSeat;
      // 如果点击了不同的选项，需要把上一项的showSeat设为false
      if (index !== lastIndex && lastIndex > -1) {
        this.flightData[lastIndex].showSeat = false;
      }
    },
    // 预订
    async planebook(flight, seat) {
      const checkResult = await this._checkPrice(flight, seat);
      if (checkResult.success) {
        // 验价后显示最新的价格
        const flightCheckPriceDTOList = checkResult.obj;
        seat.price = flightCheckPriceDTOList.salesPrice;
        seat.totalPrice = flightCheckPriceDTOList.totalPrice;

        flight.seat = seat;
        flight.flightCheckPriceDTOList = flightCheckPriceDTOList;

        const airlines = this._getAirlines();
        airlines[this.page] = flight;
        setLocal("airlines", JSON.stringify(airlines));

        // 判断单程，往返，多程
        switch (this.tripType) {
          case 0:
            this.$router.push("/domeOrder");
            break;
          case 1:
            this._twoWayLinkto();
            break;
          case 2:
            break;
        }
      } else {
        Dialog.alert({
          title: "提示",
          message: checkResult.msg,
          className: "check-tips"
        }).then(() => {
          // dosomething
        });
      }
    },
    // 查询机票列表
    async _searchPlaneList() {
      const searchData = this._handleSearchPlaneData();
      const searResult = await searchPlaneList(searchData);

      if (searResult.success) {
        const obj = searResult.obj.data.flights;
        // 过滤没有仓位的航班
        const flights = obj.filter(item => {
          return item.seats.length > 0;
        });
        if (flights.length === 0) {
          this.showTips = true;
          return;
        }
        const newFlights = this._normalizeFlightData(flights);
        this.flightData = newFlights;
        this.showList = true;
      } else {
        this.showTips = true;
      }
    },
    // 验价
    async _checkPrice(flight, seat) {
      return await checkPrice(flight, seat);
    },
    /**
     * @description 处理查询机票所需要的数据
     * @param {index} 当前行程的索引，单程和往返只有一条行程，所以默认为0
     */
    _handleSearchPlaneData(index = 0) {
      if (this.tripType === 2) {
        index = this.page;
      }
      const searchData = {
        fromCity: this.record.stops[index][0].c,
        toCity: this.record.stops[index][1].c,
        airDate: this.record.date[this.page],
        siteType: this.record.cabinRequire,
        cmdShare: "1",
        stopType: "N"
      };
      if (this.tripType === 1 && this.page === 1) {
        searchData.fromCity = this.record.stops[index][1].c;
        searchData.toCity = this.record.stops[index][0].c;
      }

      return searchData;
    },
    // 整理查询机票返回的航班列表数据
    _normalizeFlightData(data) {
      const flightList = [];
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
          lowPrice,
          seats
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
          item.price,
          item.seats
        ];
        // 给seat添加className
        seats.forEach(seat => {
          seat.className = this._getClassName(seat.code);
          seat.totalPrice = seat.price + seat.fuelTax + seat.airportTax;
        });
        flightList.push({
          showSeat: false,
          depDate,
          arrDate,
          depTime: getTime(depDate),
          arrTime: getTime(arrDate),
          depAirportCode,
          arrAirportCode,
          depAirportName: this._getAirportName(depAirportCode, depAirportTerm),
          arrAirPortName: this._getAirportName(arrAirportCode, arrAirportTerm),
          airlineCode,
          flightNo,
          flightName: airlineCode + flightNo,
          shareFlightNo,
          flightType,
          lowPrice,
          seats
        });
      });
      return flightList;
    },
    // 获取机场的名称
    _getAirportName(code, iterm) {
      let airportName = "";
      airportName = airPortInfos[code].airPortName + iterm;
      return airportName;
    },
    // 获取舱位等级的名称
    _getClassName(code) {
      return classCode[code] ? classCode[code] : "其他舱位";
    },
    // 获取存储在本地airlines
    _getAirlines() {
      let airlines = getLocal("airlines");
      airlines ? (airlines = JSON.parse(airlines)) : (airlines = []);

      return airlines;
    },
    // 往返的跳转
    _twoWayLinkto() {
      if (this.page < 1) {
        this.page++;
        this.$router.push(`/domeSearchResult/${this.page}`);
      } else {
        this.$router.push(`/domeOrder`);
      }
    },
    // 多程的跳转
    _multiLinkto() {}
  },
  watch: {
    $route(to, from) {
      this.flightData = [];
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

  .flight-list-wrapper {
    position: relative;
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    .fail-tips {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;

      .text {
        color: $color-text;
      }
    }
  }
}
</style>


