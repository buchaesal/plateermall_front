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

export const getCancelOrderList = function (userid) {
    return request.get(ORDER_URL + `/list/cancel/${userid}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const getExchangeOrderList = function (userid) {
    return request.get(ORDER_URL + `/list/exchange/${userid}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const getReturnOrderList = function (userid) {
    return request.get(ORDER_URL + `/list/return/${userid}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}

export const getReturnOrder = function () {
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
