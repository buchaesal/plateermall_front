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
            </li><li>
                <img src="https://image.ellotte.com/ellt.static.lotteeps.com/display/banner/banner_03091130150.jpg/chg/resize/1600/cropcenter/1600x240+0+0/optimize">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MiniSlide"
    }
</script>

<style scoped>

    .slide{
        width: 100%;
        margin-left: 17%;
        height:180px;
        overflow:hidden;
        margin-bottom: 6%;
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
        10% {margin-left: 0;}
        25% {margin-left: -100%;}
        35% {margin-left: -100%;}
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
        height: auto;
    }

</style>