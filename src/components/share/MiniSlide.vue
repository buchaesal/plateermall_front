<template>
    <div class="slide">
        <ul>
            <li v-for="(slide, index) in slideList" :key="index">
                <img class="mini-slide" :src="slide.imgUrl"  @click="slideClick(slide.query)">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MiniSlide",

        data() {
            return {
                slideList: [
                    {
                        imgUrl: require("../../assets/main-mini-banner-1.jpg"),
                        query: "컨버스"
                    },
                    {
                        imgUrl: require("../../assets/main-mini-banner-2.jpg"),
                        query: "나이키"
                    },
                    {
                        imgUrl: require("../../assets/main-mini-banner-3.jpg"),
                        query: "컨버스"
                    },
                    {
                        imgUrl: require("../../assets/main-mini-banner-4.jpg"),
                        query: "원피스"
                    },
                ],
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

    ul, li {
        margin: 0;
        padding: 0;
    }

    .slide {
        width: 100%;
        overflow: hidden;
        margin-bottom: 6%;
    }

    .slide ul {
        list-style: none;
        width: calc(100% * 4);
        display: flex;
        animation: slide 10s infinite;
    }

    .slide li {
        width: calc(100% / 4);
    }

    @keyframes slide {
        0% {
            margin-left: 0;
        }
        10% {
            margin-left: 0;
        }
        25% {
            margin-left: -100%;
        }
        35% {
            margin-left: -100%;
        }
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
        height: auto;
    }
    
    .mini-slide {
        cursor: pointer;
    }

</style>