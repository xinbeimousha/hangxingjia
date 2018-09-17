<template>
  <div class="dome-detail">
    <HeaderTitle 
      title="订单详情" 
      :btnLeft="true"
      @back="goback"
    />
    <div class="content">
      <div v-for="(item,index) in orderDetails" :key="index">
        <PlaneTicket :orderDetail="item" />
      </div>
      <div class="btn-cancel" 
        v-if="orderDetails.length > 0 && orderDetails[0].status===2"
      >
        <BtnCommon @click="cancelFlight" />
      </div>
    </div>
  </div>
</template>

<script>
import { getDomeFlightorderDetail,cancelFlight } from "api/orderDetail.js";
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import BtnCommon from "components/BtnCommon/BtnCommon";
import PlaneTicket from "./PlaneTicket";
import { gobackMixin } from 'common/js/mixins.js';

export default {
  components: {
    HeaderTitle,
    PlaneTicket,
    BtnCommon
  },
  mixins:[gobackMixin],
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
    cancelFlight() {
      cancelFlight(this.detailId)
    },
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
  background-color: $color-body;

  .content {
    padding: 0.05rem 0.2rem;

    .btn-cancel {
      margin-top: 0.3rem;
    }
  }
}
</style>


