import ShippingSpotModel from "../components/my/model/ShippingSpotModel";
import request,{COMMENTS_URL} from './axios';

export const requestShippingSpot = function () {

    request.get(COMMENTS_URL + `/getshippingspotlist`).then(
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
        '서울시 송파구 문정로 32 111-1501', '서울시 송파구 문정동 래미안아파트 111-1501'));
        this.shippingSpotList.push(new ShippingSpotModel('N', '우리 회사','개무아', '010-2535-4578', '010-2535-4578', 
        '서울시 송파구 장지로 32-14', '서울시 송파구 장지동 어떤 빌라'));
        this.shippingSpotList.push(new ShippingSpotModel('N', '남의 회사','무개아', '010-2535-4578', '010-2535-4578', 
        '서울시 송파구 장지로 32-14', '서울시 송파구 장지동 어떤 빌라'));
    }

    getShippingSpotList() {
        return this.shippingSpotList;
    }
}

export default ShippingSpotListApi;