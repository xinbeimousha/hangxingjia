<template>
  <div class="dome-detail">
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
import { getDomeFlightorderDetail } from "api/orderDetail.js";
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import PlaneTicket from './PlaneTicket';

export default {
  components: {
    HeaderTitle,
    PlaneTicket
  },
  props: ["detailId"],
  created() {
    this._getDomeFlightorderDetail();
  },
  data() {
    return {
      orderDetails: []
    };
  },
  methods: {
    async _getDomeFlightorderDetail() {
      const orderObj = await getDomeFlightorderDetail(this.detailId);
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

.dome-detail {
  full-fixed(100);
  background-color :$color-body;
  .content {
    padding: 0.05rem 0.2rem;
  }
}
</style>


