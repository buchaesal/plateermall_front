<template>
    <div>
        <p class="action_info-large">
            엘롯데에서 상품구매 시 배송되는 주소록입니다. 배송지를 추가/수정/삭제하여 관리할 수 있습니다.
            <button class="btn_normal" @click="openShippingSpotForm">배송지 추가</button>
        </p>

        <sui-table celled textAlign="center">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell :width="2" v-if="shippingSpots.length !== 0"></sui-table-header-cell>
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
                        <!--                props 객체로 생성해서 디폴트 옵션 넣고 그렇게 만들어보기 -->
                        <ShippingSpotForm :target-shipping-spot="newShippingSpotModel"></ShippingSpotForm>
                    </sui-table-cell>
                    <sui-table-cell>
                        <p>
                            <button class="cancel-btn" @click="closeShippingSpotForm">취소</button>
                        </p>
                        <p>
                            <button class="save-btn" @click="registerNewShippingSpot">저장</button>
                        </p>
                    </sui-table-cell>
                </sui-table-row>

                <sui-table-row v-if="shippingSpots.length === 0">
                    <sui-table-cell class="no-delivery-spot" colspan="4">
                        <br>
                        <br>
                        <p>기본 배송지를 등록해주세요.</p>
                        <br>
                        <br>
                    </sui-table-cell>
                </sui-table-row>

                <sui-table-row v-for="(shippingSpot, index) in shippingSpots" :key="index" text-align="center">
                    <sui-table-cell>
                        <sui-checkbox radio :value="''+shippingSpot.id" v-model="selectedDefault"/>
                    </sui-table-cell>

                    <sui-table-cell class="spot-type">{{shippingSpot.spotAlias}}<br><span v-if="shippingSpot.isDefault">(기본배송지)</span>
                    </sui-table-cell>

                    <sui-table-cell text-align="left">
                        <ShippingSpotForm v-if="isModifyForm === index"
                                          :targetShippingSpot="modifyShippingSpotModel"></ShippingSpotForm>
                        <div v-else>
                            <p class="user-name">{{shippingSpot.receiver}}</p>
                            <div class="spot-details">
                                <p>{{shippingSpot.contactNumber}}/{{shippingSpot.phoneNumber}}</p>
                                <p>도로명 주소 : {{shippingSpot.roadAddress}}</p>
                                <p>지번 주소 : {{shippingSpot.zipcodeAddress}}</p>
                                <p>나머지 주소 : {{shippingSpot.remainAddress}}</p>
                            </div>
                        </div>
                    </sui-table-cell>
                    <sui-table-cell>
                        <div v-if="isModifyForm === index">
                            <p>
                                <button class="cancel-btn" @click="closeModifyForm">취소</button>
                            </p>
                            <p>
                                <button class="save-btn" @click="modifyAddress">저장</button>
                            </p>
                        </div>
                        <div v-else>
                            <button class="modify-btn" v-if="shippingSpot.isDefault" @click="openModifyForm(index)">수정
                            </button>
                            <button class="modify-btn" v-else @click="deleteShippingSpot(shippingSpot.id)">삭제</button>
                        </div>
                    </sui-table-cell>
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
            <button class="default-shipping-spot" @click="setDefaultShippingSpot">기본 배송지 설정</button>
        </p>
    </div>
</template>

<script>
    import ShippingSpotForm from './ShippingSpotForm';
    import ShippingSpotModel from "./model/ShippingSpotModel";
    import _ from 'lodash';

    export default {
        name: "DeliveryManagement",
        components: {
            ShippingSpotForm,
        },
        data() {
            return {
                newShippingSpotModel: new ShippingSpotModel(),
                openShippingSpotFormFlag: false,
                isModifyForm: false,
                selectedDefault: 0,
                modifyShippingSpotModel: {}
            }
        },
        computed: {
            shippingSpots: function () {
                return this.$store.state.shippingSpotListStore.shippingSpotList;
            },
            selectedDefaultId: function () {
                return this.$store.state.shippingSpotListStore.selectedDefaultId;
            }
        },
        methods: {
            openShippingSpotForm() {
                if (this.shippingSpots.length >= 3) {
                    alert("3개 이상의 배송지를 추가할 수 없습니다.")
                    return
                }
                this.openShippingSpotFormFlag = true;
            },
            closeShippingSpotForm() {
                this.openShippingSpotFormFlag = false;
                this.newShippingSpotModel = new ShippingSpotModel();
            },
            deleteShippingSpot(id) {
                if (confirm('삭제하시겠습니까?')) {
                    this.$store.dispatch('deleteShippingSpot', id);
                    alert('배송지가 삭제되었습니다.');
                }
            },
            async setDefaultShippingSpot() {
                if (this.shippingSpots.length === 0) {
                    alert('등록된 배송지가 없습니다.');
                    return;
                }

                if (this.selectedDefault === this.selectedDefaultId) {
                    alert("이미 기본 배송지입니다.");
                    return;
                }
                await this.$store.dispatch('setDefaultShippingSpot', this.selectedDefault);
                alert('기본 배송지로 설정하였습니다.')
            },
            async getShippingSpotListFromApi() {
                await this.$store.dispatch('ADDRESS_LIST');
            },
            registerNewShippingSpot() {
                if (confirm('저장 하시겠습니까?')) {
                    this.newShippingSpotModel.isDefault = this.shippingSpots.length === 0 ? 1 : 0;
                    this.$store.dispatch('addShippingSpotListFromApi', this.newShippingSpotModel);
                    alert('배송지가 등록되었습니다.');
                    this.selectedDefault = this.selectedDefaultId;
                    this.openShippingSpotFormFlag = false;
                    this.newShippingSpotModel = new ShippingSpotModel();
                }
            },
            modifyAddress() {
                if (confirm('수정하시겠습니까?')) {
                    this.$store.dispatch('MODIFY_ADDRESS', this.modifyShippingSpotModel);
                    alert('배송지가 수정되었습니다.');
                    this.isModifyForm = -1;
                }
            },
            openModifyForm(index) {
                this.isModifyForm = index;
                this.modifyShippingSpotModel = _.cloneDeep(this.shippingSpots[index]);
            },
            closeModifyForm() {
                this.isModifyForm = -1;
            }
        },
        created: async function () {
            await this.getShippingSpotListFromApi();
            this.selectedDefault = this.selectedDefaultId;
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

    .info-content {
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: bold;
        color: #888;
    }

    .content-wrap {
        margin: 40px 0 0;
        text-align: center;
    }

    .default-shipping-spot {
        background: black;
        min-width: 160px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: white;
    }

    .user-name {
        font-weight: bold;
    }

    .spot-type, .spot-details {
        color: #888;
        font-weight: bold;
    }

    .modify-btn {
        background: white;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: black;
    }

    .cancel-btn {
        background: white;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: black;
    }

    .save-btn {
        background: black;
        min-width: 80px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #333;
        color: white;
    }

    button {
        cursor: pointer;
    }
</style>