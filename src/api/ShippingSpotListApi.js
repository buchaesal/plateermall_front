import ShippingSpotModel from "../components/my/model/ShippingSpotModel";
import request,{SHIPPINGSPOT_URL} from './axios';

//api/user/~~
//리스트받아오느거
//추가 삭제 수정
//기본배송지변경
export const getShippingSpotList = function (useremail) {

    request.get(SHIPPINGSPOT_URL + `/getshippingspotlist/${useremail}`).then(
        (response) => {
            return response.data
        }
    ).catch(function (error) {
        console.log(error);
    });
}
class ShippingSpotListApi {
    shippingSpotList = [];

    constructor() {
        this.shippingSpotList.push(new ShippingSpotModel('Y', '우리집', '아무개', '010-1234-5678', '010-1234-5678', 
        '서울시 송파구 문정로 32', '서울시 송파구 문정동 래미안아파트 111-1501', '111-1501'));
        this.shippingSpotList.push(new ShippingSpotModel('N', '우리 회사','개무아', '010-2535-4578', '010-2535-4578', 
        '서울시 송파구 장지로 32', '서울시 송파구 장지동 어떤 빌라', '142-13'));
        this.shippingSpotList.push(new ShippingSpotModel('N', '남의 회사','무개아', '010-2535-4578', '010-2535-4578', 
        '서울시 송파구 장지로 32', '서울시 송파구 장지동 어떤 빌라', '1423-14'));
    }

    getShippingSpotList() {
        return this.shippingSpotList;
    }
}

export default ShippingSpotListApi;