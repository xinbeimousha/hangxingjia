<template>
  <div class="trip-apply">
    <HeaderTitle
      title="行程申请"
      :btnLeft="true"
      :btnRight="true"
      className="fa-plus"
      @back="goBack"
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
      <div class="scroll-list"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import { Tabs,Tab } from 'vant';
export default {
  components:{
    HeaderTitle,
    Tabs,
    Tab
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
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


