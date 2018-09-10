<template>
  <div class="order-list">
    <HeaderTitle title="订单列表" :btnLeft="true" />
    <Tabs class="reset">
      <Tab v-for="tab in orderTabs" :title="tab.title" :key="tab.title" />
    </Tabs>
    <div class="list-view">
      <OrderListDome />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import OrderListDome from './OrderListDome';
import { Tab, Tabs } from "vant";
export default {
  components: {
    HeaderTitle,
    Tab,
    Tabs,
    OrderListDome
  },
  data() {
    return {
      orderTabs: [
        {
          title: "国内机票",
          content: ""
        },
        {
          title: "国际机票",
          content: ""
        },
        {
          title: "火车",
          content: ""
        },
        {
          title: "专车",
          content: ""
        },
        {
          title: "其他",
          content: ""
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.order-list {
  y-view();

  .reset >>> .van-tabs__line {
    background-color: $color-text-active;
  }

  .reset >>> .van-tab--active {
    color: $color-text-active;
  }

  .list-view {
    flex:1;
  }
}
</style>


