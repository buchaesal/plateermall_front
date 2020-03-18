class UserModel {
    email = '';
    password = '';
    username = '';
    phone = '';
    acceptEmail = '';
    acceptSms = '';

    constructor(email, password, username, phone, acceptEmail, acceptSms){
        this.email = email;
        this.password = password;
        this.username = username;
        this.phone = phone;
        this.acceptEmail = acceptEmail;
        this.acceptSms = acceptSms;
    }
}
export default UserModel;