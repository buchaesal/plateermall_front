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

export const cancelOrder = function (id) {
    request.put(ORDER_URL + `/${id}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function (err) {
        console.log(err);
    })
}
