<template>
    <transition name="slide">
      <div class="main">
         <keep-alive>
             <router-view/>
         </keep-alive>
         <div class="footer-tab">
             <router-link tag="div" class="tab-item" to="/main/book" replace>
               <div class="item">
                   <span class="icon book"></span>
                   <div class="content">预订</div>
               </div>
             </router-link>
             <router-link tag="div" class="tab-item" to="/main/me" replace="">
                <div class="item">
                    <span class="icon me"></span>
                    <div class="content">我</div>
                </div>
             </router-link>
         </div>
    </div>
    </transition>    
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.main {
    y-view();
    
    full-fixed(1);

    .footer-tab {
        x-middle();

        .tab-item {
            flex: 1;

            padding: 0.15rem;
            text-align: center;
            color: $color-text;

            .item {
                line-height :1;
                .icon {
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-size: cover;
                    background-repeat: no-repeat;

                    &.book {
                        background-image: url('./main_book.png');
                    }

                    &.me {
                        background-image: url('./main_me.png');
                    }
                }
            }

            &.router-link-active {
                color: $color-text-active;
                .icon {
                     &.book {
                        background-image: url('./main_book_ed.png');
                    }

                    &.me {
                        background-image: url('./main_me_ed.png');
                    }
                    }
            }
        }
    }
}

.slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>


