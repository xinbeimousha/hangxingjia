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
              <span class="arrival">揭阳潮汕国际机场</span>
            </div>
            <div class="flight">
              <img src="./logo/2Z.png" alt="">
              <span class="num">MU3685</span>
              <span class="aircraft">机型：738</span>
              <span class="share">共享 CZ3892</span>
            </div>
          </div>
          <div class="flight-price">
            ¥ 710起
          </div>
        </div>
        <ul class="seat-detail">
          <li class="seat-item">
            <div class="seat-cabin">
              <span class="shipping">经济舱</span>
              <span class="sales">65折</span>
              <span class="ticket">余量充足</span>
            </div>
            <div class="seat-book">
              <span class="price">¥1000</span>
              <span class="book">预订</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.flight-list {

  .flight-list-container{

    .flight-list-item{
      padding-top:0.2rem;

      .flight-detail{
        display:flex;
        padding: 0 0.2rem 0.2rem;
        border-1px($color-solid);

        .flight-content{
          flex:1;

          .time{
            x-middle();
            .depart,.line,.arrival{
              flex:0 0 25%;
            }
            .arrival{
              text-align :right;
            }
            .line{
              position :relative;
              border-bottom:1px solid #979797;
              &:before{
                content:'';
                display:block;
                position:absolute;
                left:0;
                width:5px;
                height:5px;
                border-radius:50%;
                background-color:#d8d8d8;
                transform:translate(-50%,-50%);
              }
              &:after{
                content:'';
                display:block;
                position:absolute;
                right:0;
                width:5px;
                height:5px;
                border-radius:50%;
                background-color:#d8d8d8;
                transform:translate(50%,-50%);
              }
            }
          }

          .name {
            font-size:12px;
            x-middle();
          }
        }
      }
    }
  }
}
</style>


