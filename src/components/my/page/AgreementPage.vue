<template>
    <div class="new-join">
        <div>
            <sui-image @click="backToMain" src="https://simage.lotte.com/ellotte/images/login/newel_icon_top_logo.jpg" size="small" />
        </div>
        <h3 class="title"><img src="https://simage.lotte.com/ellotte/images/login/newel_join_terms_agree_title.gif" alt="간편가입 계정 생성"></h3>
        <div class="join-terms-list">
            <h4 class="terms-title">(필수) 이용약관</h4>
            <div class="terms_box">
                     <!-- (D) 약관 내용이 들어가야할 곳입니다. -->
                <iframe src="../service/terms_floor_join.html" frameborder="0" width="100%" height="117" title="롯데닷컴 이용약관 프레임" scrolling="no"></iframe>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AgreementPage",
        methods: {
            backToMain(){
                //메인으로
            },
        },
    }
</script>

<style scoped>
.new-join .title{
    position: static;
    overflow: visible;
    width: 460px;
    margin: 0 auto;
}
h3.title {
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    color: #333;
    margin-left: 30% !important;
}
.join_terms_list {
    margin-bottom: 5px;
}
.terms_title {
    font-size: 14px;
    margin-bottom: 10px;
    letter-spacing: -0.05em;

    
    font-weight: bold;
    color: #888;
}
</style>