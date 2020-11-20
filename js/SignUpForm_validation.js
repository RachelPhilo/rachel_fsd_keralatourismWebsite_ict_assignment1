var inputPhone=document.getElementById("inputPhone");
var phoneError=document.getElementById("phoneError");


function phonenum(){
    var phoneNum=/^([0-9]+)$/;
    if(phoneNum.test(inputPhone.value.trim) && inputPassword.value.length==10){
            true;
    }
    else{
        inputPhone.style.backgroundColor="#fbff0060";
        phoneError.innerHTML="Invalid PhoneNumber format";
    }
}

function phonenum1(){
    var phoneNum1=/^([0-9]+)\-([0-9]+)\-([0-9]+)$/;
    if(phoneNum1.test(inputPhone.value.trim) && inputPassword.value.length==10){
            true;
    }
    else{
        inputPhone.style.backgroundColor="#fbff0060";
        phoneError.innerHTML="Invalid PhoneNumber format";
    }
    
    
}

function phonenum2(){
    var phoneNum2=/^([0-9]+)\.([0-9]+)\.([0-9]+)$/;
    if(phoneNum2.test(inputPhone.value.trim) && inputPassword.value.length==10){
            true;
    }
    else{
        inputPhone.style.backgroundColor="#fbff0060";
        phoneError.innerHTML="Invalid PhoneNumber format";
    }
}

function phonenum3(){
    var phoneNum3=/^([0-9]+)\s([0-9]+)\s([0-9]+)$/;
    if(phoneNum3.test(inputPhone.value.trim) && inputPassword.value.length==10){
            true;
    }
    else{
        inputPhone.style.backgroundColor="#fbff0060";
        phoneError.innerHTML="Invalid PhoneNumber format";
    }
}

function allPhone(){
    phonenum();
    phonenum1();
    phonenum2();
    phonenum3();
}