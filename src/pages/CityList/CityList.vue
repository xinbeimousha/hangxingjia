<template>
  <div class="city-list">
    <HeaderTitle 
      title="城市列表"
      :btnLeft="true"
    />
    <Tabs class="city">
      <Tab title="国内城市"></Tab>
      <Tab title="国际城市/港澳台" disabled></Tab>
    </Tabs>
    <div class="content">
      <header class="scroll-headertitle">热门城市</header>
      <ul class="scroll-celllist">
        <li class="scroll-cellitem" v-for="(item,index) in hotCitys">
          <div class="scroll-cell">{{item.n}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import { Tabs,Tab } from 'vant';
import { domehotCity } from './cityData.js';
export default {
  components:{
    HeaderTitle,
    Tabs,
    Tab
  },
  data(){
    return {
      hotCitys:domehotCity
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';
.city-list{
  y-view();

  .city >>> .van-tab--active{
    color:$color-text-active;
  }
  .city >>> .van-tabs__line{
    background-color :$color-text-active;
  }
  .content{
    flex:1;
    scrolling();
    
    .scroll-headertitle{
      padding-left:12px;
      padding-right:12px;
      line-height:0.48rem;
      font-size:12px;
      color:$color-text-h;
    }
    .scroll-celllist{
      overflow :hidden;
      padding:0 32px 6px 9px;

      .scroll-cellitem{
        float:left;
        width :33.33333%;
        padding:3px;
        box-sizing :border-box;

        .scroll-cell{
          font-size:13px;
          line-height :30px;
          border:1px solid #e0e0e0;
          border-width:0.5px !important;
          background-color :#fff;
          text-align:center;
        }
      }
    }
  }
}
</style>



