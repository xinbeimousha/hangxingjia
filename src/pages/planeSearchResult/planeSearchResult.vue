<template>
  <div class="search-result">
    <HeaderTitle title="我的机票" :btnLeft="true"/>
    <div class="choose-sort border-1px">
      <span class="sort time-sort">时间排序</span>
      <span class="sort price-sort">价格排序</span>
    </div>
    <div class="flight-list-wrapper">
      <FlightList />
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import FlightList from 'components/FlightList/FlightList';

export default {
  components:{
    HeaderTitle,
    FlightList
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

  .search-result{
    full-fixed(100);
    y-view();
    background-color :$color-white;

    .choose-sort{
      x-middle();
      padding:0.2rem 0;
      border-1px(#BABABA);
      .sort{
        flex:1;
        text-align:center;
      }
      .time-sort{
        border-right : 1px solid #e1e1e1;
      }
    }
    .ticket-list {
      flex:1;
      overflow-y:scroll;
    }
  }
</style>


