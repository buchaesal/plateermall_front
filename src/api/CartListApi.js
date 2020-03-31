import request,{CART_URL} from './axios';

export const requestCartList = function(){
    return request.get(CART_URL);
}

export const requestAddCart = function(cart) {
    request.post(CART_URL, cart)
        .catch(function(error) {
            console.log(error);
    })
}

export const requestDeleteCart = function(cart) {
    return request.delete(CART_URL, { data : cart });
}

export const requestCheckedDeleteCartList = function(cartList) {
    return request.delete(CART_URL + `/list`, { data : cartList });
}

export const requestChangeQuantity = function(cart) {
    return request.put(CART_URL, cart);
}

