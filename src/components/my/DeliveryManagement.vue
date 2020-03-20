<template>
  <div>
    <p class="action_info-large">
      엘롯데에서 상품구매 시 배송되는 주소록입니다. 배송지를 추가/수정/삭제하여 관리할 수 있습니다.
      <button class="btn_normal" @click="openShippingSpotForm">배송지 추가</button>
    </p>

    <sui-table celled textAlign="center">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell :width="2"></sui-table-header-cell>
        <sui-table-header-cell :width="3">배송지 이름</sui-table-header-cell>
        <sui-table-header-cell>배송지</sui-table-header-cell>
        <sui-table-header-cell :width="2">관리</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>

        <sui-table-row v-if="openShippingSpotFormFlag">
            <sui-table-cell></sui-table-cell>
            <sui-table-cell class="spot-type"></sui-table-cell>
            <sui-table-cell text-align="left">
                <ShippingSpotForm v-bind:target-shipping-spot="emptyShippingSpotMode"></ShippingSpotForm>
            </sui-table-cell>
            <sui-table-cell>
                <p><button class="cancel-btn" @click="closeShippingSpotForm">취소</button></p>
                <p><button class="save-btn">저장</button></p>
            </sui-table-cell>
        </sui-table-row>

      <sui-table-row v-if="shippingSpotSize == 0">
        <sui-table-cell class="no-delivery-spot" colspan="4">
            <br>
            <br>
            <p>기본 배송지를 등록해주세요.</p>
            <br>
            <br>
        </sui-table-cell>
      </sui-table-row>


        <sui-table-row v-else>
            <sui-table-cell><sui-checkbox radio value="defaultShippingSpot" checked v-model="checkedRadio"/></sui-table-cell>
            <sui-table-cell class="spot-type">기본배송지</sui-table-cell>

            <sui-table-cell text-align="left" v-if="openModifyShippingSpotFormFlag">
                <ShippingSpotForm v-bind:target-shipping-spot="defaultShippingSpot"></ShippingSpotForm>
            </sui-table-cell>
            <sui-table-cell text-align="left" v-else>
                <p class="user-name">{{defaultShippingSpot.receiverName}}</p>
                <div class="spot-details">
                    <p>{{defaultShippingSpot.lineNumber}}/{{defaultShippingSpot.phoneNumber}}</p>
                    <p>도로명 주소 : {{defaultShippingSpot.roadAddress}}</p>
                    <p>지번 주소 : {{defaultShippingSpot.zipcodeAddress}}</p>
                </div>
            </sui-table-cell>
            
            <sui-table-cell v-if="openModifyShippingSpotFormFlag">
                <p><button class="cancel-btn" @click="closeModifyDefaultSpotForm">취소</button></p>
                <p><button class="save-btn">저장</button></p>
            </sui-table-cell>
            <sui-table-cell v-else><button class="modify-btn" @click="openModifyDefaultSpotForm">수정</button></sui-table-cell>
        </sui-table-row>

        <sui-table-row v-for="(shippingSpot, index) in otherShippingSpots" :key="index" text-align="center">
            <sui-table-cell><sui-checkbox radio :value="''+index" v-model="checkedRadio"/></sui-table-cell>

            <sui-table-cell class="spot-type">{{shippingSpot.spotName}}</sui-table-cell>

            <sui-table-cell text-align="left">
                <p class="user-name">{{shippingSpot.receiverName}}</p>
                <div class="spot-details">
                    <p>{{shippingSpot.lineNumber}}/{{shippingSpot.phoneNumber}}</p>
                    <p>도로명 주소 : {{shippingSpot.roadAddress}}</p>
                    <p>지번 주소 : {{shippingSpot.zipcodeAddress}}</p>
                </div>
            </sui-table-cell>
            <sui-table-cell><button class="modify-btn" @click="deleteShippingSpot(index)">삭제</button></sui-table-cell>
        </sui-table-row>

    </sui-table-body>

    </sui-table>
    <div>
        <p class="info-title">배송비 등록/변경 안내</p>
        <li>
            <span class="info-content">배송 주소를 변경하실 경우는 쇼핑 전에 변경해 주시기 바랍니다.</span>
        </li>
    </div>
      <p class="content-wrap">
          <button class="default-shipping-spot" @click="setDefaultShoppingSpot">기본 배송지 설정</button>
      </p>
  </div>
