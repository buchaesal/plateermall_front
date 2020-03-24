class InquiryFormModel {
    id = '';
    territory = '';
    goods = '';
    title = '';
    description = '';
    smsAlarm = false;
    emailAlarm = false;

    constructor(id, territory, goods, title, description, smsAlarm, emailAlarm) {
        this.id = id;
        this.territory = territory;
        this.goods = goods;
        this.title = title;
        this.description = description;
        this.smsAlarm = smsAlarm;
        this.emailAlarm = emailAlarm;
    }
}

export default InquiryFormModel;