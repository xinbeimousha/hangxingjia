<template>
  <div class="flight-list">
    <ul class="flight-list-container" v-if="flightData.length > 0">
      <li v-for="(flight,index) in flightData" @click="clickShowSeat(index)" class="flight-list-item">
        <div class="flight-detail border-1px">
          <div class="flight-content">
            <div class="time">
              <span class="depart">{{ flight.depTime }}</span>
              <span class="line"></span>
              <span class="arrival">{{ flight.arrTime }}</span>
            </div>
            <div class="name">
              <span class="depart">{{ flight.depAirportName }}</span>
              <span></span>
              <span class="arrival">{{ flight.arrAirPortName }}</span>
            </div>
            <div class="flight">
              <img class="icon" :src="require(`./logo/${flight.airlineCode}.png`)" alt="">
              <span class="num">{{ flight.flightName }}</span>
              <span class="aircraft">机型：{{ flight.flightType}}</span>
              <span class="share" 
                v-if="flight.shareFlightNo"
              >
                共享 {{flight.shareFlightNo}}
              </span>
            </div>
          </div>
          <div class="flight-price global-blue">
            ¥ {{ flight.lowPrice }}起
          </div>
        </div>
        <ul class="seat-detail" v-if="currentIndex === index && flight.showSeat">
          <li class="seat-item border-1px" v-for="(seat,index) in flight.seats">
            <div class="seat-cabin">
              <span class="shipping">{{seat.className}}</span>
              <span class="sales global-blue" v-if="seat.fareBase!==100">{{seat.fareBase}}折</span>
              <span class="ticket global-blue" v-if="seat.seatRemain < 9">剩余 <span class="num">{{seat.seatRemain}}</span> 张</span>
              <span class="ticket global-blue" v-else>余量充足</span>
            </div>
            <div class="seat-book">
              <span class="price global-blue">¥{{seat.price}}</span>
              <div class="book" @click.stop="book(flight,seat)">预订</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    flightData:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return {
      currentIndex:-1
    }
  },
  methods:{
    clickShowSeat(index){
      this.$emit('show',index,this.currentIndex)
      this.currentIndex = index;
    },
    book(flight,seat){
      this.$emit('book',flight,seat);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.flight-list {
  .flight-list-container {
    .flight-list-item {
      .global-blue {
        color: $color-text-active;
      }

      padding-top: 0.2rem;
      background-color: $color-white;

      .flight-detail {
        display: flex;
        padding: 0 0.2rem 0.2rem;
        border-1px($color-solid);

        .flight-content {
          flex: 1;

          .time {
            x-middle();

            .depart, .line, .arrival {
              flex: 0 0 30%;
            }

            .arrival {
              text-align: right;
            }

            .line {
              position: relative;
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

          .name {
            font-size: 0.24rem;
            display: flex;

            span {
              flex: 0 0 30%;
            }

            .arrival {
              margin-left: 0.1rem;
            }
          }

          .flight {
            margin-top: 0.1rem;
            font-size: 0.24rem;
            color: $color-text-h;

            .icon {
              display: inline-block;
              width: 0.5rem;
              vertical-align: middle;
            }

            span {
              vertical-align: bottom;

              &.num {
                padding-right: 0.2rem;
                border-right: 2px solid $color-solid;
              }

              &.aircraft {
                padding-left: 0.1rem;
                padding-right: 0.1rem;
              }

              &.share {
                padding-left: 0.2rem;
                border-left: 2px solid $color-solid;
              }
            }
          }
        }
      }

      .seat-detail {
        padding-left: 0.3rem;
        margin-bottom:0.1rem;
        .seat-item {
          x-middle();
          padding: 0.1rem 0;
          padding-right: 0.3rem;

          &:not(:last-child) {
            border-1px($color-solid);
          }

          .seat-cabin {
            flex: 1;
            font-size: 0.24rem;
            .shipping {
              font-size: 0.3rem;

            }

            .sales {
              padding: 0 0.1rem;
            }
            .ticket{

              .num {
                color:red;
              }
            }
          }

          .seat-book {
            .book {
              display: inline-block;
              padding: 0.1rem 0.2rem;
              margin-left: 0.1rem;
              border-radius: 5px;
              color: $color-white;
              background-color: $color-bg-high;
            }
          }
        }
      }
    }
  }
}
</style>


