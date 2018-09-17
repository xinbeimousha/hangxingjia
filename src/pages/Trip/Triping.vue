<template>
  <div class="detailMsg">
    <PullRefresh class="PullRefresh" v-model="isLoading" @refresh="onRefresh">
      <List v-model="loading" :finished="finished" @load="onLoad">
        <div class="trip-plan" v-for="(item,index) in item" :key="index">
          <TripContent v-bind:item="item" v-bind:isdetail="isdetail" />
        </div>
        <p class="no-result" v-if="hasNoOrder">还没有计划中的行程</p>
        <p class="no-more" v-if="hasNoMore">没有更多数据了</p>
      </List>
    </PullRefresh>
  </div>
</template>
<script>
import TripContent from "components/TripContent/TripContent.vue";
import { getTravelDetails } from "api/getTravelDetails";
import { PullRefresh, List } from "vant";
export default {
  components: {
    TripContent,
    PullRefresh,
    List
  },
  data() {
    return {
      item: [],
      isdetail: false,
      page: 1,
      isPull: false, // 新加是否下拉
      isLoading: false, //是否处于下拉刷新状态
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      hasNoOrder: false, // 是否有数据
      hasNoMore: false // 是否有更多数据
    };
  },
  methods: {
    async getTripData(showLoading) {
      let Page = {
        page: this.page,
        state: 0,
        pageSize: 10
      };
      const result = await getTravelDetails(Page, showLoading);
      const obj = result.obj;
      this.loading = false;
      if ((!result.success || !obj || obj.length < 1 )&& this.page === 1) {
        this.hasNoOrder = true;
        this.finished = true;
        return;
      }
      if (this.isPull) {
        this.item = [];
        this.isPull = false;
        this.isLoading = false;
        this.finished = false;
        this.hasNoMore = false;
      }
      if (obj.length < 10) {
        this.finished = true;
        this.hasNoMore = true;
      }
      obj.forEach(item => {
        this.item.push(item);
      });
      this.page++;
    },
    onLoad() {
      setTimeout(() => {
        this.getTripData(false);
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.isPull = true;
        this.page = 1;
        this.getTripData(false);
      }, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';
@import '~common/style/base.styl';

.detailMsg {
  flex: 1;
  y-view();

  .PullRefresh {
    flex: 1;
    overflow-y: scroll;
    overflow: hidden;

    .trip-plan {
      margin-bottom: 0.1rem;
    }

    .no-result {
      font-size: 0.8em;
      margin-top: 1rem;
      color: $color-text-h;
      text-align: center;
    }

    .no-more {
      font-size: 0.8em;
      margin: 0.2rem 0;
      color: $color-text-h;
      text-align: center;
    }
  }
}
</style>

