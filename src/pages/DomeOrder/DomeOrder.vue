<template>
  <div class="dome-order">
    <HeaderTitle 
      title="机票订单" 
      :btnLeft="true" 
      @back="goback"
    />
    <div class="dome-order-content">
      <div class="airline-wrapper" v-if="airlineData.length > 0">
        <AirLine v-for="(airline,index) in airlineData" :showlow="false" :flight="airline" :key="index" />
      </div>
      <div class="passenger">
        <div class="people">
          <div class="title">
            乘机人
          </div>
          <div class="names">
            <div class="name" v-for="(item,index) in passengers" v-if="item.select">
              {{item.uname}}
            </div>
          </div>
          <div class="add">
            修改乘机人
          </div>
        </div>
        <div class="phone">
          <div class="title">
            手机
          </div>
          <div class="num">
            <input type="text" v-model="telephone" placeholder="输入电话号码">
          </div>
        </div>
      </div>
      <div class="retreating" v-if="airlineData.length > 0">
        <p class="title">退改声明</p>
        <p class="content" v-for="(airline,index) in airlineData">
          {{airline.seat.cmt}}
        </p>
      </div>
    </div>
    <div class="dome-order-footer">
      <span class="total-price">
        总额 ¥ {{ totalPrice }}
      </span>
      <span class="submit-order" @click="submitOrder">
        提交订单
      </span>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import AirLine from "components/AirlineItem/AirlineItem";
import { getLocal } from "common/js/storage.js";
import { getDate2 } from "common/js/day.js";
import { getOthersInItinerary } from "api/getOthersInItinerary.js";
import { checkFlightRule,planeBook } from "api/planeOrder.js";
import { Dialog } from "vant";
import { gobackMixin } from 'common/js/mixins.js';

