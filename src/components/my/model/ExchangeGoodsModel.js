class ExchangeGoodsModel{
    
    userId='';
    brand= '';
    itemName= '';
    quantity= 0;
    price= '';
    photo= '';
    exchangeDate= '';
    info= '';

    constructor(brand, itemName, quantity, price, photo, exchangeDate, info){
        this.brand= brand;
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.photo = photo;
        this.exchangeDate = exchangeDate;
        this.info = into;
    }
}

export default ExchangeGoodsModel;