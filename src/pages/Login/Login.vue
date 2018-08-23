<template>
    <div class="login">
        <div class="logo">
            <img src="./index_logo.png" alt="">
        </div>
        <div class="main">
            <div class="username">
                <div class="icon">
                    <img src="./index_name.png" alt="">
                </div>
                <input type="text" class="text" v-model="username">
                <div class="icon"></div>
            </div>
            <div class="password">
                <div class="icon">
                    <img src="./index_psw.png" alt="">
                </div>
                <input @click="fixAndroid($event)" type="password" class="psd" v-model="password">
                <div class="icon"></div>
            </div>
            <div class="save-psd">
                <label for="saved">
                    <input id="saved" type="checkbox" v-model="savedUser" class="saved">
                    <span class="content">记住密码</span>
                </label>
            </div>
            <div class="button-login" @click="login()">
                登录
            </div>
        </div>
        <div class="footer">
            <p>©2018 广东机场白云信息科技有限公司</p>
            <p>广东白云国际机场商旅服务有限公司</p>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import {login} from '../../api/login.js';

export default {
  data() {
    return {
      username: "",
      password: "",
      savedUser: false
    };
  },
  methods:{
      login(){
          Toast('我是提示文案，建议不超过十五字~');
          const vm = this;

          login(vm.username,vm.password);
      },
      // 修复安卓会遮住键盘的问题
      fixAndroid(e){
          setTimeout(() => {
              e.target.scrollIntoViewIfNeeded();
          },300)
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/style/variable.styl';
@import '../../common/style/mixin.styl';

.login {
    y-view();
    overflow :hidden;
    background: url('./index_footer.png') no-repeat bottom;
    background-color: $color-bg-high;
    background-size: 100%;

    .logo {
        width: 1.28rem;
        padding: 1rem 0;
        margin: 0 auto;
    }

    .main {
        flex: 1;
        padding: 0 0.2rem;

        input[type='text'], input[type='password'] {
            height: 0.5rem;
            text-align: center;
        }

        .username, .password {
            x-middle();
            border-radius: 5px;
            margin-bottom: 0.2rem;
            background-color: $color-white;

            .text {
                flex: 1;
            }

            .psd {
                flex: 1;
            }

            .icon {
                width: 0.5rem;
                height: 0.5rem;
                padding: 0.2rem;
            }
        }

        .save-psd {
            .saved {
                vertical-align: middle;
                padding: 0.1rem;
            }

            .content {
                font-size: 16px;
                color: $color-white;
                vertical-align: middle;
            }
        }
    }

    .footer {
        margin-bottom: 0.1rem;
        color: $color-white;
        text-align: center;
    }

    .button-login{
        padding:.25rem;
        border-radius: 5px;
        margin-top:.2rem;

        font-size:.32rem;
        color:$color-white;
        text-align :center;
        background-color :$color-text-active;
        }
}
</style>


