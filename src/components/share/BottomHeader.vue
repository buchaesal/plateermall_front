<template>
    <div class="ui secondary  menu">
        <a class="active item">HOME</a>
        <a class="item">OUTLET</a>
        <a class="item">BEAUTY</a>
        <a class="item">BAG & ACC</a>
        <a class="item">SHOES</a>
        <a class="item">WOMEN</a>
        <a class="item">MEN</a>
        <a class="item">CASUAL</a>
        <a class="item">SPORTS</a>
        <a class="item">KIDS</a>
        <a class="item">LIVING</a>
        <a class="item">FOOD</a>

        <div class="right menu">
            <a class="ui item">3D 쇼핑</a>
            <a class="ui item">ZIPSA</a>
            <a class="ui item">온앤더뷰티</a>
            <a class="ui item">버튼</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomHeader.vue"
    }
</script>

<style scoped>

    .ui.secondary.menu {
        background-color: black;
        height: 50px;
    }

    .ui.secondary.menu .item {
        color: lightgray;
    }

    .ui.secondary.menu .active.item{
        margin-left: 80px;
    }

    .right.menu{
        margin-right: 80px;
    }

</style>