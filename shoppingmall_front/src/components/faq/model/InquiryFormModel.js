class InquiryFormModel {
    goods = '';
    title = '';
    content = '';
    answerAlarm = false;
    emailReceive = false;

    constructor(goods, title, content, answerAlarm, emailReceive) {
        this.goods = goods;
        this.title = title;
        this.content = content;
        this.answerAlarm = answerAlarm;
        this.emailReceive = emailReceive;
    }
}

export default InquiryFormModel;