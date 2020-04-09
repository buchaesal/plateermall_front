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

export const getFullOrder = function (orderId) {
    return request.get(ORDER_URL + `/full/${orderId}`)
        .then(response => {return response.data})
        .catch(err => console.log(err))
}

export const order = function (order) {
    return request.post(ORDER_URL + `/order`, order)
        .then((response) => {return response.data})
        .catch((err) => console.log(err));

}

export const changeState = function (original, changed, orderId) {
    return request.get(ORDER_URL + `/${original}/${changed}/${orderId}`)
        .then(response => response.data)
        .catch(err => console.log(err));
}

export const getStateCount = function (state, userid) {
    return request.get(ORDER_URL + `/count/${state}/${userid}`)
        .then(response => response.data)
        .catch((err) => console.log(err));
}

export const getSpecificStatusOrderList = function (state, specificState, userid) {
    return request.get(ORDER_URL + `/specificstatelist/${state}/${specificState}/${userid}`)
        .then(response => response.data)
        .catch(err => console.log(err))
}