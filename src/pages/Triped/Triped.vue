<template>
<div class="trip-plan">
    <div v-for="(item,index) in item" :key="index">
        <TripContent v-bind:item="item" v-bind:isdetail="isdetail" />
    </div>
</div>


</template>

<script>
import TripContent from "components/TripContent/TripContent.vue";
import { getTravelDetails } from "api/getTravelDetails";
export default {
  created() {
    this._getdata();
  },
  data() {
    return {
      item: [],
      isdetail: false
    };
  },
  methods: {
    _getdata() {
      var page = {
        state: 2,
        page: 1,
        pageSize: 10
      };
      getTravelDetails(page).then(res => {
        if (res.success) {
          this.item = res.obj;
          console.log(this.item);
        }
      });
    }
  },
  components: {
    TripContent
  }
};
</script>

<style lang="stylus" scoped>
.trip-plan{
  height 100%;
  overflow hidden;
  overflow-y: scroll;
}
</style>


