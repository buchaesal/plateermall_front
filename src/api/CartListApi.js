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
    request.post(CART_URL, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    });
}

export const requestDeleteCart = function(cart) {
    request.delete(CART_URL, {
            data : cart
        }).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestCheckedDeleteCartList = function(cartList) {
    request.delete(CART_URL + `/list`, { 
            data : cartList
        }).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestChangeQuantity = function(cart) {
    request.put(CART_URL, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

