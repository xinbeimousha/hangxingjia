<template>
  <div class="btn-common">
    <p class="btn-doSomething" @click="btnClick">
      {{content}}
    </p>
  </div> 
</template>

<script>
export default {
  props:{
    content:{
      type:String,
      default:'取消订单'
    }
  },
  methods:{
    btnClick(){
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.btn-common{
  
  .btn-doSomething{
    padding:0.2rem 0;
    border-radius:8px;
    text-align :center;
    color:#fff;
    background-color:$color-bg-high;
  }
}
</style>


