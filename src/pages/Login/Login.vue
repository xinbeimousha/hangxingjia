<template>
    <div class="login">
        <div class="logo">
            <img src="./index_logo.png" alt="">
        </div>
        <div class="main">
            <div class="username">
                <div class="icon"></div>
                <input type="text">
                <div class="icon"></div>
            </div>
            <div class="password">
                <div class="icon"></div>
                <input type="password">
                <div class="icon"></div>
            </div>
            <div class="save-psd">
                <label for="">
                    <input type="checkbox">
                    记住密码
                </label>
            </div>
            <div class></div>
        </div>
        <div class="footer">
            <p>©2018 广东机场白云信息科技有限公司</p>
                <p>广东白云国际机场商旅服务有限公司</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
  @import '../../common/style/variable.styl';
  @import '../../common/style/mixin.styl';
  .login{
      y-view();

      background-color :$color-bg-high;
      }
</style>


