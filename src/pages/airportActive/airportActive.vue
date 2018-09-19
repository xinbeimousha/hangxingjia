<template>
    <div class="flight_search">
        <HeaderTitle title="航班查询" :btnLeft="true" @back="goback"/>
        <div class="swiper">
            <Tabs swipeable color="#5998FF" @change='change'>
                <Tab>
                    <div slot="title" class="imgbox">
                        <span class="myimg1"></span>
                        <span class="myspan">航班号</span>
                    </div>
                    <div class="swiper-content">
                        <div class="flightChoose">
                            <div class="top">
                                <span>航班号</span>
                                <input type="text" id="flightNo" placeholder="请输入航班号">
                            </div>
                            <div class="circle">
                                <div class="yuan1"></div>
                                <div class="yuan2"></div>
                                <ul class="circle-dash">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="bottom" @click="showPicker">
                                <div class="datatxt">日期</div>
                                <div class="dateSelect">
                                    <div class="ymd">
                                        <span class="time" v-html="this.searchDate.ymd"></span>
                                        <span class="fa fa-caret-down ico"></span>
                                    </div>
                                    <div class="hsbox">
                                        <span v-html="this.searchDate.hs"></span>
                                        <span class="shu">|</span>
                                        <span v-html="this.searchDate.week"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="submit" @click="queryData">查询航班</div>
                    </div>
                </Tab>
                <Tab>
                    <div slot="title" class="imgbox">
                        <span class="myimg2"></span>
                        <span class="myspan">城市名</span>
                    </div>
                    <div class="swiper-content">
                        <div class="cityChoose">
                            <div class="change">
                                <div class="cityfrom">
                                    <div>
                                        <span class="startCity">广州</span>
                                        <span class="fa fa-caret-down icon"></span>
                                    </div>
                                    <div class="citytxt">始发地</div>
                                </div>
                                <div class="imgbox">
                                    <img src="./trip_apply_one_way.png">
                                </div>
                                <div class="cityto">
                                    <div>
                                        <span class="endCity">北京</span>
                                        <span class="fa fa-caret-down icon"></span>
                                    </div>
                                    <div class="citytxt">目的地</div>
                                </div>
                            </div>
                            <div class="circle">
                                <div class="yuan1"></div>
                                <div class="yuan2"></div>
                                <ul class="circle-dash">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="bottom" @click="showPicker">
                                <div class="datatxt">日期</div>
                                <div class="dateSelect">
                                    <div class="ymd">
                                        <span class="time" v-html="this.searchDate.ymd"></span>
                                        <span class="fa fa-caret-down ico"></span>
                                    </div>
                                    <div class="hsbox">
                                        <span v-html="this.searchDate.hs"></span>
                                        <span class="shu">|</span>
                                        <span v-html="this.searchDate.week"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="submit" @click="queryData">查询航班</div>
                    </div>
                </Tab>
            </Tabs>
            
        </div>
        <Popup v-model="show" position="bottom" :overlay="true">
            <DatetimePicker v-model="currentDate" type="datetime"  :min-date="minDate" @confirm="confirm" @cancel="cancel" />
        </Popup>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { Tab, Tabs, DatetimePicker, Popup,Toast  } from "vant";
