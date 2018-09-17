<template>
  <div class="list-dome">
    <List class="list" v-model="loading" :finished="finished" @load="onload">
      <PullRefresh v-model="isLoading" @refresh="onRefresh">
        <div class="list-item" 
          v-for="orderData in orderDatas" 
          @click="orderDetail(orderData.detailId)"
        >
          <OrderListPlaneItem title="国内机票" :orderData="orderData" />
        </div>
        <p class="no-result" v-if="hasNoOrder">还没有订单哦</p>
        <p class="no-more" v-if="hasNoMore">没有更多数据了</p>
      </PullRefresh>
    </List>
  </div>
</template>

<script>
import OrderListPlaneItem from "./OrderListPlaneItem";
import { getFlightOrders } from "api/order.js";
import { List, PullRefresh } from "vant";

export default {
  components: {
    OrderListPlaneItem,
    List,
    PullRefresh
  },
  data() {
    return {
      page: 1,
      orderDatas: [],
      isPull: false, // 是否下拉
      isLoading: false, //是否处于下拉刷新状态
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      hasNoOrder: false, // 是否有数据
      hasNoMore: false // 是否有更多数据
    };
  },
  methods: {
    async _getFlightOrders(showLoading) {
      const result = await getFlightOrders(this.page, showLoading);
      const obj = result.obj;
      this.loading = false;
      if ((!result.success || !obj || obj.length < 1) &&this.page === 1){
        this.hasNoOrder = true;
        this.finished = true;
        return;
      }
      if (this.isPull) {
        this.orderDatas = [];
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
        this.orderDatas.push(item);
      });
      this.page++;
    },
    onload() {
      setTimeout(() => {
        this._getFlightOrders(false);
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.isPull = true;
        this.page = 1;
        this._getFlightOrders(false);
      }, 500);
    },
    orderDetail(detailId) {
      this.$router.push(`/order/orderDetailDome/${detailId}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.list-dome {
  flex: 1;
  y-view();

  .list {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    .list-item {
      margin-bottom: 0.1rem;
    }

    .no-result {
      margin-top: 1rem;
      color: $color-text-h;
      text-align: center;
    }

    .no-more {
      margin: 0.2rem 0;
      color: $color-text-h;
      text-align: center;
    }
  }
}
</style>


