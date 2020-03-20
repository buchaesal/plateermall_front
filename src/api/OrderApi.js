import request, {ORDER_URL} from './axios';

export const getOrderList = function () {
    request.get(ORDER_URL).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    });
}

export const cancelOrder = function (order) {
    request.put(ORDER_URL, order).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}