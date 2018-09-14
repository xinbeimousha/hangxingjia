<template>
    <div class="common">
        <HeaderTitle :title="name" :btnLeft="true"/>
        <div class="pageconent">
            <!-- <router-link  to="http://baiyun.dragonpass.com.cn/gbiamu.html">11</router-link> -->
            <!-- <a href="http://baiyun.dragonpass.com.cn/gbiamu.html" >22</a> -->
            <!-- <router-view></router-view> -->
            <iframe id="show-iframe" src="" frameborder="0"></iframe>
        </div>
    </div>
</template>
<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
  data() {
    return {
      name: "",
      type: " "
    };
  },
  created() {
    this.getRouterData();
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe");
    switch (this.type) {
      case 1:
        oIframe.src = "http://baiyun.dragonpass.com.cn/gbiamu.html";
        break;
      case 2:
        oIframe.src =
          "http://maps.rtmap.com/guangzhouwebmap/index.html?key=QCM3oiDv0g&buildid=863200010050100001&floor=f3&labelstyle=circle-point&openid=oikd5juSX08G4RZ0HCPjuCfDLHAM";
        break;
      case 3:
        oIframe.src =
          "http://swzl.baiyunport.com.cn/jeezz-consumer/webpage/thelost/index.html";
        break;
      case 4:
        oIframe.src = "http://www.travelsky.com/tsky/mobile/validate";
        break;
      case 5:
        oIframe.src =
          "https://mobile.baiyunairport.com.cn/?code=001KOddx17OpSa0oFXdx1gxUcx1KOddg&state=CAN#/underground";
        break;
      case 6:
        oIframe.src =
          "https://mobile.baiyunairport.com.cn/?code=001KOddx17OpSa0oFXdx1gxUcx1KOddg&state=CAN#/intercityBus";
        break;
      case 7:
        oIframe.src =
          "https://mobile.baiyunairport.com.cn/?code=001KOddx17OpSa0oFXdx1gxUcx1KOddg&state=CAN#/cityTerminal";
        break;
      case 8:
        oIframe.src =
          "https://mobile.baiyunairport.com.cn/?code=001KOddx17OpSa0oFXdx1gxUcx1KOddg&state=CAN#/taxi";
        break;
      default:
        break;
    }
  },
  methods: {
    getRouterData() {
      this.name = this.$route.query.name;
      this.type = Number(this.$route.query.type);
    }
  },
  components: {
    HeaderTitle
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/style/mixin.styl';
@import '~common/style/variable.styl';

.common {
  y-view();

  .pageconent {
    y-view();
    flex: 1;
    overflow: hidden;
    overflow-y :scroll

    #show-iframe {
      flex: 1;
    }
  }
}
</style>
