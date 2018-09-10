<template>
  <div class="order-list">
    <HeaderTitle title="订单列表" :btnLeft="true" />
    <Tabs class="reset" @click="getCurrentComponent">
      <Tab v-for="tab in orderTabs" :title="tab.title" :key="tab.title" />
    </Tabs>
    <div class="list-view">
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import OrderListDome from "./OrderListDome";
import OrderListInter from "./OrderListInter";
import { Tab, Tabs } from "vant";
export default {
  components: {
    HeaderTitle,
    Tab,
    Tabs,
    OrderListDome,
    OrderListInter
  },
  data() {
    return {
      orderTabs: [
        {
          title: "国内机票",
          content: "OrderListDome"
        },
        {
          title: "国际机票",
          content: "OrderListInter"
        }
      ],
      currentComponent: "OrderListDome"
    };
  },
  methods: {
    getCurrentComponent(index) {
      this.currentComponent = this.orderTabs[index].content;
    }
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
    flex: 1;
    y-view();
  }
}
</style>


