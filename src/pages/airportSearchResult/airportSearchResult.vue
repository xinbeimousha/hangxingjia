<template>
    <div class="airportSearchResult" >
        <HeaderTitle title="查询结果" :btnLeft="true"/>
        <div class="msgList">
            <div class="section" @click="queryDetail">
                <div class="top">
                    <div class="startdetail">
                        <span class="starttime">09:45</span>
                        <span class="startplace">白云机场</span>
                    </div>
                    <div class="hen">
                        <div class="yuan1"></div>
                        <div class="line"></div>
                        <div class="yuan2"></div>
                    </div>
                    <div class="enddetail">
                        <span class="endtime">23:40</span>
                        <span class="endplace">浦东机场T2</span>
                    </div>
                </div>
                <div class="bottom">
                    <!-- <img v-bind:src="item.signloc"/> -->
                    <img src="./CA.png"/>
                    <span >国航</span>
                    <span>cz3103</span>
                    <span class="shu">|</span>
                    <span>03-22</span>
                    <span>周三</span>
                    <span class="shu">|</span>
                    <span>98%准点率</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
  data() {
    return {
      searchData: "",
      testData: [{ name: 1 }, { sex: 1 }]
    };
  },
  created() {
    this.searchData = this.$route.params.searchData;
    console.log(this.searchData);
  },
  methods: {
    queryDetail() {
      alert(1);
      this.$router.push({
        name: "airportSearchDetail",
        params: { testData: this.testData }
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
