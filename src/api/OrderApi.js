import request, {ORDER_URL} from './axios';

export const getOrderList = function () {
    return request.get(ORDER_URL + `/normalorderlist`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const getCancelOrder = function () {
    request.put(ORDER_URL + `/cancelorderlist`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const getReturnlOrder = function () {
    request.put(ORDER_URL + `/returnorderlist`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const getOrder = function (orderId) {
    return request.get(`http://192.168.0.228:9999/api/order/order/${orderId}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}
