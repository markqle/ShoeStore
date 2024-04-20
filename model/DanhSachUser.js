class DanhSachUser{
    constructor(){
        this.mangUser = []
    }

    // thêm / đăng ký new user 
    themUser = function (userObj) {
        //  thêm user vô trong mảng user
        this.mangUser.push(userObj)
    }
}
