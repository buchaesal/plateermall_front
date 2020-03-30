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

export const deleteDeliveryAddress = function (id) {
    return request.delete(`http://localhost:9999/api/address/delete/${id}`);
}

export const setDefaultAddress = function (id) {
    return request.get(`http://localhost:9999/api/address/${id}`);
}
class ShippingSpotListApi {
}

export default ShippingSpotListApi;