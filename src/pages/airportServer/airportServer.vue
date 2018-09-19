<template>
    <div class="airport">
        <HeaderTitle title="机场服务" :btnLeft='true' @back="goBack"/>
        <div class="server_body">
            <div class="imgbox">
                <van-swipe :autoplay="3000">
                        <van-swipe-item>
                            <img src="./airport_service_banner.png">
                        </van-swipe-item>
                        <!-- <van-swipe-item>
                            <img src="./airport_service_banner.png">
                        </van-swipe-item> -->
                </van-swipe>
            </div>
            <ul class="myul">
                <li class="myli" >
                    <router-link tag="div" class="box" to="/airportActive">
                        <div class="top">
                            <img src="./book_index_plane.png"/>
                        </div>
                        <div class="center">
                            <span>航班动态</span>
                        </div>
                        <div class="bottom">
                            <span>出行变得更简单</span>
                        </div>
                    </router-link>
                    <div  class="box"  @click="routerTo('在线值机','1')">
                        <div class="top">
                            <img src="./airport_service_print.png"/>
                        </div>
                        <div class="center">
                            <span>在线值机</span>
                        </div>
                        <div class="bottom">
                            <span>排队长龙说拜拜</span>
                        </div>
                    </div> 
                    <router-link tag="div" class="box" to="/airportCustomer">
                        <div class="top">
                            <img src="./airport_service.png"/>
                        </div>
                        <div class="center">
                            <span>在线客服</span>
                        </div>
                        <div class="bottom">
                            <span>找不到警察找客服</span>
                        </div>
                    </router-link> 
                </li>
                <li class="myli">
                   <div class="box" @click="routerTo('地图导航','2')">
                            <div class="top">
                                <img src="./airport_service_map.png"/>
                            </div>
                            <div class="center">
                                <span>地图导航</span>
                            </div>
                            <div class="bottom">
                                <span>再也不用问人了</span>
                            </div>
                        </div> 
                        <div class="box" @click="alertMsg()">
                            <div class="top" >
                                <img src="./book_index_food.png"/>
                            </div>
                            <div class="center">
                                <span>餐饮</span>
                            </div>
                            <div class="bottom">
                                <span>机场美食指南针</span>
                            </div>
                        </div> 
                        <div class="box" @click="alertMsg()">
                            <div class="top">
                                <img src="./airport_service_rest.png"/>
                            </div>
                            <div class="center">
                                <span>计时休息室</span>
                            </div>
                            <div class="bottom">
                                <span>每一分钟都是爱</span>
                            </div>
                        </div> 
                </li>
                <li class="myli">
                    <div class="box"  @click="routerTo('失物招领','3')">
                            <div class="top">
                                <img src="./airport_service_lost.png"/>
                            </div>
                            <div class="center">
                                <span >失物招领</span>
                            </div>
                            <div class="bottom">
                                <span>是我的就是我的</span>
                            </div>
                        </div> 
                   <div class="box" @click="alertMsg()">
                            <div class="top">
                                <img src="./airport_service_bus.png"/>
                            </div>
                            <div class="center">
                                <span>空港快线</span>
                            </div>
                            <div class="bottom">
                                <span>我的路线我做主</span>
                            </div>
                        </div> 
                   <div class="box" @click="routerTo('机票&行程单验真','4')">
                            <div class="top">
                                <img src="./airport_service_safe.png"/>
                            </div>
                            <div class="center">
                                <span>机票验真</span>
                            </div>
                            <div class="bottom">
                                <span>真真假假可验证</span>
                            </div>
                        </div> 
                </li>
            </ul>
            <div class="navigation">
                <div class="head_title">
                    <img src="./airport_service_smallmap.png">
                    <span>快速导航</span>
                </div>
                <ul class="ul1">
                    <li class="li1" @click="routerTo('广州地铁','5')" >
                        <img src="./airport_service_s.png">
                        <span>广州地铁</span>
                    </li>
                    <li class="li1" @click="routerTo('城际大巴','6')">
                        <span>城际大巴</span>
                    </li>
                </ul>
                <ul class="ul1">
                    <li class="li1" @click="routerTo('城市候机楼','7')">
                        <span>城市候机楼</span>
                    </li>
                    <li class="li1" @click="alertMsg()">
                        <span>市区大巴</span>
                    </li>
                </ul>
                <ul class="ul1">
                    <li class="li1"  @click="routerTo('出租车','8')">
                        <span>出租车</span>
                    </li>
                    <li class="li1 error"></li>
                </ul>
            </div>
            <div class="navigation">
                <div class="head_title">
                    <img src="./airport_service_bus.png">
                    <span>机场大巴时刻表</span>
                </div>
                <ul class="myul1">
                    <li class="myli1">
                        <span class="span_left">白云机场 —民航售票处</span>
                        <span class="span_center">5:20-航班结束</span>
                        <span class="span_right">20分钟一班</span>
                    </li>
                    <li class="myli1">
                        <span class="span_left">白云机场 —广州中心皇冠假日</span>
                        <span class="span_center">8:00-航班结束</span>
                        <span class="span_right">40分钟一班</span>
                    </li>
                    <li class="myli1">
                        <span class="span_left">白云机场 —华师粤海酒店</span>
                        <span class="span_center">6:50-航班结束</span>
                        <span class="span_right">20分钟一班</span>
                    </li>
                    <li class="myli1">
                        <span class="span_left">白云机场 —芳村客运站</span>
                        <span class="span_center">6:45-1:00</span>
                        <span class="span_right">45分钟一班</span>
                    </li>
                    <li class="myli1">
                        <span class="span_left">白云机场 —龙山候机楼</span>
                        <span class="span_center">5:00-20:00</span>
                        <span class="span_right">60分钟一班</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { Swipe, SwipeItem } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    goBack(){
        this.$router.go(-1);
    },
    routerTo(name, type) {
      this.$router.push({
        name: `commonPage`,
        query: {
          name: name,
          type: type
        }
      });
    },
    alertMsg() {
      Toast({
        duration: 800,
        message: "该板块尚未开放，敬请期待"
      });
    }
  },
  components: {
    HeaderTitle,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';

.airport {
    y-view();

    .server_body {
        flex: 1;
        overflow: hidden;
        overflow-y: scroll;

        .myul {
            margin-top: 0.5em;

            .myli {
                x-middle();

                .box {
                    flex: 1;
                    border: 1px solid #ddd;
                    margin: -0.2em 0.04em;
                    padding: 0.4em 0;
                    background-color: #fff;

                    .top {
                        flex: 1;
                        text-align: center;

                        img {
                            width: 2.5em;
                            height: 2.5em;
                            padding-top: 1em;
                            position: relative;
                            left: 35%;
                        }
                    }

                    .center {
                        flex: 1;
                        text-align: center;
                        font-size: 0.9em;
                        color: #333333;
                        padding-top: 1em;
                    }

                    .bottom {
                        flex: 1;
                        text-align: center;
                        font-size: 0.75em;
                        color: #999;
                        margin-top: 0.3em;
                        padding: 0.3em 0 1.4em;
                    }
                }
            }
        }

        .navigation {
            margin: 0.7em 0;
            background-color: #fff;
            padding: 0 0.8em 0.6em 0.8em;

            .head_title {
                padding: 1em 0;

                img {
                    display: inline;
                    width: 1.25em;
                    height: 1.25em;
                    vertical-align: middle;
                }

                span {
                    margin-left: 0.3em;
                    font-size: 1em;
                    color: #4a4a4a;
                    font-weight: 600;
                    vertical-align: middle;
                }
            }

            .ul1 {
                x-middle();
                margin: 0.3em;

                .li1 {
                    font-size: 0.875em;
                    margin-top: 0.3em;
                    padding: 1em 0;
                    text-align: center;
                    width: 50%;
                    border: 1px solid #bbb;
                    margin: 0 0.3em;
                    border-radius: 0.3em;

                    img {
                        display: inline;
                        width: 1em;
                        height: 1em;
                        vertical-align: middle;
                    }

                    span {
                        vertical-align: middle;
                    }
                }

                .error {
                    border: none;
                }
            }

            .myul1 {
                font-size: 0.8em;

                .myli1 {
                    x-middle();
                    padding: 0.7em 0;

                    .span_left {
                        flex: 2;
                    }

                    .span_center {
                        flex: 1;
                    }

                    .span_right {
                        flex: 1;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>


