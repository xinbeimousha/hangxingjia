<template>
  <div class="airline">
    <div class="content">
      <div class="time">
        <div class="depart">{{flight.depTime}}</div>
        <div class="line"></div>
        <div class="arrival">{{flight.arrTime}}</div>
      </div>
      <div class="airport">
        <div class="from">{{flight.depAirportName}}</div>
        <div class="to">{{flight.arrAirPortName}}</div>
      </div>
      <div class="air-info">
        <img :src="require(`common/img/logo/${flight.airlineCode}.png`)" class="icon">
        <span class="carrier">{{flight.flightName}}</span>
        <span class="date">{{departDate}}</span>
        <span class="share" v-if="flight.shareFlightNo">共享 {{flight.shareFlightNo}}</span>
      </div>
    </div>
    <div class="price">
      ¥{{seat.price}}
    </div>
  </div>
</template>

<script>
import { getDate1 } from 'common/js/day.js'
export default {
  props:{
    airline:{
      type:Object,
      default:null
    }
  },
  computed:{
    flight(){
      return this.airline.flight
    },
    seat(){
      return this.airline.seat
    },
    departDate(){
      return getDate1(this.flight.depDate)
    }
  },
  created(){
    console.log(this.flight)
    console.log(this.seat)
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.airline {
  x-middle();
  justify-content: space-between;
  padding: 0.2rem 0;

  .content {
    flex: 1;

    .time {
      x-middle();
      justify-content: space-between;

      .line {
        position: relative;
        width: 1.8rem;
        border-bottom: 1px solid #979797;

        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #d8d8d8;
          transform: translate(-50%, -50%);
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #d8d8d8;
          transform: translate(50%, -50%);
        }
      }
    }

    .airport {
      display:flex;
      justify-content: space-between;
      padding:0.1rem 0;
      font-size: 0.24rem;
      color: $color-text-h;

      .from,.to{
        width:35%;
      }
      .to{
        text-align :right;
      }
    }

    .air-info{
      font-size:0.24rem;
      color: $color-text-h;

      span{
        vertical-align:bottom;
      }
      .icon{
        display :inline-block;
        width:0.5rem;
        vertical-align:middle;
      }
      .carrier{
        margin-right:0.1rem;
      }
      .date,.share{
        border-left:2px solid $color-solid;
        padding-left:0.2rem;
      }
      .date{
        padding-right:0.1rem;
      }
    }
  }

  .price {
    align-self: flex-start;
    width: 1.7rem;
    color:$color-text-active;
    text-align: right;
  }
}
</style>