import { getDate2, getTime, getWeek } from "common/js/day.js";
import { gobackMixin } from "common/js/mixins.js";
export default {
  mixins: [gobackMixin],
  data() {
    return {
      show: false,
      searchDate: {
        ymd: "" || getDate2(new Date()),
        hs: "" || getTime(new Date()),
        week: "" || getWeek(new Date())
      },
      typeIndex: 1,
      minDate: new Date(),
      currentDate: new Date()
    };
  },
  methods: {
    change(index) {
      this.typeIndex = index + 1;
      console.log(this.typeIndex);
    },
    confirm(val) {
      this.searchDate.ymd = getDate2(val);
      this.searchDate.hs = getTime(val);
      this.searchDate.week = getWeek(val);
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    showPicker() {
      this.show = true;
    },
    queryData() {
      let searchData;
      if (this.typeIndex == 1) {
        searchData = {
          flightNo: document.getElementById("flightNo").value,
          flightDate: this.searchDate.ymd,
          searchType: this.typeIndex
        };
        if(!searchData.flightNo){
            Toast('请填写航班号');
            return
        }
        this.$router.push({
          path: "/airportSearchResult",
          query: { searchData: searchData }
        });
      } else {
        searchData = {
          flightDate: this.searchDate.ymd,
          searchType: this.typeIndex,
          depCode: "CAN",
          arrCode: "PEK"
        };
        this.$router.push({
          path: "/airportSearchResult",
          query: { searchData: searchData }
        });
      }
    }
  },
  components: {
    HeaderTitle,
    Tab,
    Tabs,
    DatetimePicker,
    Popup
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.flight_search {
    y-view();

    .swiper {
        .van-tabs {
            .van-tabs__wrap {
                .van-tab {
                    .imgbox {
                        color: #9B9B9B;

                        .myimg1 {
                            display: inline-block;
                            width: 1.25em;
                            height: 1.25em;
                            background-image: url('./airport_active_flight2.png');
                            vertical-align: middle;
                            background-size: cover;
                            background-repeat: no-repeat;
                        }

                        .myimg2 {
                            display: inline-block;
                            width: 1.25em;
                            height: 1.25em;
                            background-image: url('./airport_active_city2.png');
                            vertical-align: middle;
                            background-size: cover;
                            background-repeat: no-repeat;
                        }

                        .myspan {
                            display: inline;
                            vertical-align: middle;
                        }
                    }
                }

                &.van-tab, .van-tab--active {
                    .imgbox {
                        color: $color-text-active;

                        .myimg1 {
                            display: inline-block;
                            width: 1.25em;
                            height: 1.25em;
                            background-image: url('./airport_active_flight1.png');
                            vertical-align: middle;
                            background-size: cover;
                            background-repeat: no-repeat;
                        }

                        .myimg2 {
                            display: inline-block;
                            width: 1.25em;
                            height: 1.25em;
                            background-image: url('./airport_active_city1.png');
                            vertical-align: middle;
                            background-size: cover;
                            background-repeat: no-repeat;
                        }

                        .myspan {
                            display: inline;
                            vertical-align: middle;
                        }
                    }
                }
            }

            .van-tabs__content {
                .swiper-content {
                    background-color: $color-white;
                    margin: 0 1em;
                    margin-top: 0.5em;
                    border-radius: 0.5em;
                    padding-bottom: 5.5em;

                    .flightChoose, .cityChoose {
                        .change {
                            margin: 0 1.3em;
                            padding-top: 2.4em;
                            padding-bottom: 0.5em;
                            x-middle();

                            .cityfrom {
                                flex: 1;

                                .citytxt {
                                    color: #9b9b9b;
                                    margin-top: 0.3em;
                                }

                                .startCity {
                                    font-size: 1.5em;
                                    font-weight: 600;
                                    color: black;
                                }
                            }

                            .imgbox {
                                flex: 2;
                                text-align: center;

                                img {
                                    width: 2.5em;
                                    height: 2.5em;
                                    display: inline;
                                }
                            }

                            .cityto {
                                flex: 1;
                                text-align: right;

                                .citytxt {
                                    color: #9b9b9b;
                                    margin-top: 0.3em;
                                }

                                .endCity {
                                    font-size: 1.5em;
                                    font-weight: 600;
                                    color: black;
                                }
                            }
                        }

                        .top {
                            border-bottom: 2px solid $color-solid;
                            margin: 0 1.3em;
                            padding-top: 2.4em;
                            padding-bottom: 0.5em;
                            x-middle();

                            span {
                                font-size: 1.2em;
                            }

                            input {
                                text-align: center;
                                font-size: 1.2em;
                                flex: 1;
                                color: black;
                                font-weight: 500;
                            }
                        }

                        .circle {
                            position: relative;
                            height: 3em;
                            background-color: #fff;
                            overflow: hidden;

                            .yuan1 {
                                position: absolute;
                                width: 1.5em;
                                height: 1.5em;
                                border-radius: 50%;
                                background-color: #F6F7F9;
                                left: -0.7em;
                                top: 1.2em;
                            }

                            .yuan2 {
                                position: absolute;
                                width: 1.5em;
                                height: 1.5em;
                                border-radius: 50%;
                                background-color: #F6F7F9;
                                right: -0.7em;
                                top: 1.2em;
                                z-index: 2;
                            }

                            .circle-dash {
                                x-middle();
                                padding: 0 0.5em;
                                position: absolute;
                                top: 1.7em;
                                margin-left: 0.3em;

                                li {
                                    width: 0.5em;
                                    height: 0.5em;
                                    background-color: $color-solid;
                                    border-radius: 50%;
                                    margin: 0 0.1em;
                                }
                            }
                        }

                        .bottom {
                            x-middle();
                            margin: 0 1.3em;
                            padding-bottom: 1em;
                            padding-top: 0.8em;
                            border-bottom: 2px solid $color-solid;
                            margin-bottom: 5.5em;

                            .datatxt {
                                font-size: 1.2em;
                            }

                            .dateSelect {
                                flex: 1;
                                text-align: right;

                                .ymd {
                                    .time {
                                        font-size: 1.2em;
                                        color: black;
                                        font-weight: 600;
                                    }

                                    .ico {
                                        color: #119474;
                                    }
                                }

                                .hsbox {
                                    .shu {
                                        margin: 0 0.5em;
                                    }
                                }
                            }
                        }
                    }

                    .submit {
                        background-color: $color-bg-high;
                        font-size: 1.3em;
                        width: 95%;
                        margin: 0 auto;
                        border-radius: 0.5em;
                        padding: 0.3em 0;
                        color: #FFFFFF;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
