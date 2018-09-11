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
        oIframe.src ="http://maps.rtmap.com/guangzhouwebmap/index.html?key=QCM3oiDv0g&buildid=863200010050100001&floor=f3&labelstyle=circle-point&openid=oikd5juSX08G4RZ0HCPjuCfDLHAM";
        break;
      default:
        break;
    }
    const deviceWidth = document.body.clientWidth ;
    const deviceHeight = document.body.clientHeight - document.getElementsByClassName("header-title").height;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight + "px";
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
    .pageconent {
        flex: 1;
    }
}
</style>
