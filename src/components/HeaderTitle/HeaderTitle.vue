<template>
    <div class="header-title">
        <div class="button-left">
            <span class="back"></span>
        </div>
        <div class="title">{{ title }}</div>
        <div class="button-right">
            <span class="info"></span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        buttonLeft:{
            type:Boolean,
            default:false
        },
        buttonRight:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~common/style/variable.styl';
  @import '~common/style/mixin.styl';
    .header-title {
        x-middle();
        background-color:$color-bg-high;

        .title {
            flex:1;
            
            padding:0.15rem 0;
            color:$color-white ;
            text-align :center;
            }
        }
</style>


