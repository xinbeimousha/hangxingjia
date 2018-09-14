<template>
  <div class="header-title">
    <div class="btn-left">
      <div class="back" v-if="btnLeft" @click="goBack">
        <Icon name="arrow-left"/>
      </div>
    </div>
    <div class="title" v-html="title"></div>
    <div class="btn-right">
      <div class="info" v-if="btnRight"></div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
  props:{
    title:{
      type:String,
      default:''
    },
    btnLeft:{
      type:Boolean,
      default:false,
    },
    btnRight:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
      this.$emit('back');
    }
  },
  components:{
    Icon
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/style/mixin.styl';
  @import '~common/style/variable.styl';

  .header-title { 
    x-middle();
    padding:0.2rem;
    color :$color-white;
    text-align :center;
    background-color :$color-bg-high;  
    
    .btn-left {
      flex:1;
      text-align :left;

      .van-icon-arrow-left {
        vertical-align :middle;
      }
    }
    .title {
      flex:3;
    }
    .btn-right {
      flex:1;
    }
  }
</style>


