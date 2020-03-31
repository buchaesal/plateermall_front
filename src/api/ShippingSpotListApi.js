import request,{SHIPPINGSPOT_URL} from './axios';

//api/user/~~
//리스트받아오느거
//추가 삭제 수정
//기본배송지변경
export const getShippingSpotList = function () {
    return request.get(SHIPPINGSPOT_URL+'/list');
}

export const addDeliveryAddress = function (deliveryAddress) {
    request.post(SHIPPINGSPOT_URL+'/add', deliveryAddress)
        .then((res) => {
            return res.data;
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const deleteDeliveryAddress = function (id) {
    return request.delete(SHIPPINGSPOT_URL+`/delete/${id}`);
}

export const setDefaultAddress = function (id) {
    return request.get(SHIPPINGSPOT_URL+`/setDefaultAddr/${id}`);
}
class ShippingSpotListApi {
}

export default ShippingSpotListApi;