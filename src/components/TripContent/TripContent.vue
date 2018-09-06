<template>
    <div class="trip_ul">
        <ul class="myul border-1px">
            <li class="myli">
                <div class="maindata">
                    <div class="head " v-html="item.exp.workInfo">wwwwwww</div>
                    <div class="content">
                        <div class="content_left">
                            <div class="startAddress" v-html="item.exp.from">广州</div>
                            <p class="startTime" v-html="item.exp.begin">1018-12-19</p>
                        </div>
                        <div class="content_center">
                            <img v-show="item.exp.tripType==0 || item.exp.tripType==2" src="./trip_apply_one_way.png">
                            <img v-show="item.exp.tripType==1" src="./trip_apply_two_way.png">
                        </div>
                        <div class="content_right">
                            <div class="endAddress" v-html="item.exp.to">北京</div>
                            <p class="endTime" v-html="item.exp.end">2018-12-09</p>
                        </div>
                    </div>
                </div>
                <div class="foot" v-if="!isShow">
                    <div class="footLeft">查看订单</div>
                    <div class="footRight" v-if="isdetail" @click="showDetail">查看详情</div>
                </div>
                <div class="trip-order" v-if="isShow">





                    <div class="trip-order-no">没有行程详情哦</div>
                </div>
                <div class="hidelist" @click="hideDetail" v-if="isShow">
                    <i class="fa fa-angle-up subtext"></i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    isdetail: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showDetail() {
      this.isShow = true;
    },
    hideDetail() {
      this.isShow = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';
@import '~common/style/base.styl';
.myul {
    border-1px($color-bg)
    padding: 0 1em;
    background-color: $color-white;
    margin-bottom: 0.6em;

    .myli {
        .maindata {
            .head {
                padding: 0.8em 0;
                font-size: 1em;
                color: #333;
                font-weight: bold;
                border-bottom: 1px dashed $color-dashed;
            }

            .content {
                x-middle();
                padding: 0.8em 0;
                font-size: 0.875em;

                .content_center {
                    flex: 1;

                    img {
                        width: 2.5em;
                        height: 2.5em;
                        margin: 0 auto;
                    }
                }

                .content_left {
                    flex: 1;
                }

                .content_right {
                    flex: 1;

                    .endAddress {
                        text-align: right;
                    }

                    .endTime {
                        text-align: right;
                    }
                }
            }
        }

        .foot {
            x-middle();
            color: $color-text-active;
            padding: 0.8em 0;
            border-top: 1px dashed $color-dashed;

            .footLeft {
                flex: 1;
            }

            .footRight {
                flex: 1;
                text-align: right;
            }
        }

        .trip-order {
            background-color: #f6f7f9;
            margin: 0 -1em;
            overflow: hidden;
            border-bottom: 1px solid $color-bg;
            border-top: 1px solid $color-bg;
            z-index: 999;

            .trip-order-no {
                text-align: center;
                padding: 1em 0;
                font-size: 0.8em;
            }
        }

        .hidelist {
            text-align: center;
            padding: 0.6em 0;
            font-size: 1.4em;

            .subtext {
                color: $color-text-active;
            }
        }
    }
}
</style>
