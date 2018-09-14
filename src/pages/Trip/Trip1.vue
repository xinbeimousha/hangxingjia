<template>
  <div class="trip">
    <HeaderTitle title="我的行程"/>
    <div class="tripcontent">
      <div class="banner_title">
        <div class="title border-1px" @click="queryTripingData">
          <div class="content">
            <span class="icon" v-bind:class="this.triping.showStyle ? 'tripingon' : 'triping'"></span>
            <div class="test">进行中</div>
          </div>
        </div>
        <div class="title border-1px" @click="queryTripPlanData">
          <div class="content">
            <span class="icon "  v-bind:class="this.tripPlan.showStyle ? 'tripPlanon' : 'tripPlan'"></span>
            <div class="test">计划中</div>
          </div>
        </div>
        <div class="title border-1px" @click="queryTripedData">
          <div class="content">
            <span class="icon "  v-bind:class="this.triped.showStyle ? 'tripedon' : 'triped'"></span>
            <div class="test">已完成</div>
          </div>
        </div>
      </div>
      <div class="detailMsg">
        <div class="trip-plan" v-for="(item,index) in item" :key="index">
          <TripContent v-bind:item="item" v-bind:isdetail="isdetail"/>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import TripContent from "components/TripContent/TripContent.vue";
import { getTravelDetails } from "api/getTravelDetails";
export default {
  created() {
    this._getdata();
  },
  data() {
    return {
      triping: {
        showStyle: true
      },
      tripPlan: {
        showStyle: false
      },
      triped: {
        showStyle: false
      },
      item: [],
      isdetail: true
    };
  },
  methods: {
    _getdata() {
      let page = {
        state: 0,
        page: 1,
        pageSize: 10
      };
      getTravelDetails(page).then(res => {
        if (res.success) {
          this.item = res.obj;
          console.log(this.item);
        }
      });
    },
    // query(state,page){
    //     getTravelDetails(page).then(res => {
    //     if (res.success) {
    //       this.item = res.obj;
    //       console.log(this.item);
    //     }
    //   });
    // },
    queryTripingData() {
      let page = {
        state: 0,
        page: 1,
        pageSize: 10
      };
      getTravelDetails(page).then(res => {
        if (res.success) {
          this.item = res.obj;
          this.triping.showStyle = true;
          this.tripPlan.showStyle = false;
          this.triped.showStyle = false;
        }
      });
    },
    queryTripPlanData() {
      let page = {
        state: 1,
        page: 1,
        pageSize: 10
      };
      getTravelDetails(page).then(res => {
        if (res.success) {
          this.item = res.obj;
          this.triping.showStyle = false;
          this.tripPlan.showStyle = true;
          this.triped.showStyle = false;
        }
      });
    },
    queryTripedData() {
      let page = {
        state: 2,
        page: 1,
        pageSize: 10
      };
      getTravelDetails(page).then(res => {
        if (res.success) {
          this.item = res.obj;
          this.triping.showStyle = false;
          this.tripPlan.showStyle = false;
          this.triped.showStyle = true;
        }
      });
    }
  },
  components: {
    HeaderTitle,
    TripContent,
    getTravelDetails
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';
@import '~common/style/base.styl';

.trip {
    flex: 1;
    y-view();

    .tripcontent {
        flex: 1;
        y-view();

        .banner_title {
            x-middle();

            .title {
                flex: 1;
                text-align: center;
                color: $color-text;

                .content {
                    x-middle();
                    line-height: 1;
                    margin: 0.8em 20%;

                    .icon {
                        display: inline-block;
                        width: 0.5rem;
                        height: 0.5rem;
                        margin-right: 0.15em;
                        background-size: cover;
                        background-repeat: no-repeat;

                        &.tripingon {
                            background-image: url('./travel_index_tab1_ed.png');
                        }

                        &.triping {
                            background-image: url('./travel_index_tab1_ing.png');
                        }

                        &.tripPlanon {
                            background-image: url('./travel_index_tab2_ed.png');
                        }

                        &.tripPlan {
                            background-image: url('./travel_index_tab2_ing.png');
                        }

                        &.tripedon {
                            background-image: url('./travel_index_tab3_ed.png');
                        }

                        &.triped {
                            background-image: url('./travel_index_tab3_ing.png');
                        }
                    }
                }

                &.router-link-active {
                    color: $color-text-active;
                    border-1px($color-text-active);

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

        .detailMsg {
            flex: 1;
            overflow: hidden;
            overflow-y: scroll;
        }
    }
}
</style>


