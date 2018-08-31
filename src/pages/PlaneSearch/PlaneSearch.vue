<template>
  <div class="plane-search">
    <HeaderTitle title="机票预订" :btnLeft="true" />
    <div class="search-container">
      <div class="trip-choosed" @click="showSelet">
        <span class="trip-title">{{ tripName }}</span>
        <Icon name="arrow" />
      </div>
      <div class="flight-detail">
        <Tabs class="reset">
          <Tab v-for="(item,index) in tripTypes" :title="item.name" :key="index">
            <ul class="flight-content">
              <li class="flight-content-item">
                <div class="flight-city border-1px">
                  <div class="depart">
                    广州
                  </div>
                  <div class="trip-type">
                    <div class="icon">
                      <img src="./return.png" alt="">
                    </div>
                  </div>
                  <div class="arrival">
                    上海
                  </div>
                </div>
                <div class="flight-date border-1px">
                  <div class="depart" @click="showDatePicker">
                    {{ departDate }}
                  </div>
                  <div class="return">
                    2018-09-01
                  </div>
                </div>
              </li>
            </ul>
          </Tab>
        </Tabs>
      </div>
      <div class="cabin-wrapper">
        <p class="title">要求舱位</p>
        <ul class="cabin-require">
          <li class="item">经济舱</li>
          <li class="item">高级经济舱</li>
          <li class="item">公务舱</li>
          <li class="item">头等舱</li>
        </ul>
      </div>
      <div class="btn-query">
        查询
      </div>
    </div>
    <Actionsheet v-model="showTrip" :actions="tripList" @select="onSelect" />
    <Popup 
      v-model="showDate" 
      position="bottom"
    >
      <DatetimePicker 
        v-model="currentDate" 
        type="date" 
        :min-date="new Date()" 
        @cancel="hideDatePicker" 
        @confirm="chooseDate" 
      />
    </Popup>
  </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
import { Actionsheet, Icon } from "vant";
import { Tab, Tabs, DatetimePicker, Popup } from "vant";
import { getBudgetSpaceType, getItineraryList } from "api/planeBook";
import { getDate1, getDate2, getTime } from "common/js/day.js";

export default {
  created() {
    this._getItineraryList();
  },

  data() {
    return {
      showTrip: false,
      showDate: false,
      tripList: [
        {
          name: "无"
        }
      ],
      tripName: "无",
      tripTypes: [
        {
          name: "单程",
          tripType: 0
        },
        {
          name: "往返",
          tripType: 1
        },
        {
          name: "多程",
          tripType: 2
        }
      ],
      currentDate: new Date(),
      departDate:'2018-08-31'
    };
  },

  methods: {
    onSelect(item) {
      this.showTrip = false;
      this.tripName = item.name;
    },

    showSelet() {
      this.showTrip = true;
    },

    showDatePicker() {
      this.currentDate = new Date(this.departDate);
      this.showDate = true;
    },

    hideDatePicker() {
      this.showDate = false;
    },

    chooseDate(val) {
      this.departDate = getDate2(val)
      this.showDate = false;
    },
    // 获取行程
    _getItineraryList() {
      getItineraryList().then(res => {
        if (res.success) {
          this._normalizeTripList(res.obj);
        }
      });
    },
    // 处理行程返回的数据
    _normalizeTripList(obj) {
      obj.forEach((item, i) => {
        this.tripList.push({
          name: i + "." + item.itinerWorkType,
          subname: this._handleTripDate(item.itinerBegin, item.itinerEnd)
        });
      });
    },
    // 处理行程的开始和截止日期
    _handleTripDate(begin, end) {
      return getDate1(begin) + " ~ " + getDate1(end);
    }
  },

  components: {
    HeaderTitle,
    Actionsheet,
    Icon,
    Tab,
    Tabs,
    Popup,
    DatetimePicker
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.plane-search {
  y-view();

  .search-container {
    .trip-choosed {
      x-middle();
      padding: 0 0.2rem;
      margin-bottom: 0.1rem;
      background-color: $color-white;
      line-height: 3;

      .trip-title {
        flex: 1;
        color: $color-text;
      }
    }

    .flight-detail {
      margin-bottom: 0.1rem;
      background-color: $color-white;

      .reset >>> .van-tabs__line {
        background-color: $color-text-active;
      }

      .reset >>> .van-tab--active {
        color: $color-text-active;
      }

      .flight-content {
        .flight-city {
          x-middle();
          padding: 0.2rem;
          border-1px(#e5e5e5);

          .trip-type {
            flex: 1;

            .icon {
              margin: 0 auto;
              width: 0.5rem;
            }
          }
        }

        .flight-date {
          x-middle();
          padding: 0.2rem;
          border-1px(#e5e5e5);

          .depart, .return {
            flex: 1;
          }

          .return {
            text-align: right;
          }
        }
      }
    }

    .cabin-wrapper {
      padding: 0.2rem 0.1rem 0.2rem 0.2rem;
      background-color: $color-white;

      .title {
        margin-bottom: 0.4rem;
      }

      .cabin-require {
        x-middle();
        text-align: center;

        .item {
          flex: 1;
          padding: 0.1rem 0;
          margin-right: 0.1rem;
          border: 1px solid #e1e1e1;
          border-radius: 5px;
        }
      }
    }

    .btn-query {
      padding: 0.2rem;
      border-radius: 5px;
      margin: 1rem 0.2rem;
      font-size: 0.32rem;
      color: $color-white;
      text-align: center;
      background-color: $color-bg-high;
    }
  }
}
</style>


