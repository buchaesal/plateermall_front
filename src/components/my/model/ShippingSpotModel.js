class ShippingSpotModel {
    isDefaultShippingSpot = 'N';
    spotName= '';
    receiverName = '';
    lineNumber = '';
    phoneNumber = '';
    roadAddress = '';
    zipcodeAddress = '';

    constructor(isDefaultShippingSpot, spotName, receiverName, lineNumber, phoneNumber, roadAddress, zipcodeAddress){
        this.isDefaultShippingSpot = isDefaultShippingSpot;
        this.spotName = spotName;
        this.receiverName = receiverName;
        this.lineNumber = lineNumber;
        this.phoneNumber = phoneNumber;
        this.roadAddress = roadAddress;
        this.zipcodeAddress = zipcodeAddress;
    }
}

export default ShippingSpotModel;