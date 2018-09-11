<template>
    <div class="airportCustomer">
        <HeaderTitle title="在线客服" :btnLeft="true"/>
        <div class="phoneList">
            123111
        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
    components:{
        HeaderTitle
    }
}
</script>
<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.airportCustomer {
    y-view();
}
</style>
