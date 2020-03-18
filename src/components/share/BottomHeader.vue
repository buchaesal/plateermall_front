<template>
        <div class="menu_bar">
            <div class="inner_bar">
                <div class="left_bar">
                    <span class="item"><a @click="goToHome">HOME</a></span>
                    <span class="item"><a>OUTLET</a></span>
                    <span class="item"><a>BEAUTY</a></span>
                    <span class="item"><a>BAG & ACC</a></span>
                    <span class="item"><a>SHOES</a></span>
                    <span class="item"><a>WOMEN</a></span>
                    <span class="item"><a>MEN</a></span>
                    <span class="item"><a>CASUAL</a></span>
                    <span class="item"><a>SPORTS</a></span>
                    <span class="item"><a>KIDS</a></span>
                    <span class="item"><a>LIVING</a></span>
                    <span class="item"><a>FOODS</a></span>

                </div>

                <div class="right_bar">
                    <span class="item"><a>3D 쇼핑</a></span>
                    <span class="item"><a>ZIPSA</a></span>
                    <span class="item"><a>온앤더뷰티</a></span>
                    <a href="#">
                        <sui-icon size="big" name="plus square"/>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "BottomHeader.vue",
        methods: {
            goToHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

    .inner_bar {
        margin: 20px 7%;
    }

    .left_bar {
        display: inline-block;
        float: left;
        margin-top: 20px;
    }

    .left_bar a {
        color: darkgray;
        margin: 0 10px;
    }

    .right_bar {
        display: inline-block;
        float: right;
        margin-top: 17px;
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