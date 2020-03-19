class ShippingSpotModel {
    isDefaultShippingSpot = '';
    receiverName = '';
    lineNumber = '';
    phoneNumber = '';
    roadAddress = '';
    zipcodeAddress = '';

    constructor(isDefaultShippingSpot, receiverName, lineNumber, phoneNumber, roadAddress, zipcodeAddress){
        this.isDefaultShippingSpot = isDefaultShippingSpot;
        this.receiverName = receiverName;
        this.lineNumber = lineNumber;
        this.phoneNumber = phoneNumber;
        this.roadAddress = roadAddress;
        this.zipcodeAddress = zipcodeAddress;
    }
}

export default ShippingSpotModel;