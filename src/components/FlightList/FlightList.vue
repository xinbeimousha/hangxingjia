<template>
  <div class="flight-list">
    <ul class="flight-list-container" v-if="flightData.length > 0">
      <li v-for="(flight,index) in flightData" @click="clickShowSeat(index)" class="flight-list-item" :key="index">
        <div class="flight-detail border-1px">
          <AirLine :flight="flight" />
        </div>
        <ul class="seat-detail" v-if="currentIndex === index && flight.showSeat">
          <li class="seat-item border-1px" v-for="(seat,index) in flight.seats">
            <div class="seat-cabin">
              <span class="shipping">{{seat.className}}</span>
              <span class="sales global-blue" v-if="seat.fareBase!==100">{{seat.fareBase}}折</span>
              <span class="ticket global-blue" v-if="seat.seatRemain < 9">剩余
                <span class="num">{{seat.seatRemain}}</span> 张</span>
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
import AirLine from "components/AirlineItem/AirlineItem";
export default {
  components: {
    AirLine
  },
  props: {
    flightData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: -1
    };
  },
  methods: {
    clickShowSeat(index) {
      this.$emit("show", index, this.currentIndex);
      this.currentIndex = index;
    },
    book(flight, seat) {
      this.$emit("book", flight, seat);
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
      background-color: $color-white;

      .global-blue {
        color: $color-text-active;
      }

      .flight-detail {
        padding: 0 0.2rem;
        border-1px($color-solid);
      }

      .seat-detail {
        padding-left: 0.3rem;
        margin-bottom: 0.1rem;

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

            .ticket {
              .num {
                color: red;
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


