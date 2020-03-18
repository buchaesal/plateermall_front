<template>
    <div class="userinfo">
            <div class="user_box charge_box">
                <div class="user">
                    <p class="name charge">
                        <span>최단비님의 마이롯데 입니다.</span>
                    </p>
                </div>
            </div>
            <div class="point_box">
                <div class="item" id="lpointDivItem" style="display: block;">
                    <a href="https://campaign.ellotte.com/campaign-fo/mylottePoint/myLpoint?bypass">
                        <p class="name">L.POINT</p>
                    </a>
                    <p class="point">
                        <span id="lPoint"><em id="usablePoint">2,027</em>점</span>
                    </p>
                </div>

                <div class="item">
                    <a href="https://campaign.ellotte.com/campaign-fo/mylottePoint/myEllottePoint?bypass">
                        <p class="name">엘롯데포인트</p>
                    </a>
                    <p class="point"><em id="pointBlnc">0</em>점</p>
                </div>
                <div class="item">
                    <a href="https://cca.ellotte.com/cca-fo/keepMny/main?bypass">
                        <p class="name">보관금</p>
                    </a>
                    <p class="point"><em id="deposits">0</em>점</p>
                </div>
                <div class="item">
                    <a href="https://campaign.ellotte.com/campaign-fo/coupon/mylotte/historyCoupon?bypass">
                        <p class="name">쿠폰</p>
                    </a>
                    <p class="point"><em id="couponCnt">0</em>장</p>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped>
    .userinfo .user_box.charge_box {
        padding: 0;
    }
    .userinfo .user_box {
        float: left;
        width: 308px;
        height: 95px;
        background: #000;
    }
    .userinfo .user_box.charge_box .user {
        margin: 24px 24px 0 24px;
    }
    .userinfo .user_box .name {
        display: -webkit-box;
        overflow: hidden;
        height: 56px;
        padding-top: 8px;
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
        height: 89px;
        padding: 24px 0;
        text-align: center;
    }
    .userinfo .point_box .item>a:not(.btn_info) {
        display: inline-block;
        position: relative;
        z-index: 1;
    }
    .userinfo .point_box .icon {
        width: 40px;
        height: 40px;
        margin: 0 auto;
    }
</style>