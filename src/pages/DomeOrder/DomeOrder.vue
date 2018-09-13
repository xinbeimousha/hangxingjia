<template>
  <div class="dome-order">
    <HeaderTitle 
      title="机票订单"
      :btnLeft="true"
    />
    <div class="dome-order-content">
      <div class="airline-wrapper" v-if="airlineData.length > 0">
        <AirLine 
          v-for="(airline,index) in airlineData"
          :showlow="false"
          :flight="airline"
          :key="index"
        />
      </div>
      <div class="passenger">
        <div class="people">
          <div class="title">
            乘机人
          </div>
          <div class="names">
            <div class="name" v-for="(item,index) in passengers">
              <span v-if="item.select">{{item.uname}}</span>
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
        总额 ¥ 2930
      </span>
      <span class="submit-order">
        提交订单
      </span>
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import AirLine from 'components/AirlineItem/AirlineItem';
import { getLocal } from 'common/js/storage.js';
import { getOthersInItinerary } from 'api/getOthersInItinerary.js';

export default {
  components:{
    HeaderTitle,
    AirLine
  },
  created(){
    this._getOthersInItinerary();
    this._getAirlineData();
  },
  data(){
    return {
      telephone:18675961249,
      airlineData:[],
      passengers:[],
      singlePrice:0,
      peopleNum:1
    }
  },
  computed:{
    totalPrice(){
      return this.singlePrice * this.peopleNum
    }
  },
  methods:{
    // 获得航段数据
    _getAirlineData(){
      const airlineData = JSON.parse(getLocal('airlines'));
      if(airlineData.length){
        this.airlineData = airlineData;
      }
    },
    // 获取同行人
    async _getOthersInItinerary(){
      const data = await  getOthersInItinerary('8a9b2f0f5f5896b5015f58afa2f40004');
      if(data.success){
        this.passengers = data.obj;
        this.passengers.forEach(item => {
          item.select = true;
          if(item.defaultUser){
            this.telephone = item.mobile;
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.dome-order{
  y-view();

  .dome-order-content{
    flex:1;

    .airline-wrapper{
      padding:0 0.2rem;
      margin-bottom:0.1rem;
      background-color :#fff;
    }
    .passenger{
      padding:0.2rem;
      background-color :#fff;
      
      .title{
          width:2rem;
        }
      .people{
        x-middle();
        .names{
          flex:1;
          color:$color-text;
        }
        .add{
          color:$color-text-active;
        }
      }
      .phone{
        x-middle();
        margin-top:0.2rem;

        .num{
          color:$color-text;
        }
      }
    }
    .retreating{
      padding:0.2rem;
      font-size:12px;

      .title{
        color:$color-text-active;
      }
      .content{
        color:$color-text-h;
        margin-bottom:0.1rem;
      }
    }
  }
  .dome-order-footer{
    x-middle();
    padding-left:0.2rem;
    background-color:#fff;

    .total-price{
      flex:1;
      color:$color-text-h;
    }
    .submit-order{
      padding:0.2rem 0.3rem;
      color:#fff;
      background-color:$color-text-active;
    }
  }
}
</style>


