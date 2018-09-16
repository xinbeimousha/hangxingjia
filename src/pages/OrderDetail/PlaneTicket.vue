<template>
  <div class="plane-ticket" v-if="orderDetail">
    <div class="flight-info">
      <div class="title">
        <img class="icon" :src="require(`common/img/logo/${orderDetail.scoper}.png`)" alt="">
        <span class="text">{{airline}}</span>
      </div>
      <div class="info">
        <div class="flight">
          <div class="from">
            <p class="nation">
              出发地
            </p>
            <p class="city">
              {{orderDetail.fromCity}}
            </p>
            <p class="airport">
              {{orderDetail.fromAirport}}
            </p>
            <p class="time">
              {{depTime}}
            </p>
          </div>
          <div class="logo">
            <img src="./return.png" alt="">
          </div>
          <div class="to">
            <p class="nation">
              目的地
            </p>
            <p class="city">
              {{orderDetail.toCity}}
            </p>
            <p class="airport">
              {{orderDetail.toAirport}}
            </p>
            <p class="time">
              {{arrTime}}
            </p>
          </div>
        </div>
        <div class="seat">
          <span class="flightName">{{orderDetail.flightNo}}</span>
          <span class="flightType">{{orderDetail.aircraft}}</span>
          <span class="cabin">{{orderDetail.flightSpaceName}}({{orderDetail.flightSpace}})</span>
        </div>
      </div>
    </div>
    <div class="passenger">
      <div class="people">
        <div class="name">
          <p class="title">
            乘机人 Name
          </p>
          <p class="text">
            {{orderDetail.realName}}
          </p>
        </div>
        <div class="date">
          <p class="title">
            日期 Date
          </p>
          <p class="text">
            {{depDate}}
          </p>
        </div>
        <div class="cabin">
          <p class="title">
            舱位 Seat Class
          </p>
          <p class="text">
            {{orderDetail.flightSpaceName}}
          </p>
        </div>
      </div>
      <div class="order">
        <div class="order-id">
          <p class="title">
            订单编号
          </p>
          <p class="num">
            {{orderDetail.detailId}}
          </p>
        </div>
        <div class="status-content">
          <span class="status">{{status}}</span>
          <span class="price">¥ {{orderDetail.amount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { airlines } from "./airlines.js";
import { getTime,getDate2 } from 'common/js/day';
import statusText from 'common/js/orderStatus';

export default {
  props:{
    orderDetail:{
      type:Object,
      default:null
    }
  },
  computed:{
    airline(){
      return airlines[this.orderDetail.scoper];
    },
    depDate(){
      return getDate2(this.orderDetail.depTime);
    },
    depTime(){
      return getTime(this.orderDetail.depTime);
    },
    arrTime(){
      return getTime(this.orderDetail.arrTime);
    },
    status(){
      return statusText[this.orderDetail.status];
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.flight-info {
  .title {
    padding: 0.1rem 0.2rem;
    color: #fff;
    border: 1px solid $color-bg-high;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: $color-bg-high;

    .icon {
      display: inline-block;
      width: 0.4rem;
      vertical-align: middle;
    }

    .text {
      vertical-align: middle;
    }
  }

  .info {
    padding: 0.1rem;
    background-color: #fff;
    border: 1px solid $color-text;
    border-bottom-style: dashed;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    .flight {
      x-middle();

      .nation, .airport {
        font-size: 12px;
        color: $color-text-h;
      }

      .city {
        font-weight: bold;
      }

      .to, .from, .logo {
        flex: 1;

        img {
          width: 0.5rem;
          margin: 0 auto;
        }
      }

      .from {
        text-align: right;
      }
    }

    .seat {
      margin-top: 0.1rem;
      text-align: center;
      font-size: 0px;
      color: $color-text-h;

      span {
        font-size: 12px;
        padding: 0 0.1rem;
      }

      span:not(:last-child) {
        border-right: 1px solid $color-text;
      }
    }
  }
}

.passenger {
  padding: 0.2rem;
  font-size: 12px;
  color: #fff;
  background-color: $color-bg-high;
  border-radius: 8px;

  .people {
    x-middle();
    text-align: center;

    .text {
      font-size: 0.3rem;
    }

    .name, .date, .cabin {
      flex: 1;
    }
  }

  .order {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    margin-top: 0.2rem;

    .status-content {
      align-self: flex-end;
    }
  }
}
</style>


