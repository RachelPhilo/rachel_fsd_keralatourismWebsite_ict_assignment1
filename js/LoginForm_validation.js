var inputEmail=document.getElementById("inputEmail");
var inputPassword=document.getElementById("inputPassword");
var emailError=document.getElementById("emailError");
var pwdError=document.getElementById("pwdError");


function validateEmail(){
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    
    if(regexp.test(inputEmail.value.trim)){
        true;
    }
    else{
        inputEmail.style.backgroundColor="#fbff0060";
        emailError.innerHTML="Invalid Email format";
        
    }
}

function validatePwd(){
    var pwdexp=/^([A-Za-z0-9]+)$/;
    if(pwdexp.test(inputPassword.value.trim)){
         true;
    }
    else if (inputPassword.value.length<=3){
        inputPassword.style.backgroundColor="#ff00002f";
        pwdError.innerHTML="Poor Password";
    }
    else if(inputPassword.value.length<=6){
        inputPassword.style.backgroundColor="#ff730060";
        pwdError.innerHTML="Medium Password";
        
    }
    else if(inputPassword.value.length>=8){
        inputPassword.style.backgroundColor="#2bff0060";
        pwdError.innerHTML="Strong Password";
        
    }
    else{
        inputPassword.style.backgroundColor="#fbff0060";
        pwdError.innerHTML="Invalid Password format";
        
    }
}

function allFunc(){
    validateEmail();
    validatePwd();
}
