<template>
    <div class="input-address">
        <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">받으시는 분</p>
            </div>
            <div>
            <input type="text" v-model="targetShippingSpot.receiverName">
            </div>
        </div>
        
       <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">배송지명</p>
            </div>
            <div>
            <input type="text" v-model="targetShippingSpot.spotName">
            </div>
        </div>
        <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">연락처</p>
            </div>
            <div>
            <input type="text" v-model="targetShippingSpot.lineNumber">
            </div>
        </div>
        <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">휴대폰</p>
            </div>
            <div>
            <input type="text" v-model="targetShippingSpot.phoneNumber">
            </div>
        </div>
        <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">도로명 주소</p>
            </div>
            <div>
            <input type="text" size="45" disabled="disabled" style="background-color:#ebebe0;" :value="targetShippingSpot.roadAddress">
            <button class="address-search-btn" @click="openFindAddressComponent">주소검색</button>
            </div>
        </div>
        <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">지번 주소</p>
            </div>
            <div>
            <input type="text" size="45" disabled="disabled" style="background-color:#ebebe0;" :value="targetShippingSpot.zipcodeAddress">
            </div>
        </div>
        <div class="row-wrap">
            <FindAddress v-if="openFindAddress" v-bind:target-shipping-spot="targetShippingSpot" @complete="closeFindAddressComponent"></FindAddress>
        </div>
            <div class="row-wrap">
            <div class="spot-properties">
                <p class="spot-properties-contents">나머지 주소</p>
            </div>
            <div>
            <input type="text" size="45" v-model="targetShippingSpot.remainAddress">
            </div>
        </div>
    </div>
</template>

<script>
    import FindAddress from "./FindAddressPage";

    export default {
        name: "ShippingSpotForm",
        props: [
            'targetShippingSpot',
        ],
        components: {
          FindAddress,
        },
        data() {
            return {
                openFindAddress: false,
            }
        },
        computed: {
          roadAddress: function () {
              return this.$store.state.shippingSpotListStore.roadAddress;
          },
          zipcodeAddress: function () {
              return this.$store.state.shippingSpotListStore.zipcodeAddress;
          }
        },
        methods: {
            openFindAddressComponent() {
                this.openFindAddress = true;
            },
            closeFindAddressComponent() {
                this.openFindAddress = false;
            }
        }
    }
</script>

<style scoped>
input[type="text"]{
    height: 40px;
    padding: 4px 12px 2px;
    border: 1px solid #D9D9D9;
    background-color: #FFF;
    color: #000;
    font-size: 14px;
}
.row-wrap{
    margin-top: 10px;
    vertical-align: middle;
}
.spot-properties{
    height: 40px;
    vertical-align: middle;
    padding: 4px 12px 5px;
    display: inline-block;
    float: left;
    min-width: 100px;
    margin-right: 10px;
}
.spot-properties-contents{
    margin-top: 5px;
    font-weight: bold;
}
.address-search-btn{
    margin-left: 5px;
    margin-top: 2px;
    background: white;
    min-width: 75px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    line-height: 40px;
    border: 1px solid #333;
    color: black;
}
</style>