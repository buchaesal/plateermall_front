<template>
    <div>
        <p class="action_info-large">
            회원정보는 당신 마음대로 수정하면 되겠습니다....
        </p>
        <sui-form class="user-info-edit-form">
            <sui-form-field inline>
                <label class="form-head">이름</label>
                <input type="text" placeholder="은 수정불가" />
            </sui-form-field>

            <sui-form-field inline>
                <label class="form-head">연락처</label>
                <input type="text" placeholder="원래 폰번호" />
            </sui-form-field>

            <sui-form-field inline>
                <label class="form-head">비밀번호</label>
                <input type="text" placeholder="변경할 비밀번호" />
            </sui-form-field>

            <sui-form-field inline>
                <label class="form-head">비밀번호 확인</label>
                <input type="text" placeholder="위와 같은 비밀번호" />
            </sui-form-field>

            <sui-form>
                <sui-form-fields inline>
                    <label for="fruit">Select your favorite fruit:</label>
                    <sui-form-field>
                        <sui-checkbox radio name="fruit" label="Apples" value="1" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="fruit" label="Oranges" value="2" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="fruit" label="Pears" value="3" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="fruit" label="Grapefruit" value="4" />
                    </sui-form-field>
                </sui-form-fields>
                <sui-form-fields grouped>
                    <label for="second_fruit">Select your second favorite fruit:</label>
                    <sui-form-field>
                        <sui-checkbox radio name="second_fruit" label="Apples" value="1" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="second_fruit" label="Oranges" value="2" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="second_fruit" label="Pears" value="3" />
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox radio name="second_fruit" label="Grapefruit" value="4" />
                    </sui-form-field>
                </sui-form-fields>
            </sui-form>

            <sui-form-field inline>
                <sui-form-field>
                    <sui-checkbox label="SMS 수신동의" />
                </sui-form-field>
            </sui-form-field>

            <sui-form-field inline>
                <sui-form-field>
                    <sui-checkbox label="Email 수신동의" />
                </sui-form-field>
            </sui-form-field>
        </sui-form>
    </div>
</template>

<script>
    export default {
        name: "UserInfoEdit"
    }
</script>

<style scoped>

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

</style>