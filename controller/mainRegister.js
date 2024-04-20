// Functions Chung
function getValue(query) {
    return document.querySelector(query).value;
 }
 
 function setValue(query, newValue) {
    return document.querySelector(query).value = newValue;
 }
 

 function registerUser(){
    let InputPhone = document.querySelector('#InputPhone').value;
    let InputName = document.querySelector('#InputName').value;
    let InputGender = document.querySelector('#gender').value;
    let InputEmail = document.querySelector('#InputEmail').value;
    let InputPassword = document.querySelector('#InputPassword').value;
    //TODO: validation
    console.log(InputPhone, InputName, InputGender, InputPassword,InputEmail)
 }
 
