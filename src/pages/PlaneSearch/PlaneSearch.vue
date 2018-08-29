<template>
  <div class="plane-search">
    <HeaderTitle
      title="机票预订" 
      :btnLeft="true"
    />
  </div>
</template>

<script>
import HeaderTitle from 'components/HeaderTitle/HeaderTitle.vue';

export default { 
  components:{
    HeaderTitle,
  } 
}
</script>

<style lang="stylus" scoped>
  .plane-search{
    flex:1;
  }
</style>


