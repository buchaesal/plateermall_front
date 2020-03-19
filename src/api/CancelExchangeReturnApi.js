class CancelExchangeReturnApi{
    cancelInfo = {
        cancelCount: 2,
        cancelItems:[
            {
                brand: '이지함',
                itemName: '이지함 스팟케어 블루원 (스팟 케어)',
                quantity: 1,
                price: '10,000원',
                photo: require('./../assets/review.jpg'),
                cancelDate: '2020-03-07 16:44',
                info: '03월 17일 2020-03-17-3210155',
            },
            {
                brand: '이지함',
                itemName: '이지함 스팟케어 블루원22 (스팟 케어)',
                quantity: 1,
                price: '10,000원',
                photo: require('./../assets/review.jpg'),
                cancelDate: '2020-03-07 16:44',
                info: '03월 17일 2020-03-17-3210155',
            },
        ],
    }

    getCancelInfo(userId){

        console.log('api' + userId);
        return this.cancelInfo;
    }

}

export default CancelExchangeReturnApi;