<template>
    <transition name="slider">
      <div class="main">
         <keep-alive>
             <router-view/>
         </keep-alive>
         <div class="footer-tab">
             <router-link tag="div" class="tab-item" to="/main/book" replace>预订</router-link>
             <router-link tag="div" class="tab-item" to="/main/me" replace="">我</router-link>
         </div>
    </div>
    </transition>    
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.main {
    y-view();

    .footer-tab {
        x-middle();

        .tab-item {
            flex: 1;
            padding: 0.15rem;
            text-align: center;
            color: $color-text;

            &.router-link-active {
                color: $color-text-active;
            }
        }
    }
}

.slider-enter-active, .slide-leave-active {
    transition: all 0.3s;
}

.slider-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>


