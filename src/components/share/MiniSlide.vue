<template>
    <div class="slide">
        <ul>
            <li>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/display/displaySpecialPlan/displaySpecialPlan_03111144884.jpg/chg/resize/1600/cropcenter/1600x240+0+0/optimize">
            </li>
            <li>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/display/displaySpecialPlan/displaySpecialPlan_03111144807.jpg/chg/resize/1600/cropcenter/1600x240+0+0/optimize">
            </li>
            <li>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/display/displaySpecialPlan/displaySpecialPlan_0311114421.jpg/chg/resize/1600/cropcenter/1600x240+0+0/optimize">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MiniSlide.vue"
    }
</script>

<style scoped>

    * {
        margin:0;
        padding:0;
    }

    .slide{
        height:180px;
        overflow:hidden;
        margin-bottom: 4%;
    }
    .slide ul{
        list-style: none;
        width:calc(100% * 4);
        display:flex;
        animation:slide 10s infinite;
    }
    .slide li{
        width:calc(100% / 4);
        height:180px;
    }
    @keyframes slide {
        0% {margin-left: 0;}
        /* 0 ~ 10  : 정지 */
        10% {margin-left: 0;}
        /* 10 ~ 25 : 변이 */
        25% {margin-left: -100%;}
        /* 25 ~ 35 : 정지 */
        35% {margin-left: -100%;}
        /* 35 ~ 50 : 변이 */
        50% {margin-left: -200%;}
        60% {margin-left: -200%;}
        75% {margin-left: -300%;}
        85% {margin-left: -300%;}
        100% {margin-left: 0;}
    }

    img{
        display: inline;
        float: left;
        width: 1200px;
        height: 180px;
    }

</style>