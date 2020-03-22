class UserModel {
    email = '';
    password = '';
    username = '';
    phone = '';
    acceptEmail = '';
    acceptSms = '';

    constructor(email, password, username, phone){
        this.email = email;
        this.password = password;
        this.username = username;
        this.phone = phone;
        this.acceptEmail = 'N';
        this.acceptSms = 'N';
    }
}
export default UserModel;