export default {
  components: {
    HeaderTitle,
    AirLine
  },
  mixins:[gobackMixin],
  created() {
    this._getOthersInItinerary();
    this._getAirlineData();
    this._getSingleprice();
  },
  data() {
    return {
      telephone: 18675961249,
      airlineData: [],
      passengers: [],
      singlePrice: 0,
      peopleNum: 1
    };
  },
  computed: {
    totalPrice() {
      return this.singlePrice * this.peopleNum;
    }
  },
  methods: {
    async submitOrder() {
      const orderData = this._handleOrderdata();
      const checkRule = await this._checkFlightRule(orderData);
      if (checkRule.success) {
        const orderResult = await this._planeBook(orderData);
        
        if(orderResult.success){
          Dialog.alert({
            title:'预订成功',
            message:orderResult.msg,
            className:'check-tips',
            confirmButtonTexT:'查看订单',
          }).then(() => {
            this.$router.push('/order')
          })
        }else{
          Dialog.alert({
            title:'预订失败',
            message:orderResult.msg,
            className:'check-tips'
          }).then(() => {
          })
        }
      } else {
      }
    },
    // 提交订单
    async _planeBook(orderData) {
    return await planeBook(orderData);
    },
    // 校验规则
    async _checkFlightRule(orderData) {
      const data = {
        itineraryId: orderData.itineraryId,
        al: orderData.al,
        fTotalPrice: orderData.fTotalPrice,
        cause: orderData.cause,
        contactTelephone: orderData.contactTelephone,
        passengers: orderData.passengers,
        flightCheckPriceDTOList: orderData.flightCheckPriceDTOList
      };
      return await checkFlightRule(data);
    },
    // 获得航段数据
    _getAirlineData() {
      const airlineData = JSON.parse(getLocal("airlines"));
      if (airlineData.length) {
        this.airlineData = airlineData;
      }
    },
    // 获取单个人的总费用
    _getSingleprice() {
      this.airlineData.forEach(item => {
        this.singlePrice += item.seat.totalPrice;
      });
    },
    // 获取同行人
    async _getOthersInItinerary() {
      const tripId = JSON.parse(getLocal("record")).tripId;
      const data = await getOthersInItinerary(tripId);
      if (data.success) {
        this.passengers = data.obj;
        this.passengers.forEach(item => {
          item.select = false;
          if (item.defaultUser) {
            item.select = true;
            this.telephone = item.mobile;
          }
        });
        this._handlePassengers();
      } else {
        Dialog.alert({
          title: "提示",
          message: data.msg,
          className: "check-tips"
        }).then(() => {
          // dosomething
        });
      }
    },
    // 处理乘客信息
    _handlePassengers() {
      const passengers = [];
      for (let i = 0; i < this.passengers.length; i++) {
        let passenger = this.passengers[i];
        if (!passenger.select || !passenger.unum) {
          continue;
        }
        passengers.push({
          id: passenger.id && passenger.id,
          name: passenger.uname,
          cardNo: passenger.unum,
          telephone: passenger.mobile || this.telephone,
          staffNo: passenger.id && passenger.id,
          orgCode: passenger.orgCode && passenger.orgCode,
          psgType: "ADT",
          departName: passenger.departName && passenger.departName
        });
      }
      return passengers;
    },
    // 处理航线信息
    _handleAirlines() {
      const airlines = [];
      this.airlineData.forEach(flight => {
        const seat = flight.seat;
        airlines.push({
          carrier: flight.airlineCode,
          flightNo: flight.flightNo,
          aircraft: flight.flightType,
          classCode: seat.code,
          departDate: getDate2(flight.depDate),
          departTime: flight.depTime,
          departCode: flight.depAirportCode,
          arrivalCode: flight.arrAirportCode,
          arriveDate: getDate2(flight.arrDate),
          arriveTime: flight.arrTime,
          voyageType: "GO",
          seats: JSON.stringify({
            //票面价
            price: seat.price,
            //基础折扣
            sale: seat.fareBase
          })
        });
      });
      return airlines;
    },
    //处理flightCheckPriceDTOList
    _handleFlightcheck() {
      const flightCheckPriceDTOList = [];
      this.airlineData.forEach(flight => {
        flightCheckPriceDTOList.push(flight.flightCheckPriceDTOList);
      });

      return flightCheckPriceDTOList;
    },
    // 处理提交订单的数据
    _handleOrderdata() {
      const record = JSON.parse(getLocal("record"));
      const userInfo = JSON.parse(getLocal("userInfo"));
      const orderData = {
        itineraryId: record.tripId,
        contactTelephone: this.telephone,
        fTotalPrice: this.totalPrice,
        passengers: JSON.stringify(this._handlePassengers()),
        limitDate: "",
        limitTime: "",
        fCityName: record.stops[0][0].n,
        tCityName: record.stops[0][1].n,
        depAirportName: this.airlineData[0].depAirportName,
        arrAirportName: this.airlineData[0].arrAirPortName,
        al: JSON.stringify(this._handleAirlines()),
        flightCheckPriceDTOList: this._handleFlightcheck(),
        fareOrgCode: getLocal("fareOrgCode"),
        cause: "",
        contactName: userInfo.uname
      };

      return orderData;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.dome-order {
  y-view();

  .dome-order-content {
    flex: 1;

    .airline-wrapper {
      padding: 0 0.2rem;
      margin-bottom: 0.1rem;
      background-color: #fff;
    }

    .passenger {
      padding: 0.2rem;
      background-color: #fff;

      .title {
        width: 2rem;
      }

      .people {
        x-middle();

        .names {
          flex: 1;
          color: $color-text;
        }

        .add {
          color: $color-text-active;
        }
      }

      .phone {
        x-middle();
        margin-top: 0.2rem;

        .num {
          color: $color-text;
        }
      }
    }

    .retreating {
      padding: 0.2rem;
      font-size: 12px;

      .title {
        color: $color-text-active;
      }

      .content {
        color: $color-text-h;
        margin-bottom: 0.1rem;
      }
    }
  }

  .dome-order-footer {
    x-middle();
    padding-left: 0.2rem;
    background-color: #fff;

    .total-price {
      flex: 1;
      color: $color-text-h;
    }

    .submit-order {
      padding: 0.2rem 0.3rem;
      color: #fff;
      background-color: $color-text-active;
    }
  }
}
</style>


