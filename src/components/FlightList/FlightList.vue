<template>
  <div class="flight-list">
    <ul class="flight-list-container">
      <li class="flight-list-item">
        <div class="flight-detail border-1px">
          <div class="flight-content">
            <div class="time">
              <span class="depart">10:05</span>
              <span class="line"></span>
              <span class="arrival">11:05</span>
            </div>
            <div class="name">
              <span class="depart">广州白云机场T2</span>
              <span></span>
              <span class="arrival">揭阳潮汕机场国际</span>
            </div>
            <div class="flight">
              <img class="icon" src="./logo/2Z.png" alt="">
              <span class="num">MU3685</span>
              <span class="aircraft">机型：738</span>
              <span class="share">共享 CZ3892</span>
            </div>
          </div>
          <div class="flight-price global-blue">
            ¥ 710起
          </div>
        </div>
        <ul class="seat-detail">
          <li class="seat-item border-1px">
            <div class="seat-cabin">
              <span class="shipping">经济舱</span>
              <span class="sales global-blue">65折</span>
              <span class="ticket global-blue">余量充足</span>
            </div>
            <div class="seat-book">
              <span class="price global-blue">¥1000</span>
              <div class="book">预订</div>
            </div>
          </li>
          <li class="seat-item border-1px">
            <div class="seat-cabin">
              <span class="shipping">经济舱</span>
              <span class="sales global-blue">65折</span>
              <span class="ticket global-blue">余量充足</span>
            </div>
            <div class="seat-book">
              <span class="price global-blue">¥1000</span>
              <div class="book">预订</div>
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
      type:Object,
      default:null
    },
    seatData:{
      type:Object,
      default:null
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


