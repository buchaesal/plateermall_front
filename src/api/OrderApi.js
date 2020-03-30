import request, {ORDER_URL} from './axios';

export const getOrderList = function (userid) {
    return request.get(ORDER_URL + `/list/normal/${userid}`).then(
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

export const getOrder = function (orderId) {
    return request.get(ORDER_URL + `/${orderId}`)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));
}

export const order = function (order) {
    return request.post(ORDER_URL + `/order`, order)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));

}
