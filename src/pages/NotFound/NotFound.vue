<template>
  <div class="not-found">
    <div class="wrapper">
      <Icon name="warn" size="1.6rem" color="#e1e1e1" />
      <p class="content">404页面未找到~</p>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  components: {
    Icon
  }
};
</script>

<style lang="stylus" scoped>
.not-found {
  position:relative;
  height :100%;

  .wrapper{
    position :absolute;
    left:0;
    right:0;
    top:20%;
    text-align: center;
  }
}
</style>


