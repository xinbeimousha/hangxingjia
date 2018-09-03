<template>
    <div class="trip_ul">
        <ul class="myul">
            <li class="myli">
                <div class="maindata">
                    <div class="head" v-html="head">wwwwwww</div>
                    <div class="content">
                        <div class="content_left">
                            <div class="startAddress" v-html="startAddress">广州</div>
                            <p class="startTime" v-html="startTime">1018-12-19</p>
                        </div>
                        <div class="content_center">
                            <img v-show="src==1" src="./trip_apply_one_way.png">
                            <img v-show="src==2" src="./trip_apply_two_way.png">
                        </div>
                        <div class="content_right">
                            <div class="endAddress" v-html="endAddress">北京</div>
                            <p class="endTime" v-html="endTime">2018-12-09</p>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="footLeft">查看订单</div>
                    <div class="footRight" v-show="isdetail">查看详情</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    head: {},
    startAddress: {},
    startTime: {},
    endAddress: {},
    endTime: {},
    isdetail: {
      type: Boolean,
      default: true
    },
    src: {
        type:Number,
        default:2
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';

.myul {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
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
    }
}
</style>
