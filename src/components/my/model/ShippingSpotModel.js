class ShippingSpotModel {
    id = null;
    isDefault = false;
    spotAlias= '';
    receiver = '';
    contactNumber = '';
    phoneNumber = '';
    roadAddress = '';
    zipcodeAddress = '';
    remainAddress = '';

    constructor(id,isDefault, spotAlias, receiver, contactNumber, phoneNumber, roadAddress, zipcodeAddress, remainAddress){
        this.id = id;
        this.isDefault = isDefault;
        this.spotAlias = spotAlias;
        this.receiver = receiver;
        this.contactNumber = contactNumber;
        this.phoneNumber = phoneNumber;
        this.roadAddress = roadAddress;
        this.zipcodeAddress = zipcodeAddress;
        this.remainAddress = remainAddress;
    }
}

export default ShippingSpotModel;