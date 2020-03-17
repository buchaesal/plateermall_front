<template>
    <div>
        <div class="userinfo">
            <div class="user_box charge_box">
                <div class="user">
                    <p class="photo">
                        <img src="https://image.ellotte.com/ellt.static.lotteeps.com/front/desktop/assets/img/dummy/@prd01.jpg" alt="본인 사진" style="visibility: hidden;">
                    </p>
                    <p class="name charge">
                        <span>최단비님의 마이롯데 입니다.</span>
                    </p>
                </div>
            </div>
            <div class="point_box">
                <div class="item" id="lpointDivItem" style="display: block;">
                    <a href="https://campaign.ellotte.com/campaign-fo/mylottePoint/myLpoint?bypass">
                        <p class="icon">
                            <i class="icon_lpoint"></i>
                        </p>
                        <p class="name">L.POINT</p>
                    </a>
                    <a href="#dialog_popup" class="btn_info" aria-haspopup="dialog" aria-controls="dialog_info" id="dialog_opener" aria-pressed="false"><i class="icon_info"></i><span class="a11y_sr-only">L.POINT 안내</span></a>
                    <p class="point">
                        <span id="lPoint"><em id="usablePoint">2,027</em>점</span>
                        <a href="#" class="btn_normal" id="getLPoint" style="display:none;">조회</a>
                    </p>
                </div>

                <div class="item">
                    <a href="https://campaign.ellotte.com/campaign-fo/mylottePoint/myEllottePoint?bypass">
                        <p class="icon">
                            <i class="icon_lottepoint"></i>
                        </p>
                        <p class="name">엘롯데포인트</p>
                    </a>
                    <a href="#dialog_popup" class="btn_info" aria-haspopup="dialog" aria-controls="dialog_info4" id="dialog_opener4" aria-pressed="false"><i class="icon_info"></i><span class="a11y_sr-only">엘롯데포인트 안내</span></a>
                    <p class="point"><em id="pointBlnc">0</em>점</p>
                </div>
                <div class="item">
                    <a href="https://cca.ellotte.com/cca-fo/keepMny/main?bypass">
                        <p class="icon">
                            <i class="icon_keep"></i>
                        </p>
                        <p class="name">보관금</p>
                    </a>
                    <a href="#dialog_popup" class="btn_info" aria-haspopup="dialog" aria-controls="dialog_info2" id="dialog_opener2" aria-pressed="false"><i class="icon_info"></i><span class="a11y_sr-only">보관금 안내</span></a>
                    <p class="point"><em id="deposits">0</em>점</p>
                </div>
                <div class="item">
                    <a href="https://campaign.ellotte.com/campaign-fo/coupon/mylotte/historyCoupon?bypass">
                        <p class="icon">
                            <i class="icon_coupon"></i>
                        </p>
                        <p class="name">쿠폰</p>
                    </a>
                    <a href="#dialog_popup" class="btn_info" aria-haspopup="dialog" aria-controls="dialog_info3" id="dialog_opener3" aria-pressed="false"><i class="icon_info"></i><span class="a11y_sr-only">쿠폰 안내</span></a>
                    <p class="point"><em id="couponCnt">0</em>장</p>
                </div>
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
    .userinfo {
        margin-bottom: 40px;
    }
    .userinfo .user_box.charge_box {
        padding: 0;
    }
    .userinfo .user_box {
        float: left;
        width: 308px;
        height: 180px;
        background: #000;
    }
    .userinfo .user_box.charge_box .user {
        margin: 24px 24px 0 24px;
    }
    .userinfo .user_box .photo {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        background-size: 400px auto;
        background-repeat: no-repeat;
        background-position: -22px -222px;
    }
    .userinfo .user_box .name {
        display: -webkit-box;
        overflow: hidden;
        height: 56px;
        padding-top: 8px;
        padding-left: 68px;
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
    }
    .userinfo .user_box .name.charge {
        height: 94px;
    }
    .userinfo .point_box {
        float: left;
        width: 892px;
        border: 3px solid #000;
        border-left: 3px;
    }
</style>