<template>
  <div class="trip">
    <HeaderTitle title="我的行程"/>
    <div class="banner_title">
    <router-link to="triping" tag="div" class="title">
      <div class="content">
        <span class="icon triping"></span>
        <div class="test">进行中</div>
      </div>
    </router-link>
    <router-link to="tripPlan" tag="div" class="title">
      <div class="content">
        <span class="icon tripPlan"></span>
        <div class="test">计划中</div>
      </div>
    </router-link>
    <router-link to="triped" tag="div" class="title">
      <div class="content">
        <span class="icon triped"></span>
        <div class="test">已完成</div>
      </div>
    </router-link>
</div>
<keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.trip {
  flex: 1;

  .banner_title {
    x-middle();

    .title {
      flex: 1;
      text-align: center;
      color: $color-text;

      .content {
        x-middle();
        line-height: 1;
        margin: 0.15em 20%;

        .icon {
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          margin-right: 0.15em;
          background-size: cover;
          background-repeat: no-repeat;

          &.triping {
            background-image: url('./travel_index_tab1_ing.png');
          }

          &.tripPlan {
            background-image: url('./travel_index_tab2_ing.png');
          }

          &.triped {
            background-image: url('./travel_index_tab3_ing.png');
          }
        }
      }

      &.router-link-active {
        color: $color-text-active;

        .icon {
          &.triping {
            background-image: url('./travel_index_tab1_ed.png');
          }

          &.tripPlan {
            background-image: url('./travel_index_tab2_ed.png');
          }

          &.triped {
            background-image: url('./travel_index_tab3_ed.png');
          }
        }
      }
    }
  }
}
</style>


