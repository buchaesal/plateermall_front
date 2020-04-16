import request,{SHIPPINGSPOT_URL} from './axios';

export const getShippingSpotList = function () {
    return request.get(SHIPPINGSPOT_URL+'/list');
}

export const addDeliveryAddress = function (deliveryAddress) {
    return request.post(SHIPPINGSPOT_URL+'/add', deliveryAddress)
}

export const deleteDeliveryAddress = function (id) {
    return request.delete(SHIPPINGSPOT_URL+`/delete/${id}`);
}

export const setDefaultAddress = function (id) {
    return request.get(SHIPPINGSPOT_URL+`/setDefaultAddr/${id}`);
}

export const modifyAddress = function (address) {
    return request.put(SHIPPINGSPOT_URL+'/update',address);
}
class ShippingSpotListApi {
}

export default ShippingSpotListApi;