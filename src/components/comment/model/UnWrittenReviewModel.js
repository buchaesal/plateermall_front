class UnWrittenReviewModel{
    brand='';
    itemName='';
    option='';
    photo='';
    purchaseDate='';
    dueDate='';

    constructor(brand, itemName, option, photo, purchaseDate, dueDate){
        this.brand= brand;
        this.itemName = itemName;
        this.photo = photo;
        this.purchaseDate = purchaseDate;
        this.dueDate = dueDate;
    }
}

export default UnWrittenReviewModel;