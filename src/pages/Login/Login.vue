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
            <div class="button-login" @click="handleLogin()">
                登录
            </div>
        </div>
        <div class="footer">
            <p>©2018 广东机场白云信息科技有限公司</p>
            <p>广东白云国际机场商旅服务有限公司</p>
        </div>
        <div class="loading-wrapper" v-if="loading">
            <div class="loading">
                <van-loading color="white" />
            </div>
        </div>
    </div>
</template>

<script>
import { Toast, Loading } from "vant";
import { login } from "api/login.js";
import { setStorage,getStorage,removeStorage } from 'common/js/storage.js'

export default {
  created() {
      console.log(123)
  },
  data() {
    return {
      username: "",
      password: "",
      savedUser: false,
      loading: false
    };
  },
  methods: {
    handleLogin() {
      const loginFlag = this._handleLoginInfo();
      if (!loginFlag) {
        return;
      } else {
        this._login();
      }
    },
    // 修复安卓会遮住键盘的问题
    fixAndroid(e) {
      setTimeout(() => {
        e.target.scrollIntoViewIfNeeded();
      }, 300);
    },
    // 自动填写用户名和密码
    // 处理登录后的数据
    _login() {
      const vm = this;

      this.loading = true;
      login(vm.username, vm.password).then(res => {
        this.loading = false;
        if (res.success) {
          this._isSaveUserInfo();
          this.$router.push("/main");
        }
      });
    },
    // 判断用户是否了输入账号和密码
    _handleLoginInfo() {
      if (!this.username || !this.password) {
        Toast("用户名和密码不正确");
        return false;
      }
      return true;
    },
    // 判断用户是否保存了用户名
    _isSaveUserInfo() {
      if (this.savedUser) {
        setStorage('username', this.username);
        setStorage('password', this.password);
      } else {
        removeStorage('username','password');
      }
    }
  },
  components: {
    VanLoading: Loading
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.login {
    y-view();
    overflow: hidden;
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

        .button-login {
            padding: 0.25rem;
            border-radius: 5px;
            margin-top: 0.2rem;
            font-size: 0.32rem;
            color: $color-white;
            text-align: center;
            background-color: $color-text-active;
        }
    }

    .footer {
        margin-bottom: 0.1rem;
        color: $color-white;
        text-align: center;
    }

    .loading-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;

        .loading {
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 0.5rem;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            transform: translate(-50%, -50%);
        }
    }  
}
</style>


