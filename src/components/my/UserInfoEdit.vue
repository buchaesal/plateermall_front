<template>
    <div>
        <div>
            <sui-form-field class="edit-form">
                <sui-table definition class="edit-table">
                    <sui-table-body>
                        <sui-table-row>
                            <sui-table-cell class="form_head">이름</sui-table-cell>
                            <sui-table-cell class="data">
                                <p>{{ userInfo.name }}</p>
                                <p class="edit-table-text">실명 정보(이름, 생년월일, 성별, 개인 고유 식별 정보)가 변경된 경우 본인 확인을 통해 정보를 수정하실 수
                                    있습니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">연락처</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input class="edit-data" v-model="userInfo.phoneNumber" placeholder="변경할 연락처"/>
                                <p class="edit-table-text">아이디, 비밀번호 찾기 등 본인확인이 필요한 경우 또는 유료 결제 등 PLATEER MALL로부터 알림을 받을
                                    때 사용할 휴대전화입니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">이메일</sui-table-cell>
                            <sui-table-cell class="data">
                                <p>{{userInfo.email}}</p>
                                <p class="edit-table-text">PLATEER MALL 계정의 이메일 주소입니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">비밀번호</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input class="edit-data" type="password" v-model="userInfo.password" placeholder="변경할 비밀번호"/>
                                <p class="edit-table-text">비밀번호 변경시 입력합니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">비밀번호 변경</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input class="edit-data" type="password" placeholder="비밀번호 확인"/>
                                <p class="edit-table-text">비밀번호 변경시 위 비밀번호와 동일한지 확인합니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">
                                <label>SMS 수신동의</label></sui-table-cell>
                            <sui-table-cell class="data">
                                <div class="form-radio">
                                    <sui-form-field>
                                        <sui-checkbox radio name="SMS" label="동의" value="true"
                                                      v-model="userInfo.smsAgree"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox radio name="SMS" label="비동의" value="false"
                                                      v-model="userInfo.smsAgree"/>
                                    </sui-form-field>
                                </div>
                                <p class="edit-table-text">PLATEER MALL 서비스 변경/개편/종료, 프로모션 등 PLATEER MALL의 대부분 안내에 대한
                                    동의여부 입니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">
                                <label>Email 수신동의</label></sui-table-cell>
                            <sui-table-cell class="data">
                                <div class="form-radio">
                                    <sui-form-field>
                                        <sui-checkbox radio name="Email" label="동의" value="true"
                                                      v-model="userInfo.emailAgree"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox radio name="Email" label="비동의" value="false"
                                                      v-model="userInfo.emailAgree"/>
                                    </sui-form-field>
                                </div>
                                <p class="edit-table-text">PLATEER MALL 서비스 변경/개편/종료, 프로모션 등 PLATEER MALL의 대부분 안내에 대한
                                    동의여부 입니다.</p>
                            </sui-table-cell>
                        </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-form-field>
        </div>
        <div id="buttons">
            <sui-button secondary @click="modifyUser">수정</sui-button>
            <sui-button basic secondary>취소</sui-button>
        </div>
    </div>
</template>

<script>
    import {getCurrentUserInfo} from '../../api/UserApi';
    import {modifyUser} from "../../api/UserApi";

    export default {
        name: "UserInfoEdit",
        data() {
            return {
                userInfo: {},
            }
        },
        created() {
            this.init();
        },
        methods: {
            async init() {
                let result = await getCurrentUserInfo();

                if (result) {
                    result.password = null;
                    result.smsAgree = result.smsAgree + '';
                    result.emailAgree = result.emailAgree + '';
                    this.userInfo = result;
                } else {
                    alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
                }
            },
            modifyUser() {
                if (confirm('수정하시겠습니까?')) {
                    this.userInfo.smsAgree = this.userInfo.smsAgree === 'true';
                    this.userInfo.emailAgree = this.userInfo.emailAgree === 'true';
                    console.log(this.userInfo);
                    modifyUser(this.userInfo)
                        .then(() => {
                            this.init();
                        })
                        .catch((err) => console.log(err));
                }
            }
        }
    }

</script>

<style scoped>

    .edit-form {
        text-align: center !important;
    }

    .user-info-edit-form {
        text-align: center;
    }

    .form_head {
        height: 60px !important;
        width: 200px !important;
        text-align: center !important;
    }

    .edit-table {
        max-width: 850px;
    }

    .data {
        padding: 20px !important;
    }

    .edit-data, .form-radio {
        margin-bottom: 10px !important;
    }

    .edit-table-text {
        font-size: 0.8rem;
        font-weight: bolder;
        color: #777777;
    }

    #buttons {
        text-align: center;
        margin-top: 20px;
    }


</style>