<template>
  <div class="airline">
    <div class="content">
      <div class="time">
        <div class="depart">08:00</div>
        <div class="line"></div>
        <div class="arrival">11:10</div>
      </div>
      <div class="airport">
        <div class="from">广州白云机场T2</div>
        <div class="to">北京首都国际机场T2</div>
      </div>
      <div class="air-info">
        <img :src="require(`common/img/logo/2Z.png`)" class="icon">
        <span class="carrier">CZ2301</span>
        <span class="date">2018/08/28</span>
        <span class="share">共享 CZ2001</span>
      </div>
    </div>
    <div class="price">
      ¥1130
    </div>
  </div>
</template>

<script>
export default {
  
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


