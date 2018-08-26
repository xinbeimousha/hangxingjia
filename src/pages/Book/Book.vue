<template>
     <div class="book">
        <HeaderTitle title="我的预订"/>
        <div class="book-content">
            <div class="banner">
                <img src="./book_index_banner.png" alt="">
            </div>
            <div class="book-select">
                <div class="item plane">
                    <div class="img">
                        <img src="./book_index_plane.png" alt="">
                    </div>
                    <span>机票预订</span>
                </div>
                <div class="item hotel">
                    <div class="img">
                        <img src="./book_index_hotel.png" alt="">
                    </div>
                    <span>酒店预订</span>
                </div>
                <div class="item train">
                    <div class="img">
                        <img src="./book_index_train.png" alt="">
                    </div>
                    <span>火车预订</span>
                </div>
                <div class="item car">
                    <div class="img">
                        <img src="./book_index_car.png" alt="">
                    </div>
                    <span>专车服务</span>
                </div>
                <div class="item airport">
                    <div class="img">
                        <img src="./book_index_vip.png" alt="">
                    </div>
                    <span>机场服务</span>
                </div>
                <div class="order">
                   <div class="logo">
                       <img src="./book_index_order.png" alt="">
                   </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import HeaderTitle from "components/HeaderTitle/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/style/variable.styl';
@import '~common/style/mixin.styl';

.book {
    flex: 1;
    y-view();

    .book-content {
        flex: 1;
        y-view();

        .banner {
            img {
                width: 100%;
                height: 2.68rem;
            }
        }

        .book-select {
            y-view();
            position: relative;
            background-image: url('book_index_bg.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;

            .item {
                flex: 1;
                x-middle();

                .img {
                    width: 0.45rem;
                    height: 0.45rem;
                    padding: 0.23rem;
                    margin-right: 0.2rem;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    background-color: #fff;
                }

                &.plane {
                    transform: translateX(21.4%);
                }

                &.hotel {
                    transform: translateX(40.4%);
                }

                &.train {
                    transform: translateX(48%);
                }

                &.car {
                    transform: translateX(40.4%);
                }

                &.airport {
                    transform: translateX(21.4%);
                }
            }

            .order {
                position: absolute;
                width: 2rem;
                height: 2rem;
                border: 3px solid #D8E0EE;
                color: #fff;
                border-radius: 50%;
                left: -0.5rem;
                background-position: left;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 999;

                text-align: center;
                background: #89C0FA;

                background: linear-gradient(top, #89C0FA, #527CCF);
                overflow: hidden;

                .logo{
                    width:.8rem;

                    position:absolute;
                    left:50%;
                    top:50%;

                    transform:translate(-40%,-50%);
                    }
            }
        }
    }
}
</style>


