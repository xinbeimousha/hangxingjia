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
                    <div class="footLeft" @click="TripOrderList">查看订单</div>
                    <div class="footRight" v-if="isdetail" @click="showDetail">查看详情</div>
                </div>
                <div class="trip-order" v-if="isShow">
                    <div class="tripdetail" v-if="item.OrderDetail && item.OrderDetail.length > 0">
                        <ul class="trip_ul">
                            <li class="myli"  v-for="(p,index) in item.OrderDetail" v-if="p && p.dtType != -1" :key="index">
                                <div class="left" v-if="p.sortTime">
                                    <p>{{getTime(p.sortTime)}}</p>
                                    <p>{{getDate(p.sortTime)}}</p>
                                </div>
                                <div class="line"></div>
                                <div class="right">
                                    <div class="arrow"> </div>
                                    <div class="img_box">
                                        <img src="./book_index_plane.png" v-if="p.dtType == 0"/>
										<!-- <img src="./book_index_hotel.png" v-if="p.dtType == 1" />
										<img src="./book_index_train.png"  v-if="p.dtType == 2" />
										<img src="./airport_service_rest.png"  v-if="p.dtType == 3" />
										<img src="./book_index_car.png" v-if="p.dtType == 4" /> -->
                                    </div>
                                    <div class="detail_msg">
                                        <div class="msg_title">
                                            <span>{{p.comname}}</span>
                                            <span>{{p.fltno}}</span>
                                            <span>{{p.planetype}}</span>
                                        </div>
                                        <div class="msg_bottom">
                                            <div class="msg_left">
                                                <p>{{p.actdeptime}}</p>
                                                <p>{{p.fromsite}}</p>
                                            </div>
                                            <div class="msg_center">
                                                {{p.status}}
                                            </div>
                                            <div class="msg_right">
                                                <p>{{p.actarrtime}}</p>
                                                <p>{{p.tosite}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="trip-order-no" v-else>没有行程详情哦</div>
                </div>
                <div class="hidelist" @click="hideDetail" v-if="isShow">
                    <i class="fa fa-angle-up subtext"></i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { getDate1, getDate2, getTime, getDate3 } from "common/js/day.js";
export default {
  data() {
    return {
      isShow: false
    };
  },
  watch: {
    isdetail: function(newVal, oldVal) {
      if(!newVal){
          this.isShow=false
      }
    }
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    isdetail: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    TripOrderList(){
        this.$router.push({path:'/TripOrderList',query:{itemId:this.item.exp.expId}});
    },
    showDetail() {
      this.isShow = true;
    },
    hideDetail() {
      this.isShow = false;
    },
    getDate: function(date) {
      return getDate3(date);
    },
    getTime: function(date) {
      return getTime(date);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';
@import '~common/style/base.styl';

.myul {
    border-1px($color-bg);
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
                text-over();
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

            .tripdetail {
                .myli {
                    x-middle();
                    padding: 0 0.5em;
                    margin: 0.8em 0;

                    .left {
                        font-size: 0.75em;
                        color: #c8c8c8;
                        margin-top: 1em;
                    }

                    .line {
                        position: relative;
                        width: 0.6em;
                        height: 0.6em;
                        border: 0.1em solid #c8c8c8;
                        border-radius: 50%;
                        margin: 0.9em 0.6em 0 0.4em;
                        z-index: 2;
                        background-color: #fff;

                        &:before {
                            content: '';
                            position: absolute;
                            background-color: #9b9b9b;
                            width: 0.3em;
                            height: 0.3em;
                            border-radius: 50%;
                            top: 0.15em;
                            left: 0.15em;
                            z-index: 2;
                        }
                    }

                    .right {
                        x-middle();
                        flex: 1;
                        position: relative;
                        font-size: 0.875em;
                        color: #999;
                        background-color: #fff;
                        padding: 0.8em 0.6em;
                        border: 1px solid #d8d8d8;
                        border-radius: 0.8em;
                        line-height: 1.6em;

                        &:before {
                            content: '';
                            position: absolute;
                            width: 0.2em;
                            top: -1.1em;
                            left: -1.28em;
                            bottom: -1.1em;
                            background-color: #d8d8d8;
                            z-index: 1;
                        }

                        i {
                            margin-left: 1em;
                        }

                        .detail_msg {
                            flex: 1;

                            .msg_title {
                                color: #000;
                                x-middle();

                                span {
                                    flex: 1;
                                    text-align: center;
                                }

                                span:nth-child(1) {
                                    flex: 1;
                                    text-align: left;
                                }

                                span:nth-child(3) {
                                    text-align: right;
                                }
                            }

                            .msg_bottom {
                                x-middle();

                                .msg_left {
                                    flex: 1;
                                }

                                .msg_right {
                                    flex: 1;
                                    text-align: right;
                                }

                                .msg_center {
                                    flex: 1;
                                    text-align: center;
                                    font-weight: bold;
                                    color: #3B5999;
                                }
                            }
                        }

                        .arrow {
                            &:before {
                                content: '';
                                position: absolute;
                                border-style: solid;
                                border-color: transparent #d8d8d8 transparent transparent;
                                border-width: 10px;
                                left: -20px;
                                width: 0;
                                height: 0;
                                z-index: 2;
                            }

                            &:after {
                                content: '';
                                position: absolute;
                                border-style: solid;
                                border-color: transparent #fff transparent transparent;
                                border-width: 10px;
                                left: -19px;
                                width: 0;
                                height: 0;
                                z-index: 2;
                            }
                        }

                        .img_box {
                            img {
                                width: 2.5em;
                                height: 2.5em;
                                margin-right: 0.6em;
                            }
                        }
                    }
                }
            }

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
