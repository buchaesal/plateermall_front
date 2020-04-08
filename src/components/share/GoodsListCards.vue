<template>
    <div class="goods-content">
        <div class="goods-sort">
            <ul class="option-field sort-setting">
                <li>
                    <input type="radio" name="sort" id="sort-result1"
                           checked="checked" @click="reSort('goodsCode/DESC')">
                    <label for="sort-result1">최근등록순</label>
                </li>
                <li>
                    <input type="radio" name="sort" id="sort-result2"
                           @click="reSort('saleCnt/DESC')">
                    <label for="sort-result2">판매순</label>
                </li>
                <li>
                    <input type="radio" name="sort" id="sort-result5"
                           @click="reSort('benefitPrice/ASC')">
                    <label for="sort-result5">낮은 가격순</label>
                </li>
                <li>
                    <input type="radio" name="sort" id="sort-result6"
                           @click="reSort('benefitPrice/DESC')">
                    <label for="sort-result6">높은 가격순</label>
                </li>
            </ul>
        </div>
        <div class="goods-card">    
            <!--<sui-loader active centered inline v-if="goodsList[0] === undefined"/>-->
            <NoItem v-if="goodsList.length == 0" :message="noItemMessage"/>
            <sui-card-group v-else :items-per-row="items_per_row">
                <sui-card class="goods-card" v-for="(goodsData, index) in goodsList" :key="index"
                          @click="goToGoodsDetail(goodsData.goodsCode)">
                    <sui-image :src="goodsData.imgUrl" width="100%"/>
                    <sui-card-content>
                        <sui-card-header class="title">{{goodsData.title}}</sui-card-header>
                        <sui-card-meta class="seller">{{goodsData.seller}}</sui-card-meta>
                        <sui-card-description></sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra class="price">
                        <sui-icon name="won sign icon"/>
                        <span class="price">{{goodsData.benefitPrice.toLocaleString()}}</span>
                    </sui-card-content>
                </sui-card>
            </sui-card-group>
        </div>
        {{goodsList}}
    </div>
</template>

<script>
    import NoItem from "./NoItem";

    export default {
        name: "GoodsListCards",
        props: [
            "goodsList",
            "items_per_row",
            "noItemMessage"
        ],
        components: {
            NoItem,
        },
        methods: {
            goToGoodsDetail(goodsCode) {
                this.$router.push("/goodsDetail/" + goodsCode);
            },
            reSort(sort) {
                this.$emit("reSort", sort);
            },
        },
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .goods-sort .sort-setting {
        margin-bottom: 20px;
        border: solid 1px #e6e6e6;
    }

    .goods-sort .sort-setting:after {
        content: "";
        display: block;
        clear: both;
    }

    .goods-sort .sort-setting li {
        position: relative;
        padding: 20px 0;
        display: list-item;
        float: left;
    }

    input[type="radio"] {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        clip: rect(0, 0, 0, 0);
        border: 0;
        border-radius: 0;
        background: none;
        -webkit-appearance: none;
        cursor: pointer;
        opacity: 0;
    }

    .goods-sort .sort-setting li:after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: #d8d8d8;
        vertical-align: middle;
    }

    .goods-sort .goods-setting li input[type="radio"] {
        position: absolute;
    }

    .goods-sort input[type="radio"] + label {
        padding: 0 20px;
        color: #666;
        font-size: 16px;
    }

    .goods-sort input[type="radio"]:checked + label {
        font-weight: 700;
        color: #000;
        font-size: 16px;
    }

    .goods-card {
        position: relative;
    }

    .cards {
        margin-bottom: auto;
    }

</style>