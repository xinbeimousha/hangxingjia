<template>
  <div class="trip-apply">
    <HeaderTitle
      title="行程申请"
      :btnLeft="true"
      :btnRight="true"
      className="fa-plus"
      @back="goBack"
      @click="addApply"
    />
    <Tabs class="reset">
      <Tab>
        <div slot="title">已审批</div>
      </Tab>
      <Tab>
        <div slot="title">未审批</div>
      </Tab>
    </Tabs>
    <div class="scroll-main">
      <div class="scroll-list">
        <component is="TripApplyYes"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { getItinerInfo }  from './js/tripApplyapi.js';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import { Tabs,Tab } from 'vant';
import TripApplyYes from './TripApplyYes';
export default {
  components:{
    HeaderTitle,
    Tabs,
    Tab,
    TripApplyYes
  },
  created(){
    getItinerInfo(1,1,true);
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    addApply(){
      this.$router.push('/addApply');
    }
  },
  beforeRouteLeave(to,from,next){
    if(to.path === '/main/apply'){
      from.meta.keepAlive = false;
    }
    
    next();
  },
  // beforeRouteEnter(to,from,next){
  //   console.log(to)
  //   to.meta.keepAlive = true;
  //   next();
  // }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';

.trip-apply{
  y-view();

  .scroll-main{
    flex:1;
    overflow:hidden;
  }
}
</style>


