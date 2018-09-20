<template>
  <div class="city-list">
    <HeaderTitle title="城市列表" :btnLeft="true" @back="goBack" />
    <Tabs class="city">
      <Tab title="国内城市"></Tab>
      <Tab title="国际城市/港澳台" disabled></Tab>
    </Tabs>
    <div class="content">
      <div class="scroll-container">
        <header class="scroll-headertitle">热门城市</header>
        <ul class="scroll-celllist">
          <li class="scroll-cellitem" 
          v-for="(item,index) in hotCitys" 
          :key="index"
          @click="chooseCity(item)"
        >
            <div class="scroll-cell">{{item.n}}</div>
          </li>
        </ul>
        <div class="scroll-main">
          <div class="scroll-panel" v-for="(city,index) in citys" :key="index">
            <header class="scroll-tittle">{{city.title}}</header>
            <ul class="scroll-list">
              <li class="scroll-item" 
                v-for="(item,i) in city.items" 
                :key="i"
                @click="chooseCity(item)"
              >
                <p class="scroll-row">{{item.n}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="list-shortcut">
        <ul v-for="(item,index) in shortcutList" :key="index">
          <li class="list-item">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle";
import { Tabs, Tab } from "vant";
import { domehotCity, domeCity } from "./cityData.js";
import bus from 'common/js/bus.js';
export default {
  components: {
    HeaderTitle,
    Tabs,
    Tab
  },
  props: ["id"],
  data() {
    return {
      citys: domeCity,
      hotCitys: domehotCity
    };
  },
  computed: {
    shortcutList() {
      return this.citys.map(item => {
        return item.title;
      });
    },
    index() {
      return Number(this.id);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    chooseCity(item){
      bus.$emit('city',item,this.index);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.city-list {
  y-view();

  .city >>> .van-tab--active {
    color: $color-text-active;
  }

  .city >>> .van-tabs__line {
    background-color: $color-text-active;
  }

  .content {
    flex: 1;
    overflow: hidden;
    position: relative;

    .scroll-container {
      height: 100%;
      scrolling();

      .scroll-headertitle {
        padding-left: 12px;
        padding-right: 12px;
        line-height: 0.48rem;
        font-size: 12px;
        color: $color-text-h;
      }

      .scroll-celllist {
        overflow: hidden;
        padding: 0 32px 6px 9px;

        .scroll-cellitem {
          float: left;
          width: 33.33333%;
          padding: 3px;
          box-sizing: border-box;

          .scroll-cell {
            font-size: 13px;
            line-height: 30px;
            border: 1px solid #e0e0e0;
            border-width: 0.5px !important;
            background-color: #fff;
            text-align: center;
          }
        }
      }

      .scroll-main {
        .scroll-panel {
          .scroll-tittle {
            padding: 0 10px;
            height: 24px;
            border-top: 1px solid #e1e1e1;
            border-bottom: 1px solid #e1e1e1;
            borer-width: 0.5px;
            background-color: #fbfbfb;
            color: rgba(32, 37, 37, 0.4);
            font-size: 12px;
            line-height: 24px;
          }

          .scroll-list {
            background-color: #fff;

            .scroll-item {
              padding-left: 12px;

              .scroll-row {
                padding-right: 30px;
                border-bottom: 1px solid rgba(32, 35, 37, 0.15);
                line-height: 45px;
                color: #3d3d3d;
                font-size: 16px;
              }

              &:last-child .scroll-row {
                border: 0;
              }
            }
          }
        }
      }
    }
    .list-shortcut {
        position: absolute;
        top: 10%;
        right: 0;
        z-index: 30;

        .list-item {
          cursor: pointer;
          width: 30px;
          height: 16px;
          font-size: 9px;
          color: rgba(32, 35, 37, 0.6);
          text-align: center;
        }
      }
  }
}
</style>



