<template>
<div class="trip-plan">
    <div>
        <TripContent v-bind:item="item" head="呵呵" startAddress="河北" startTime="2018-01-01" endAddress="广州" endTime="2091-29-12" :isdetail='true' :src='1' />
    </div>
</div>


</template>

<script>
import TripContent from "components/TripContent/TripContent.vue";
export default {
  data(){
    return {
        item:[],
    };
  },
  methods:{

  },
  components: {
    TripContent
  }
};
</script>

<style lang="stylus" scoped>
</style>


