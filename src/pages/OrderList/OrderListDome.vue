<template>
  <div class="list-dome">
    <OrderListItem />
  </div>
</template>

<script>
import OrderListItem from 'components/OrderListItem/OrderListItem';
import { getFlightOrders } from 'api/order.js';

export default {
  components:{
    OrderListItem
  },
  created(){
    this._getFlightOrders();
  },
  methods:{
    _getFlightOrders(){
      getFlightOrders();
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';


</style>


