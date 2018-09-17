<template>
  <div class="list-inter">
    <List class="list" v-model="loading" :finished="finished" @load="onload">
      <PullRefresh v-model="isLoading" @refresh="onRefresh">
        <div class="list-item" 
          v-for="orderData in orderDatas" 
          @click="orderDetail(orderData.detailId,orderData.parentOrderId)"
        >
          <OrderListPlaneItem title="国际机票" :orderData="orderData" />
        </div>
        <p class="no-result" v-if="hasNoOrder">还没有订单哦</p>
        <p class="no-more" v-if="hasNoMore">没有更多数据了</p>
      </PullRefresh>
    </List>
  </div>
</template>

<script>
import OrderListPlaneItem from "./OrderListPlaneItem";
import { getFlightOrders, getInterFlightOrders } from "api/order.js";
import { setLocal } from 'common/js/storage.js';
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
    async _getInterFlightOrders(showLoading) {
      const result = await getInterFlightOrders(this.page, showLoading);
      if (result.success) {
        this.loading = false;
        if (result.obj.results.length < 1 && this.page === 1) {
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
        if (result.obj.results.length < 10) {
          this.finished = true;
          this.hasNoMore = true;
        }
        result.obj.results.forEach(item => {
          this.orderDatas.push(item);
        });
        this.page++;
      }
    },
    onload() {
      setTimeout(() => {
        this._getInterFlightOrders(false);
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.isPull = true;
        this.page = 1;
        this._getInterFlightOrders(false);
      }, 500);
    },
    orderDetail(detailId,orderId) {    
      this.$router.push(`/order/orderDetailInter/${detailId}/${orderId}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.list-inter {
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