</template>

<script>
import ShippingSpotForm from './ShippingSpotForm';
import ShippingSpotModel from "./model/ShippingSpotModel";

export default {
  name: "DeliveryManagement",
    data() {
      return {
          emptyShippingSpotMode: new ShippingSpotModel(),

          createNewShippingSpot: false,
          defaultShippingSpot: {},
          otherShippingSpots: [],
          shippingSpotSize: -1,

          checkedRadio: 'defaultShippingSpot',
          
          openShippingSpotFormFlag: false,
          openModifyShippingSpotFormFlag: false,
      }
    },
    components: {
        ShippingSpotForm,
    },
    methods: {
        openShippingSpotForm(){
            this.openShippingSpotFormFlag = true;
        },
        closeShippingSpotForm(){
            this.openShippingSpotFormFlag = false;
        },
        setDefaultShoppingSpot() {
            if(this.checkedRadio == "defaultShippingSpot"){
                alert("기본 배송지입니다.")
                return;
            }
            this.defaultShippingSpot.isDefaultShippingSpot = 'N';
            this.otherShippingSpots[this.checkedRadio].isDefaultShippingSpot = 'Y';
            this.updateShippingSpotList(this.defaultShippingSpot, this.otherShippingSpots);
            alert('기본 배송지로 설정하였습니다.')
            this.checkedRadio = 'defaultShippingSpot';
        },
        updateShippingSpotList(defaultShippingSpot, otherShippingSpots) {
            otherShippingSpots.push(defaultShippingSpot);
            this.$store.commit('setNewShippingSpotList', otherShippingSpots);
            this.filterDefaultAndOtherSpots();
        },
        setDefaultShippingSpotList(){
            this.$store.commit('setDefaultShippingSpotList');
            this.filterDefaultAndOtherSpots();
        },
        filterDefaultAndOtherSpots(){
            this.shippingSpotSize = this.shippingSpots.length;
            this.otherShippingSpots = [];
            this.shippingSpots.filter((shippingSpot) => {
            if(shippingSpot.isDefaultShippingSpot === 'Y'){
                this.defaultShippingSpot = shippingSpot;
            }  
            else{
                this.otherShippingSpots.push(shippingSpot);
            }});
        },
        openModifyDefaultSpotForm(){
            this.openModifyShippingSpotFormFlag = true;
        },
        closeModifyDefaultSpotForm(){
            this.openModifyShippingSpotFormFlag = false;
        },
        deleteShippingSpot(index){
            this.otherShippingSpots.splice(index, 1);
            this.updateShippingSpotList(this.defaultShippingSpot, this.otherShippingSpots);
            alert('배송지가 삭제되었습니다.');
        },

    },
    computed: {
      shippingSpots: function () {
          return this.$store.state.shippingSpotListStore.shippingSpotList;
      }
    },
    created: function(){
        this.getShippingSpotListFromApi();
    }

};
</script>

<style scoped>
.action_info-large {
  margin: 20px 0;
  padding-top: 20px;
  color: #666;
  font-size: 14px;
  font-weight: bold;
}
.btn_normal {
  float: right;
  margin-bottom: 30px;
  width: 160px;
  border: 1px solid #b3b3b3;
  background-color: #fff;
  color: #000;
  display: inline-block;
  text-align: center;
  padding: 11px 24px 9px;
  vertical-align: middle;
  font-size: 14px;
}
.no-delivery-spot {
    
    color: #666;
  font-size: 14px;
  font-weight: bold;
}
.info-title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    /*color: #888;*/
}
.info-content{
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #888;
}
    .content-wrap{
        margin: 40px 0 0;
        text-align: center;
    }
    .default-shipping-spot{
        background: black;
        min-width: 160px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: white;
    }
    .user-name{
        font-weight: bold;
    }
    .spot-type, .spot-details{
        color: #888;
        font-weight: bold;
    }
    .modify-btn{
        background: white;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: black;
    }
    .cancel-btn{
        background: white;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: black;
    }
    .save-btn{
        background: black;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: white;
    }
</style>