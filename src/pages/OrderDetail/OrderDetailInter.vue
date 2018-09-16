<template>
  <div class="inter-detail">
    <HeaderTitle title="订单详情" :btnLeft="true" />
    <div class="content">
      <div v-for="(item,index) in orderDetails" :key="index">
        <PlaneTicket 
          :orderDetail="item"
        />
      </div>
      <div class="btn-cancel"></div>
    </div>
  </div>
</template>

<script>
import { getInterFlightorderDetail } from "api/orderDetail.js";
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import PlaneTicket from './PlaneTicket';

export default {
  components: {
    HeaderTitle,
    PlaneTicket
  },
  props: ['detailId','orderId'],
  created() {
    this._getInterFlightorderDetail();
  },
  data() {
    return {
      orderDetails: []
    };
  },
  methods: {
    async _getInterFlightorderDetail() {
      const orderObj = await getInterFlightorderDetail(this.detailId,this.orderId);
      if (orderObj.success) {
        this.orderDetails = orderObj.obj;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.inter-detail {
  full-fixed(100);
  background-color :$color-body;
  .content {
    padding: 0.05rem 0.2rem;
  }
}
</style>


