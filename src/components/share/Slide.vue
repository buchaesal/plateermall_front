<template>
    <div class="slide">
        <ul>
            <li v-for="index in slideList.length / 2" :key="index" >
                <img class="slide1" :src="slideList[(index * 2) - 2].imgUrl" @click="slideClick(slideList[(index * 2 - 2)].query)">
                <img class="slide2" :src="slideList[(index * 2) - 1].imgUrl" @click="slideClick(slideList[(index * 2 - 1)].query)">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide",

        data() {
            return {
                slideList: [
                    {
                        imgUrl: require("../../assets/main-banner-1.jpg"),
                        query: "나이키"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-2.jpg"),
                        query: "원피스"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-3.jpg"),
                        query: "팩"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-4.jpg"),
                        query: "팩"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-5.jpg"),
                        query: "컨버스"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-6.jpg"),
                        query: "나이키"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-7.jpg"),
                        query: "나이키"
                    },
                    {
                        imgUrl: require("../../assets/main-banner-8.jpg"),
                        query: "나이키"
                    },
                ]
            }
        },
        methods: {
            slideClick(query) {
                this.$router.push({name: "searchResult", query: {query: query}});
            }
        }
    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    .slide {
        width: 100%;
        height: 640px;
        overflow: hidden;
        margin-top: 185px;
        margin-bottom: 4%;
    }

    .slide ul {
        list-style: none;
        width: calc(100% * 4);
        display: flex;
        animation: slide 10s infinite;
    }

    .slide li {
        width: calc(100% / 4);
        height: 500px;
    }

    @keyframes slide {
        0% {
            margin-left: 0;
        }
        /* 0 ~ 10  : 정지 */
        10% {
            margin-left: 0;
        }
        /* 10 ~ 25 : 변이 */
        25% {
            margin-left: -100%;
        }
        /* 25 ~ 35 : 정지 */
        35% {
            margin-left: -100%;
        }
        /* 35 ~ 50 : 변이 */
        50% {
            margin-left: -200%;
        }
        60% {
            margin-left: -200%;
        }
        75% {
            margin-left: -300%;
        }
        85% {
            margin-left: -300%;
        }
        100% {
            margin-left: 0;
        }
    }

    img {
        display: inline;
        float: left;
        width: 50%;
        height: 640px;
    }
    
    .slide1, .slide2 {
        cursor: pointer;
    }

</style>