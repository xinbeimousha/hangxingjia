<template>
    <div class="airportCustomer">
        <HeaderTitle title="在线客服" :btnLeft="true" @back="goBack"/>
        <div class="phoneList">
            <ul class="myul border-1px">
                <li class="myli">
                    <a href="tel:020-36066999">
                        <p>白云客服电话中心</p>
                        <p>020-36066999</p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:020-86132777">
                        <p>商旅公司机票服务</p>
                        <p>
                            <a href="tel:020-86132777">020-86132777(国内)</a>
                            <a href="tel:020-86130099">020-86130099(国际)</a>
                        </p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:020-86122102">
                        <p>空港快线服务</p>
                        <p>020-86122102</p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:400-830-0000">
                        <p>贵宾服务尊线（不受理普客）</p>
                        <p>400-830-0000</p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:020-86128927">
                        <p>临时身份证明客服（05：30-23：00）</p>
                        <p>020-86128927</p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:020-36066859">
                        <p>行李寄存电话</p>
                        <p>020-36066859</p>
                    </a>
                </li>
                <li class="myli">
                    <a href="tel:020-36066763">
                        <p>机场行李查询（国内）</p>
                        <p>020-36066763</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle
  },
  methods:{
      goBack(){
        this.$router.go(-1);
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.airportCustomer {
    y-view();

    .phoneList {
        .myul {
            background-color: $color-white;

            .myli {
                padding: 0.8em 1em;
                border-bottom: border-1px(#ddd);

                a {
                    text-decoration: none;
                    color: $color-text-active;

                    p:nth-child(1) {
                        color: black;
                    }

                    p:nth-child(2) {
                        color: $color-text-active;
                        margin-top: 0.3em;
                    }
                }
            }
        }
    }
}
</style>
