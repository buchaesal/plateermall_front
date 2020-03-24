import request,{CART_URL} from './axios';

export const requestCartList = function(){
    return request.get("http://localhost:8081/api/cart").then(
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

export const requestDeleteCart = function(cartCode) {
    request.delete(CART_URL + `/${cartCode}`).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestCheckedDeleteCartList = function(cartList) {
    request.delete(CART_URL, cartList).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

export const requestChangeStock = function(cart) {
    request.put(CART_URL, cart).then(
        (response) => {
            return response.data;
        }
    ).catch(function(error) {
        console.log(error);
    })
}

