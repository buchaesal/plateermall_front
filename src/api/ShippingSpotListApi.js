import ShippingSpotModel from "../components/my/model/ShippingSpotModel";
import request from './axios';

//api/user/~~
//리스트받아오느거
//추가 삭제 수정
//기본배송지변경
export const getShippingSpotList = function () {
    return request.get('http://localhost:9999/api/address/list');
}

export const addDeliveryAddress = function (deliveryAddress) {
    request.post('http://localhost:9999/api/address/add', deliveryAddress)
        .then((res) => {
            return res.data;
        })
        .catch(function (err) {
            console.log(err);
        })
}
class ShippingSpotListApi {
    shippingSpotList = [];

    constructor() {
        this.shippingSpotList.push(new ShippingSpotModel(1,true, '우리집', '아무개', '010-1234-5678', '010-1234-5678',
        '서울시 송파구 문정로 32', '서울시 송파구 문정동 래미안아파트 111-1501', '111-1501'));
        this.shippingSpotList.push(new ShippingSpotModel(2,false, '우리 회사','개무아', '010-2535-4578', '010-2535-4578',
        '서울시 송파구 장지로 32', '서울시 송파구 장지동 어떤 빌라', '142-13'));
    }

    getShippingSpotList() {
        return this.shippingSpotList;
    }
}

export default ShippingSpotListApi;