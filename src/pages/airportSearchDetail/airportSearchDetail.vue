<template>
    <div class="airportSearchDetail">
        <HeaderTitle title="航班动态查询" :btnLeft="true" @back="goback"/>
        <div class="content">
            <div class="top">
                <div class="flightmessage">
                    <div class="takeoff">
                        <span>预计起飞</span>
                        <span>20:55</span>
                        <span>计划出发:<span>22:55</span></span>
                    </div>
                    <div class="doublecircle">
                        <div class="circleout">
                            <div class=" circlein">
                                <span>晚点</span>
                            </div>
                        </div>
                    </div>
                    <div class="arriveon">
                        <span>预计到达</span>
                        <span>23:50</span>
                        <span>计划到达:<span>22:55</span></span>
                    </div>
                </div>
                <div class="flightanimate">
                    <div class="circle">
                        <div class="circle1"></div>
                        <div class="line"></div>
                        <div class="circle2"></div>
                    </div>
                    <div class="planemodel">
                        <img src="./airport_search_message_flight.png">
                    </div>
                </div>
            </div>
            <div class="start">
                <div class="starttop">
                    <div class="topleft">
                        <span>起飞</span>
                        <span>广州白云</span>
                    </div>
                    <div class="topright">
                        <span>晴天</span>
                        <span>/</span>
                        <span>23°C</span>
                    </div>
                </div>
                <div class="startcenter">
                    <div class="build">
                        <span>航站楼</span>
                        <span>T2</span>
                    </div>
                    <div class="server">
                        <span>值机柜台</span>
                        <span>G,H</span>
                    </div>
                </div>
                <div class="startbottom">
                        <div class="flightin">
                            <span>登机口</span>
                            <span>A20</span>
                        </div>
                        <div class="flighttype">
                            <span>机型</span>
                            <span>333</span>
                        </div>
                </div>
            </div>
            <div class="end">
                <div class="starttop">
                    <div class="topleft">
                        <span>降落</span>
                        <span>广州白云</span>
                    </div>
                    <div class="topright">
                        <span>晴天</span>
                        <span>/</span>
                        <span>23°C</span>
                    </div>
                </div>
                <div class="startcenter">
                    <div class="build">
                        <span>航站楼</span>
                        <span>T2</span>
                    </div>
                    <div class="server">
                        <span>行李转盘</span>
                        <span>19</span>
                    </div>
                </div>
                <div class="startbottom">
                    <div class="flightin">
                        <span>出口</span>
                        <span>A2-A12</span>
                    </div>
                    <div class="flighttype">
                        <span>机型</span>
                        <span>333</span>
                    </div>
                </div>
            </div>
        </div>   
    </div> 
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { gobackMixin } from "common/js/mixins.js";
export default {
  mixins: [gobackMixin],
  created(){
      this.getData();
  },
  data() {
    return {
        item:[]
    };
  },
  methods:{
      getData(){
          console.log(this.item)
          this.item = this.$route.query.item;
      }
  },
  components: {
    HeaderTitle
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.airportSearchDetail {
    flex: 1;
    y-view();

    .content {
        flex: 1;

        .top {
            background-color: #FFFFFF;
            font-size: 1em;
            padding: 0 1em;
            border-bottom: 1px solid $color-solid;

            .flightanimate {
                margin-top: 1em;

                .circle {
                    x-middle();

                    .circle1 {
                        width: 0.375em;
                        height: 0.375em;
                        border-radius: 50%;
                        border: 1px solid #3b5999;
                    }

                    .line {
                        flex: 1;
                        height: 0.1em;
                        background-color: #C8C8C8;
                        border: none;
                    }

                    .circle2 {
                        width: 0.375em;
                        height: 0.375em;
                        border: 1px solid #3b5999;
                        border-radius: 50%;
                    }
                }

                .planemodel {
                    width: 1.375em;
                    height: 1.375em;
                    position: relative;
                    bottom: 0.9em;
                    left: 0.5em;

                    img {
                    }
                }
            }

            .flightmessage {
                x-middle();
                background-color: #FFFFFF;
                font-size: 1em;
                padding-top: 1em;

                .takeoff {
                    y-view();
                    flex: 1;
                    text-align: right;

                    span:nth-child(1) {
                        font-size: 1em;
                        color: #9B9B9B;
                    }

                    span:nth-child(2) {
                        font-size: 2em;
                        color: #333333;
                        padding: 0.1em 0;
                    }

                    span:nth-child(3) {
                        font-size: 1em;
                        color: #C8C8C8;

                        span {
                            font-size: 1em;
                            color: #C8C8C8;
                        }
                    }
                }

                .doublecircle {
                    padding: 0 0.8em;

                    .circleout {
                        width: 4em;
                        height: 4em;
                        border: 1px solid #f5a623;
                        border-radius: 50%;
                        position: relative;

                        .circlein {
                            background-color: #f5a623;
                            width: 3.5em;
                            height: 3.5em;
                            border-radius: 50%;
                            position: absolute;
                            top: 1%;
                            right: 0;
                            left: 2%;
                            bottom: 0;
                            margin: auto;
                            text-align: center;
                            line-height: 3.5em;

                            span {
                                color: $color-white;
                            }
                        }
                    }
                }

                .arriveon {
                    y-view();
                    flex: 1;

                    span:nth-child(1) {
                        font-size: 1em;
                        color: #9B9B9B;
                    }

                    span:nth-child(2) {
                        font-size: 2em;
                        color: #333333;
                        padding: 0.1em 0;
                    }

                    span:nth-child(3) {
                        font-size: 1em;
                        color: #C8C8C8;

                        span {
                            font-size: 1em;
                            color: #C8C8C8;
                        }
                    }
                }
            }
        }

        .start, .end {
            margin-top: 0.5em;
            background-color: $color-white;
            border-top: 1px solid $color-solid;
            border-bottom: 1px solid $color-solid;
            font-size: 1em;

            .starttop {
                x-middle();
                border-bottom: 1px solid $color-solid;
                padding: 0.8em 0;
                padding-left: 0.8em;
                padding-right: 1em;

                .topleft {
                    flex: 1;

                    span:nth-child(1) {
                        color: #5998ff;
                        border: 0.2em solid #5998ff;
                        border-radius: 0.4em;
                        font-size: 1em;
                        vertical-align: middle;
                    }

                    span:nth-child(2) {
                        font-size: 1.375em;
                        color: #4a4a4a;
                        font-weight: 600;
                        margin-left: 0.5em;
                        vertical-align: middle;
                    }
                }

                .topright {
                    flex: 1;
                    text-align: right;
                    color: #999999;
                    font-size: 1em;
                }
            }

            .startcenter {
                x-middle();
                border-bottom: 1px solid $color-solid;
                padding-left: 0.8em;
                padding-right: 1em;

                .build {
                    x-middle();
                    flex: 1;
                    border-right: 1px solid $color-solid;
                    padding: 1em 0;
                    color: #999999;

                    span:nth-child(1) {
                        flex: 1;
                        font-size: 1.125em;
                    }

                    span:nth-child(2) {
                        flex: 1;
                        text-align: right;
                        font-size: 1.25em;
                        padding-right: 0.75em;
                        color: black;
                    }
                }

                .server {
                    x-middle();
                    flex: 1;
                    color: #999999;

                    span:nth-child(1) {
                        flex: 1;
                        font-size: 1.125em;
                        padding-left: 0.75em;
                    }

                    span:nth-child(2) {
                        flex: 1;
                        text-align: right;
                        font-size: 1.25em;
                        color: black;
                    }
                }
            }

            .startbottom {
                x-middle();
                border-bottom: 1px solid $color-solid;
                padding-left: 0.8em;
                padding-right: 1em;

                .flightin {
                    x-middle();
                    flex: 1;
                    border-right: 1px solid $color-solid;
                    padding: 1em 0;
                    color: #999999;

                    span:nth-child(1) {
                        flex: 1;
                        font-size: 1.125em;
                    }

                    span:nth-child(2) {
                        flex: 1;
                        text-align: right;
                        font-size: 1.25em;
                        padding-right: 0.75em;
                        color: black;
                    }
                }

                .flighttype {
                    x-middle();
                    flex: 1;
                    color: #999999;

                    span:nth-child(1) {
                        flex: 1;
                        font-size: 1.125em;
                        padding-left: 0.75em;
                    }

                    span:nth-child(2) {
                        flex: 1;
                        text-align: right;
                        font-size: 1.25em;
                        color: black;
                    }
                }
            }
        }

        .end {
        }
    }
}
</style>
