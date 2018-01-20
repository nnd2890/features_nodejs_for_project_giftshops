// Get all input object
var nameInput = document.forms['contact']['name'];
var emailInput = document.forms['contact']['email'];
var phoneInput = document.forms['contact']['phone'];
var messageInput = document.forms['contact']['message'];

// Getting all error display objects
var name_error = document.getElementById('name_error');
var mail_error = document.getElementById('mail_error');
var phone_error = document.getElementById('phone_error');
var message_error = document.getElementById('message_error');

// Setting all eventlisteners
nameInput.addEventListener('blur', nameVerify, true);
emailInput.addEventListener('blur', emailVerify, true);
phoneInput.addEventListener('blur', phoneVerify, true);
messageInput.addEventListener('blur', messageVerify, true);

// Validation function
function contactValidation() {
    // name validation
    if (nameInput.value == "") {
        nameInput.style.border = "1px solid red";
        name_error.textContent = "Name is required";
        nameInput.focus();
        return false;
    }

    // email validation
    if (emailInput.value == "") {
        emailInput.style.border = "1px solid red";
        email_error.textContent = "Email is required";
        emailInput.focus();
        return false;
    }

     // phone validation
     if (phoneInput.value == "") {
        phoneInput.style.border = "1px solid red";
        phone_error.textContent = "Phone is required";
        phoneInput.focus();
        return false;
    }
     // message validation
     if (messageInput.value == "") {
        messageInput.style.border = "1px solid red";
        message_error.textContent = "Message is required";
        messageInput.focus();
        return false;
    }
}

// event handler functions
function nameVerify() {
    if(nameInput.value !="") {
        nameInput.style.border = '1px solid #5E6E66';
        name_error.innerHTML = '';
        return true;
    }
}
function emailVerify() {
    if(emailInput.value !="") {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(emailInput.value) == false) 
        {
            email_error.innerHTML = 'Invalid email address';
            return false;
        }
        emailInput.style.border = '1px solid #5E6E66';
        email_error.innerHTML = "";
        return true;
    }
}
function phoneVerify() {
    if(phoneInput.value !="") {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneInput.value.match(phoneno)) {
            phoneInput.style.border = '1px solid #5E6E66';
            phone_error.innerHTML = '';
            return true;
        }
        else {
            phone_error.textContent = "Invalid phone number";
            return false;
        }
    }
}
function messageVerify() {
    if(messageInput.value !="") {
        messageInput.style.border = '1px solid #5E6E66';
        message_error.innerHTML = "";
        return true;
    }
}




