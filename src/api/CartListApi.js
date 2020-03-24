import request,{CART_URL} from './axios';

export const requestCartList = function(){
    return request.get(CART_URL).then(
        (response) => {
            return response.data;
        }
    ).catch(function (error) {
        console.log(error);
    });
}

export const requestAddCart = function(cart) {
    request.post(CART_URL + `/addCart`, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    });
}

export const requestDeleteCart = function(cartCode) {
    request.delete(CART_URL + `/deleteCart` + `/${cartCode}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestCheckedDeleteCartList = function(cartList) {
    request.delete(CART_URL + `/deleteCartList`, cartList).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestChangeStock = function(cart) {
    request.put(CART_URL + `/changeStock`, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

