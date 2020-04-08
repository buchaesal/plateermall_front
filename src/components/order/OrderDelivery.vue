<template>
    <div class="delivery-info">
        <span style="margin-right: 13%; float: left;" >배송지</span>
        <div class="default">
            {{defaultAddress.roadAddress}}
            {{defaultAddress.zipcodeAddress}}
            {{defaultAddress.remainAddress}}        
            <br>
            <sui-button @click="changeAddress" size="tiny" style="margin-left: 18%; margin-top: 3%;" content="변경" />
            <sui-button @click="registerAddress" size="tiny" content="신규배송지 등록" />
        </div>

        <!--배송지 변경 모달-->
        <sui-modal v-model="changeModalOpen">
            <sui-modal-header>배송지 변경</sui-modal-header>
            <sui-modal-content scrolling image>
                <sui-modal-description>
                    <sui-item-group divided>
                    <sui-item class='address-item' style="border-bottom: 1px solid #D9D9D9;" v-for='(address, index) in addressInfo.data' :key='index'>
                    <sui-checkbox v-model="addressIndex" radio style="margin-right: 2%;"/>
                    <sui-item-content class='address'>
                        <sui-item-header>{{address.receiver}} ({{address.spotAlias}})<span v-show="address.isDefault==1" style="font-size:12px;">  기본배송지</span></sui-item-header>
                        <sui-item-meta>
                            {{address.roadAddress}}
                            {{address.zipcodeAddress}}
                            {{address.remainAddress}}
                            <br>
                            {{address.phoneNumber}}
                            <br><br>    
                        </sui-item-meta>
                    </sui-item-content>
                    </sui-item>
                </sui-item-group>
                </sui-modal-description>
            </sui-modal-content>

            <sui-modal-actions>
                <sui-button @click.native="cancelChangeAddress(1)">취소</sui-button>
                <sui-button @click="changeAddress">배송지 변경</sui-button>
            </sui-modal-actions>
        </sui-modal>

        <sui-modal v-model="registerModalOpen">
            <sui-modal-header>신규 배송지 등록</sui-modal-header>
            <sui-modal-content scrolling image>
                <sui-modal-description>
                    <ShippingSpotForm :targetShippingSpot='newShippingSpotModel'/>
                </sui-modal-description>
            </sui-modal-content>

            <sui-modal-actions>
                <sui-button @click.native="cancelChangeAddress(2)">취소</sui-button>
                <sui-button @click="registerAddress">배송지 변경</sui-button>
            </sui-modal-actions>
        </sui-modal>
        <br>
        
        <span style="margin-right: 10%;">배송메세지</span>
        <sui-dropdown style="margin-right: 3%;" text="옵션보기" selection :options="deliveryOptions" v-model="currentMessage"/>
    
    </div>
</template>

<script>
import {getShippingSpotList} from "../../api/ShippingSpotListApi";    
import ShippingSpotForm from "../../components/my/ShippingSpotForm";
import ShippingSpotModel from "../../components/my/model/ShippingSpotModel";

    export default {
        name: "OrderDelivery",
        components: {
           ShippingSpotForm,
        },
        data() {
            return {
                newShippingSpotModel: new ShippingSpotModel(),
                addressIndex:"0",
                changeModalOpen: false,
                registerModalOpen: false,
                addressInfo:[],
                currentMessage:null,
                defaultAddress:{},
                deliveryOptions: [
                    {
                        text: '배송 메시지 선택',
                        value: '',
                    },
                    {
                        text: '부재 시 경비실에 맡겨주세요',
                        value: '부재 시 경비실에 맡겨주세요',
                    },
                    {
                        text: '부재 시 핸드폰으로 연락바랍니다.',
                        value: '부재 시 핸드폰으로 연락바랍니다.',
                    },
                    {
                        text: '문 앞에 놓아주세요',
                        value: '문 앞에 놓아주세요',
                    },
                ],
            }
        },
        methods: {
            changeAddress(){
                this.changeModalOpen = !this.changeModalOpen;
            },
            registerAddress(){
                this.registerModalOpen = !this.registerModalOpen;
            },
            cancelChangeAddress(modalIndex){
                if(modalIndex==1){
                    this.changeModalOpen = !this.changeModalOpen;
                }else{
                    this.registerModalOpen = !this.registerModalOpen;
                }
            }
        },
        async created(){
            this.addressInfo = await getShippingSpotList();
            
            for(let index in this.addressInfo.data){

                if(this.addressInfo.data[index].isDefault == 1){
                    this.addressIndex = index+ ' ';
                    this.defaultAddress = this.addressInfo.data[index];
                }
            }

        },

    }
</script>

<style scoped>

.address-item{
    margin-bottom: 2%;
}
    
</style>