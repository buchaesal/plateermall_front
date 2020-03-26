<template>
    <div>
        <p class="action_info-large">
            회원정보는 당신 마음대로 수정하면 되겠습니다....
        </p>
<!--        <sui-form class="user-info-edit-form">-->
<!--            <sui-form-field inline>-->
<!--                <label class="form-head">이름</label>-->
<!--                <input type="text" placeholder="은 수정불가" disabled/>-->
<!--            </sui-form-field>-->

<!--            <sui-form-field inline>-->
<!--                <label class="form-head">연락처</label>-->
<!--                <input type="text" placeholder="원래 폰번호"/>-->
<!--            </sui-form-field>-->

<!--            <sui-form-field inline>-->
<!--                <label class="form-head">Email</label>-->
<!--                <input type="text" placeholder="원래 Email" disabled/>-->
<!--            </sui-form-field>-->

<!--            <sui-form-field inline>-->
<!--                <label class="form-head">비밀번호</label>-->
<!--                <input type="text" placeholder="변경할 비밀번호"/>-->
<!--            </sui-form-field>-->

<!--            <sui-form-field inline>-->
<!--                <label class="form-head">비밀번호 확인</label>-->
<!--                <input type="text" placeholder="위와 같은 비밀번호"/>-->
<!--            </sui-form-field>-->

<!--            <sui-form-fields inline>-->
<!--                <label for="SMS">SMS 수신동의 : </label>-->
<!--                <sui-form-field>-->
<!--                    <sui-checkbox radio name="SMS" label="동의" value="1"/>-->
<!--                </sui-form-field>-->
<!--                <sui-form-field>-->
<!--                    <sui-checkbox radio name="SMS" label="비동의" value="2"/>-->
<!--                </sui-form-field>-->
<!--            </sui-form-fields>-->

<!--            <sui-form-fields inline>-->
<!--                <label for="Email">Email 수신동의 : </label>-->
<!--                <sui-form-field>-->
<!--                    <sui-checkbox radio name="Email" label="동의" value="1"/>-->
<!--                </sui-form-field>-->
<!--                <sui-form-field>-->
<!--                    <sui-checkbox radio name="Email" label="비동의" value="2"/>-->
<!--                </sui-form-field>-->
<!--            </sui-form-fields>-->
<!--        </sui-form>-->

        <div class="edit-form">
            <sui-form-field>
                <sui-table definition class="edit-table">
                    <sui-table-body>
                        <sui-table-row>
                            <sui-table-cell class="form_head">이름</sui-table-cell>
                            <sui-table-cell class="data">
                                123
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">연락처</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input placeholder="변경할 연락처"/>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">이메일</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input placeholder="변경할 이메일"/>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">비밀번호</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input placeholder="변경할 비밀번호"/>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">비밀번호 변경</sui-table-cell>
                            <sui-table-cell class="data">
                                <sui-input placeholder="비밀번호 확인"/>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">
                                <label for="SMS">SMS 수신동의</label></sui-table-cell>
                            <sui-table-cell class="data">
                                <div class="form-radio">
                                    <sui-form-field>
                                        <sui-checkbox radio name="SMS" label="동의" value="1"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox radio name="SMS" label="비동의" value="2"/>
                                    </sui-form-field>
                                </div>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell class="form_head">
                                <label for="Email">Email 수신동의</label></sui-table-cell>
                            <sui-table-cell class="data">
                                <div class="form-radio">
                                    <sui-form-field>
                                        <sui-checkbox radio name="Email" label="동의" value="1"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox radio name="Email" label="비동의" value="2"/>
                                    </sui-form-field>
                                </div>
                            </sui-table-cell>
                        </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-form-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfoEdit"
    }
</script>

<style scoped>

    .edit-form {
        text-align: center !important;
    }

    .action_info-large {
        margin: 20px 0 40px 0;
        padding-top: 20px;
        color: #666;
        font-size: 14px;
        font-weight: bold;
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
        max-width: 500px;
    }

    .data {
        text-align: center !important;
    }


</style>