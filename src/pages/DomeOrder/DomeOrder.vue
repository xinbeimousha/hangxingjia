<template>
  <div class="dome-order">
    <HeaderTitle 
      title="机票订单"
      :btnLeft="true"
    />
    <div class="dome-order-content"></div>
    <div class="dome-order-footer">
      
    </div>
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';

export default {
  components:{
    HeaderTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.dome-order{
  y-view();

  .dome-order-content{
    flex:1;
  }
}
</style>


