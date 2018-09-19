<template>
    <div class="airportSearchResult" >
        <HeaderTitle title="查询结果" :btnLeft="true" @back="goback"/>
        <div class="msgList">
            <div class="section" v-for="(item,index) in items" :key="index" @click="queryDetail(item)">
                <div class="top">
                    <div class="startdetail">
                        <span class="starttime">{{getTm(item.plandeptime)}}</span>
                        <span class="startplace">{{item.fromsite}}</span>
                    </div>
                    <div class="hen">
                        <div class="yuan1"></div>
                        <div class="line"></div>
                        <div class="yuan2"></div>
                    </div>
                    <div class="enddetail">
                        <span class="endtime">{{getTm(item.planarrtime)}}</span>
                        <span class="endplace">{{item.tosite}}</span>
                    </div>
                </div>
                <div class="bottom">
                    <img v-bind:src="item.signloc"/>
                    <span >{{item.comname}}</span>
                    <span>{{item.fltno}}</span>
                    <span class="shu">|</span>
                    <span>{{getDt(item.lastday)}}</span>
                    <span>{{getwk(item.lastweek)}}</span>
                    <span class="shu">|</span>
                    <!-- <span>98%准点率</span> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { getFligtDetail } from "api/getFligtDetail";
import { gobackMixin } from "common/js/mixins.js";
import { getTime, getDate3, getWeek } from "common/js/day.js";
export default {
  mixins: [gobackMixin],
  data() {
    return {
      searchData: "",
      items: []
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    getTm(time){
        return getTime(time);
    },
    getDt(time){
        return getDate3(time)
    },
    getwk(time){
        return getWeek(time)
    },
    queryData() {
      this.searchData = this.$route.query.searchData;
      let floatresult;
      if (this.searchData.searchType == 1) {
        floatresult = {
          flightNo: this.searchData.flightNo,
          flightDate: this.searchData.flightDate,
          searchType: this.searchData.searchType
        };
      } else {
        floatresult = {
          flightDate: this.searchData.flightDate,
          searchType: this.searchData.searchType,
          depCode: this.searchData.depCode,
          arrCode: this.searchData.arrCode
        };
      }
      getFligtDetail(floatresult).then(res => {
        this.items = res.obj;
      });
    },
    queryDetail(item) {
      this.$router.push({
        path: "/airportSearchDetail",
        query: { item: item }
      });
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

.airportSearchResult {
    y-view();

    .msgList {
        flex 1;
        overflow hidden;
        overflow-y scroll
        .section {
            background-color: $color-white;
            font-size: 1em;
            padding: 1em 1em;
            border-bottom: 2px solid $color-solid;

            .top {
                x-middle();

                .startdetail {
                    y-view();

                    .starttime {
                        font-size: 1.5em;
                        color: #333333;
                    }

                    .startplace {
                        font-size: 1em;
                        color: #999999;
                        margin-top: 0.5em;
                    }
                }

                .hen {
                    x-middle();
                    margin-left: 0.8em;
                    margin-right: 0.8em;
                    padding-bottom: 2em;

                    .yuan1 {
                        width: 0.3em;
                        height: 0.3em;
                        border-radius: 50%;
                        background-color: #d8d8d8;
                        border: 1px solid #979797;
                    }

                    .yuan2 {
                        width: 0.3em;
                        height: 0.3em;
                        border-radius: 50%;
                        background-color: #d8d8d8;
                        border: 1px solid #979797;
                    }

                    .line {
                        width: 5em;
                        height: 0.12em;
                        background-color: #979797;
                    }
                }

                .enddetail {
                    y-view();

                    .endtime {
                        font-size: 1.5em;
                        color: #333333;
                    }

                    .endplace {
                        font-size: 1em;
                        color: #999999;
                        margin-top: 0.5em;
                    }
                }
            }

            .bottom {
                font-size: 1em;
                color: #999999;
                margin-top: 0.5em;

                span {
                    vertical-align: middle;
                    margin: 0 0.4em;
                }

                .shu {
                    margin: 0 0;
                }

                img {
                    width: 1.2em;
                    height: 1.2em;
                    display: inline;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
