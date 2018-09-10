<template>
  <div class="list-item">
    <div class="item-title border-1px">
      <div class="title">{{ title }}</div>
      <div class="date">{{ createDate }}</div>
    </div>
    <div class="item-content border-1px">
      <div class="destination">
        <div class="from">{{orderData.fromCity}}</div>
        <div class="line"></div>
        <div class="to">{{orderData.toCity}}</div>
        <div class="price">¥ {{orderData.totalAmount}}</div>
      </div>
      <div class="date">
        <span class="dep">{{ depDate }}</span>
        <span class="arr">{{ arrDate }}</span>
      </div>
      <div class="desc">
        <span class="airlineName">
          航班号：{{orderData.flightNo}}
        </span>
        <span class="cabin">
          舱位：{{orderData.flightSpaceName}}({{orderData.flightSpace}})
        </span>
      </div>
    </div>
    <div class="item-status">
      <span class="status">{{statusText}}</span>
      <span class="detail">查看详情</span>
    </div>
  </div>
</template>

<script>
import statusText from 'common/js/orderStatus.js';
import { getDetailDate1,getDetailDate2 } from 'common/js/day.js';

export default {
  props:{
    orderData:{
      type:Object,
      default:null
    },
    title:{
     type:String,
     default:''
    }
  },
  computed:{
    statusText(){
      return statusText[this.orderData.status];
    },
    depDate(){
      return getDetailDate1(this.orderData.depTime);
    },
    arrDate(){
      return getDetailDate1(this.orderData.arrTime);
    },
    createDate(){
      return getDetailDate2(this.orderData.createTime);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.list-item {
  padding-left: 0.2rem;
  background-color:#fff;
  .item-title {
    x-middle();
    padding-right: 0.2rem;
    border-1px($color-solid);
    line-height: 3;

    .title {
      flex: 1;
      color: $color-bg-high;
      font-weight: bold;
    }
    .date{
      color:#999;
    }
  }

  .item-content {
    padding: 0.2rem 0.2rem 0.2rem 0;
    border-1px($color-solid);

    .destination {
      x-middle();

      .line {
        position: relative;
        width:2rem;
        margin:0 0.2rem;
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
      .price{
        flex:1;
        text-align:right;
        color:$color-text-active;
      }
    }
    .date {
      x-middle();
      padding:0.2rem 0;
      color:#999;

      .dep{
        width:3rem;
      }
    }
    .desc{
      color:#999;
    }
  }
  .item-status{
    x-middle();
    padding-right:0.2rem;
    line-height:3;
    color:$color-text-active;

    .status{
      flex:1;
    }
  }
}
</style>


