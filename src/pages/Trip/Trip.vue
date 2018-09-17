<template>
  <div class="order-list">
    <HeaderTitle title="我的行程" />
    <Tabs class="reset" @click="getCurrentComponent">
      <Tab>
        <div slot="title">
          <span class="triping"></span>进行中
        </div>
      </Tab>
      <Tab>
        <div slot="title">
          <span class="tripPlan"></span>计划中
        </div>
      </Tab>
      <Tab>
        <div slot="title">
          <span class="triped"></span>已完成
        </div>
      </Tab>
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
import Triping from "./Triping";
import TripPlan from "./TripPlan";
import Triped from "./Triped";

import { Tab, Tabs } from "vant";
export default {
  name:'trip',
  components: {
    HeaderTitle,
    Tab,
    Tabs,
    Triping,
    TripPlan,
    Triped
  },
  data() {
    return {
      orderTabs: [
        {
          title: "进行中",
          content: "Triping"
        },
        {
          title: "计划中",
          content: "TripPlan"
        },
        {
          title: "已完成",
          content: "Triped"
        }
      ],
      currentComponent: "Triping"
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
@import '~common/style/base.styl';

.order-list {
  y-view();

  .reset {
    .on{
      
    }
    .triping {
      display inline-block
      width: 1.25em;
      height: 1.25em;
      vertical-align middle
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 0.4em;
      background-image: url('./travel_index_tab1_ing.png');
    }

    .tripPlan {
      display inline-block
      width: 1.25em;
      height: 1.25em;
      vertical-align middle
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 0.4em;
      background-image: url('./travel_index_tab2_ing.png');
    }

    .triped {
      display inline-block
      width: 1.25em;
      height: 1.25em;
      vertical-align middle
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 0.4em;
      background-image: url('./travel_index_tab3_ing.png');
    }
  }

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


