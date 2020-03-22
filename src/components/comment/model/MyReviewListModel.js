class MyReviewListModel{
    brand='';
    itemName='';
    option='';
    content='';
    photo='';

    constructor(brand, itemName, option, content, photo){
        this.brand = brand;
        this.itemName= itemName;
        this.option = option;
        this.content = content;
        this.photo = photo;
    }
}

export default MyReviewListModel;