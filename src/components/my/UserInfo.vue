<template>
    <div class="userinfo">
        <div class="user_box charge_box">
            <div class="user">
                <p class="name charge">
                    <span>{{userInfo.name}} 님의 마이페이지 입니다.</span>
                </p>
            </div>
        </div>
        <div class="point_box">
<!--            <div class="item" id="lpointDivItem" style="display: block;">-->
<!--                <p class="icon">-->
<!--                    <sui-icon size="big" name="ruble sign"></sui-icon>-->
<!--                </p>-->
<!--                <a href="#">-->
<!--                    <p class="name">P.POINT</p>-->
<!--                </a>-->
<!--                <p class="point">-->
<!--                    <span id="lPoint"><em id="usablePoint">{{user.pPoint.toLocaleString()}}</em>점</span>-->
<!--                </p>-->
<!--            </div>-->

            <div class="item">
                <p class="icon">
                    <sui-icon size="big" name="chess queen"></sui-icon>
                </p>
                <a href="#">
                    <p class="name">포인트</p>
                </a>
                <p class="point"><em id="pointBlnc">{{userInfo.point ? point.toLocaleString() : 0}}</em>점</p>
            </div>
<!--            <div class="item">-->
<!--                <p class="icon">-->
<!--                    <sui-icon size="big" name="money bill alternate outline"></sui-icon>-->
<!--                </p>-->
<!--                <a href="#">-->
<!--                    <p class="name">보관금</p>-->
<!--                </a>-->
<!--                <p class="point"><em id="deposits">{{user.keepMoney.toLocaleString()}}</em>점</p>-->
<!--            </div>-->
            <div class="item">
                <p class="icon">
                    <sui-icon size="big" name="copyright outline"></sui-icon>
                </p>
                <a href="#">
                    <p class="name">쿠폰</p>
                </a>
                <p class="point"><em id="couponCnt">{{userInfo.couponList ? userInfo.couponList.length : 0}}</em>장</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCurrentUserInfo} from "../../api/UserApi";

    export default {
        name: "UserInfo",
        data() {
            return {
                userInfo: '',
            }
        },
        async created() {
            this.userInfo = await getCurrentUserInfo();
        }
    }
</script>

<style scoped>
    .userinfo .user_box.charge_box {
        padding: 0;
    }

    .userinfo .user_box {
        float: left;
        width: 308px;
        height: 128px;
        background: #000;
    }

    .userinfo .user_box.charge_box .user {
        margin: 24px 24px 0 24px;
    }

    .userinfo .user_box .name {
        display: -webkit-box;
        overflow: hidden;
        height: 56px;
        padding-top: 22px;
        font-size: 14px;
        color: #fff;
        text-overflow: ellipsis;
        white-space: normal;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 20px;
    }

    .userinfo .user_box .name.charge span {
        display: block;
        font-weight: 300;
        text-align: center;
    }

    .userinfo .point_box {
        float: left;
        width: 892px;
        border: 3px solid #000;
        border-left: 3px;
        margin-bottom: 50px;
    }

    .userinfo .point_box .item {
        float: left;
        position: relative;
        width: 25%;
        height: 122px;
        padding: 24px 0;
        text-align: center;
    }

    .userinfo .point_box .item > a:not(.btn_info) {
        display: inline-block;
        position: relative;
        z-index: 1;
    }

    .userinfo .point_box .icon {
        width: 40px;
        height: 40px;
        margin: 0 auto;
    }

    a {
        color: #666666;
    }
</style>