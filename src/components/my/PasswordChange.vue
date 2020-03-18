<template>
    <div class="password-change-main">
        <div class="toparea">
			<!-- <h2 class="title">비밀번호 변경</h2> -->
			<div class="headline">
				새로운 비밀번호를<br>입력해주세요. <!-- 새로운 비밀번호를<br>입력해주세요. -->
			</div>
		</div>
        
        <div>
            <sui-table celled>
                <sui-table-body>
                    <sui-table-row>
                        <sui-table-cell>비밀번호</sui-table-cell>
                        <sui-table-cell>
                            <div class="inner-row">
                                <sui-input class="password-input" type="text" placeholder="비밀번호를 입력해주세요"/>
                            </div>
                            <div class="inner">
                                <span class="__point-color">
                                    <small>
                                    8-15자리의 영문/숫자/특수문자를 함께 입력해주세요.
                                    </small>
                                </span>
                            </div>
                        </sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                        <sui-table-cell>비밀번호 확인</sui-table-cell>
                        <sui-table-cell>
                            <div>
                                <sui-input class="password-input" type="text" placeholder="입력하신 비밀번호를 다시 한번 입력해주세요"/>
                            </div>
                        </sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
        </div>

        <div class="btn-area">
            <button class="cancel-btn">취소</button>
            <button class="next-btn">다음</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PasswordChange"
    }
</script>

<style scoped>
.password-change-main{
    margin: 0 auto;
    padding: 40px 0 100px 0;
}
.toparea {
    margin-bottom: 65px;
}
.title {
    margin-bottom: 38px;
    padding: 8px 0;
    font-weight: 100;
    font-size: 28px;
    line-height: 32px;
    color: #000;
    word-break: break-all;
}
.headline {
    margin: 0 0 10px;
    font-weight: 100;
    font-size: 30px;
    line-height: 54px;
    color: #000;
    letter-spacing: -0.05em;
    word-break: break-all;
}
.password-input{
    width: 50%;
}
.inner {
    color: #0092fa;
    margin: 10px 0 0;
}
.inner-row{
    margin-top: 3.5%;
}
.btn-area{
    text-align: center;
    margin-top: 3%;
}
.cancel-btn{
    width: 13%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    font-weight: bold;
    font-size: 15px;
    color: white;
    background-color: gray;
    border: 0;
    outline: 0;
}
.next-btn{
    margin-left: 1%;
    width: 13%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    font-weight: bold;
    font-size: 15px;
    color: white;
    background-color: #0092fa;
    border: 0;
    outline: 0;
}
</style>