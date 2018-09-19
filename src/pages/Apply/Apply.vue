<template>
  <div class="my-apply">
    <HeaderTitle 
      title="我的申请"
    />
    <div class="banner">
      <img src="./apply_index_banner.png" alt="">
    </div>
    <div class="content">
      <div class="apply">
        <div class="trip">
          <img src="./apply_index_one.png" alt="">
          <router-link tag="div" to="/tripApply" class="group">
            <p class="title">行程申请</p>
            <p class="text">新差旅从这里开始</p>
          </router-link>
        </div>
        <div class="reim">
          <img src="./apply_index_two.png" alt="">
          <div class="group">
            <p class="title">报销申请</p>
            <p class="text">费用报销清晰明了</p>
          </div>
        </div>
      </div>
      <div class="approval">
        <div class="trip">
          <img src="./apply_index_three.png" alt="">
          <div class="group">
            <p class="title">行程申请</p>
            <p class="text">新差旅从这里开始</p>
          </div>
        </div>
        <div class="reim">
          <img src="./apply_index_four.png" alt="">
          <div class="group">
            <p class="title">报销申请</p>
            <p class="text">费用报销清晰明了</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';

export default {
  components:{
    HeaderTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';
  .my-apply{
    flex:1;

    .content{
      padding:0.2rem;
      color:$color-text-h;
      font-size:14px;
      img {
        width:0.8rem;
      }
      .text{
        font-size:10px;
      }
      .apply,.approval{
        x-middle();
        margin-bottom:0.1rem;
        .trip,.reim{
          flex:1;
          x-middle();
        }
        .reim img{
          filter:grayscale(100%);
        }
        .trip{
          
          .group{

            .title{
              color:#000;
            }
          }
        }
      }
    }
  }
</style>


