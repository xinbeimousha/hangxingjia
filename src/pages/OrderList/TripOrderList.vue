<template>
    <div class="TripOrderList">
        <HeaderTitle title="订单列表" :btnLeft="true" @back="goback" />
        <div class="detail">
            <ul>
                <PullRefresh v-model="isLoading" @refresh="onRefresh">
                    <li v-for="(orderData,index) in orderDatas" :key="index" @click="orderDetail(orderData.detailId)">
                        <OrderListPlaneItem  title="国内机票" :orderData="orderData"/>
                    </li>
                    <p class="no-result" v-if="hasNoOrder">还没有订单哦</p>
                    <p class="no-more" v-if="hasNoMore">没有更多数据了</p>
                </PullRefresh>
            </ul>
        </div>
        <router-view></router-view>
    </div>    
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import OrderListPlaneItem from "./OrderListPlaneItem";
import { gobackMixin } from "common/js/mixins.js";
import { getTripOrderList } from "api/TripOrderList.js";
import { PullRefresh } from "vant";
export default {
  mixins: [gobackMixin],
  components: {
    HeaderTitle,
    OrderListPlaneItem,
    PullRefresh
  },
  created() {
    this._getTripOrderList();
  },
  data() {
    return {
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
    async _getTripOrderList(showLoading) {
      let tripId = this.$route.query.itemId;
      const result = await getTripOrderList(tripId, showLoading);
      const obj = result.obj;
      this.loading = false;
      if (!result.success || !obj || obj.length < 1) {
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
      if (!obj || obj.length < 10) {
        this.finished = true;
        this.hasNoMore = true;
      }
      if (obj && obj.length > 0) {
        obj.forEach(item => {
          this.orderDatas.push(item);
        });
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.isPull = true;
        this._getTripOrderList(false);
      }, 500);
    },
    orderDetail(detailId) {
      this.$router.push(`/TripOrderList/orderDetailDome/${detailId}`);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';

.TripOrderList {
  flex: 1;
  y-view();

  .detail {
    flex: 1;
    y-view();
    overflow: hidden;
    overflow-y: scroll;

    li {
      border-top: 1px solid #EBECED;
      padding-left: 0.5em;
      background-color: $color-white;
      margin-bottom: 0.5em;
      box-shadow: 0 3px 5px #E7E7E8;
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
