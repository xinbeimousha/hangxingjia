<template>
  <div class="order-list">
    <HeaderTitle 
      title="订单列表" 
      :btnLeft="true" 
      @back="goback"
    />
    <Tabs class="reset" @click="getCurrentComponent">
      <Tab v-for="tab in orderTabs" :title="tab.title" :key="tab.title" />
    </Tabs>
    <div class="list-view">
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import OrderListDome from "./OrderListDome";
import OrderListInter from "./OrderListInter";
import { Tab, Tabs } from "vant";
import { gobackMixin } from 'common/js/mixins.js';
export default {
  name:'order',
  components: {
    HeaderTitle,
    Tab,
    Tabs,
    OrderListDome,
    OrderListInter
  },
  mixins:[gobackMixin],
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
    goback(){
      this.$router.push('/main');
    },
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


