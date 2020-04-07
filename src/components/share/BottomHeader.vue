<template>
    <div class="menu_bar">
        <div class="inner_bar">
            <div class="left_bar">
                <span class="item"><a @click="goToHome">HOME</a></span>
                <span class="item" v-for="(category, index) in leftCategoryList"
                      :key="index"><a @click="goToCategory(category.categoryCode)">{{category.name}}</a></span>
            </div>

            <div class="right_bar">
                <span class="item" v-for="(category, index) in rightCategoryList"
                      :key="index"><a @click="goToRightCategory(category.categoryCode)">{{category.name}}</a></span>
                <a href="#">
                    <sui-icon size="big" name="plus square outline"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomHeader",
        methods: {
            goToHome() {
                this.$router.push('/');
            },
            goToCategory(categoryCode) {
                this.$router.push('/category/' + categoryCode).catch(error => {
                    if (error.name == "NavigationDuplicated") {
                        this.$store.commit("getError", error);
                    } else {
                        throw error;
                    }
                });
            },
            goToRightCategory(categoryCode) {
                this.$router.push('/rightcategory/' + categoryCode).catch(error => {
                    if (error.name == "NavigationDuplicated") {
                        this.$store.commit("getError", error);
                    } else {
                        throw error;
                    }
                });
            },
        },
        created() {
            this.$store.commit("getLeftCategoryList", "10000");
            this.$store.commit("getRightCategoryList", "20000");
        },
        computed: {
            leftCategoryList() {
                return this.$store.state.categoryStore.leftCategoryList;
            },
            rightCategoryList() {
                return this.$store.state.categoryStore.rightCategoryList;
            },
        },
    }
</script>

<style scoped>
    .menu_bar {
        position: relative;
        line-height: 58px;
        z-index: 100;
        height: 60px;
        min-width: 1500px;
        background: black;
        color: #FFF;
    }

    .inner_bar {
        margin: 20px 7%;
    }

    .left_bar {
        display: inline-block;
        float: left;
        margin-top: 1px;
    }

    .left_bar a {
        color: darkgray;
        margin: 0 10px;
    }

    .right_bar {
        display: inline-block;
        float: right;
        margin-top: 1px;
    }

    .right_bar a {
        color: lightgray;
        margin: 0 15px;
        font-weight: bold;
    }

    .item {
        position: relative;
    }

    a:hover {
        color: lightgray;
        cursor: pointer;
        border-bottom: 3px solid white;
        padding-bottom: 19px;
    }

</style>