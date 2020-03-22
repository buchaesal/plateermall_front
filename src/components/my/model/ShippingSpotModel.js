class ShippingSpotModel {
    isDefaultShippingSpot = 'N';
    spotName= '';
    receiverName = '';
    lineNumber = '';
    phoneNumber = '';
    roadAddress = '';
    zipcodeAddress = '';
    remainAddress = '';

    constructor(isDefaultShippingSpot, spotName, receiverName, lineNumber, phoneNumber, roadAddress, zipcodeAddress, remainAddress){
        this.isDefaultShippingSpot = isDefaultShippingSpot;
        this.spotName = spotName;
        this.receiverName = receiverName;
        this.lineNumber = lineNumber;
        this.phoneNumber = phoneNumber;
        this.roadAddress = roadAddress;
        this.zipcodeAddress = zipcodeAddress;
        this.remainAddress = remainAddress;
    }
}

export default ShippingSpotModel;