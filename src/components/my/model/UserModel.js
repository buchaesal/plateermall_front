class UserModel {
    email = '';
    password = '';
    name = '';
    phoneNumber = '';
    smsAgree = false;
    emailAgree = false;
    point = 0;
    coupons = [];

    constructor(email, password, name, phoneNumber, smsAgree, emailAgree, point, coupons){
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.smsAgree = smsAgree;
        this.emailAgree = emailAgree;
        this.point = point;
        this.coupons = coupons;
    }
}
export default UserModel;