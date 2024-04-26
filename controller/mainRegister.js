// Functions Chung
const validation = new Validation();

function getValue(query) {
  return document.querySelector(query).value;
}

function setValue(query, newValue) {
  return document.querySelector(query).value = newValue;
}

function setLocalStorage(User) {
  //*lưu user xuống localstorage
  //localStorage: object có sẵn của js , setItem("tên localStorage", chuỗi JSON): phương thức lưu xuống local
  // chuyển từ array object (có phương thức) => JSON (không lưu được phương thức) => stringify
  localStorage.setItem("User", JSON.stringify(User))
}


function hienThi(user) {
  let content = "";

  // Loop through each user in the array
  user.forEach(function (currentUser) {
    let trString = `
        <div class="row">
          <div class="col-12 form-group">
            <label for="">Username/Email : </label>
            <input type="text" class="form-control" id="txtEmail" value="${currentUser.email}"> <span id="spanEmailCus" class="text-danger"></span>
          </div>
          <div class="col-12 form-group">
            <label for="">Password: </label>
            <input type="password" class="form-control" id="txtPass" value="${currentUser.password}"> <span id="spanMatKhau" class="text-danger"></span>
          </div>
  
          <button type="submit" class="btn btn-primary me-2">Log In</button>
  
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal"
                  style="margin-left: 30px">
            Click here sign up
          </button>
        </div>
      `;

    content += trString;
  });

  document.querySelector("#formdangNhap").innerHTML = content;
}


function registerUser() {
  let isValid = true;
  let InputPhone = getValue('#InputPhone');
  let InputName = getValue('#InputName');
  let InputGender = getValue('#gender');
  let InputEmail = getValue('#InputEmail');
  let InputPassword = getValue('#InputPassword');

  // Check Email Validation
  isValid &= validation.kiemTraRong(InputEmail, '#spanInputEmail', "Email can not be empty 👺") && validation.kiemTraEmail(InputEmail, '#spanInputEmail', "Email is not in the correct email format 👺")

  //Check Name Validation
  isValid &= validation.kiemTraRong(InputName, '#spanInputName', "Name can not be empty 👺") && validation.kiemTraTen(InputName, '#spanInputName', "Name can not contain special characters 👺")

  //Check Password Validation
  isValid &= validation.kiemTraRong(InputPassword, '#spanInputPassword', "Password can not be empty 👺") && validation.kiemTraPassword(InputPassword, '#spanInputPassword', "Password is not in the correct format, it must contain both number, alphebetical characters and special characters 👺")

  //Check Phone Number
  isValid &= validation.kiemTraRong(InputPhone, '#spanPhone', "Phone Number can not be empty 👺") && validation.kiemTraPhone(InputPhone, '#spanPhone', "Phone number is not in the correct phone number format👺")


  if (isValid) {
    let user = new User(InputEmail, InputPassword, InputName, InputGender, InputPhone);
    // console.log(user);

    // Save to backend using Axios (assuming Axios is set up)
    let objPromise = axios({
      method: 'post',
      url: 'https://shop.cyberlearn.vn/api/Users/signup',
      data: user
    })
    objPromise.then(function (result) {
      // Success
      console.log(result);
      alert('Success! Your account has been created.');
      document.querySelector('#exampleModal .close').click();
    })
      .catch(function (error) {
        // Error handling (consider displaying user-friendly message)
        alert("Failed to register user. Please try again.");
        console.error(error);
      });
  }
}

function logIn() {
  let isValid = true;
  let InputEmail = getValue('#txtEmail');
  let InputPassword = getValue('#txtPass');


  isValid &= validation.kiemTraRong(InputEmail, '#spanEmailCus', "Email can not be empty 👺") && validation.kiemTraEmail(InputEmail, '#spanEmailCus', "Email is not in the correct email format 👺")
  isValid &= validation.kiemTraRong(InputPassword, '#spanMatKhau', "Password can not be empty 👺") && validation.kiemTraPassword(InputPassword, '#spanMatKhau', "Password is not in the correct format, it must contain both number, alphebetical characters and special characters 👺")

  if (isValid) {
    console.log(InputEmail, InputPassword)
  }
}

