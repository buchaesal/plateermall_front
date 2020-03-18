class RatingGraphModel{
    deliveryCommon= 0;
    deliveryBest= 0;
    deliveryWorst= 0;
    designCommon= 0;
    designBest= 0;
    designWorst= 0;
    sizeCommon= 0;
    sizeBest= 0;
    sizeWorst= 0;
    
    constructor(deliveryCommon, deliveryBest, deliveryWorst, designCommon, designBest, designWorst, sizeCommon, sizeBest, sizeWorst){
        this.deliveryCommon = deliveryCommon;
        this.deliveryBest = deliveryBest;
        this.deliveryWorst = deliveryWorst;
        this.designCommon = designCommon;
        this.designBest = designBest;
        this.deliveryWorst = designWorst;
        this.sizeCommon = sizeCommon;
        this.sizeBest = sizeBest;
        this.sizeWorst = sizeWorst;
    }
}