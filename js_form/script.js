// Name box------------------------------------
var fname = document.getElementById("fname");
fname.addEventListener("keypress", f_name);

function f_name(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
        console.log(e);
        return true;
    }
    else {
        e.preventDefault();
    }
}

// Age----------------------------
var age = document.getElementById("age");
age.addEventListener("change", age_);

function age_() {
    var text_age = document.getElementById("age").value;
    var age_regularExpression = /^[1-9]?[0-9]{1}$|^99$/;
    if (!text_age.match(age_regularExpression)) {
        alert("Please enter Valid Age");
    }
    else {
        console.log(text_age);
    }
}

// Gender-----------------------------
var x;
document.getElementsByName("gender").forEach(function (e) {
    e.addEventListener("change", function () {
        x = e.value;
        alert(x);
        console.log(x);
    });
    //console.log(x + "one");
});
// console.log(x + "one");

// Phone Number------------------------------
var phone = document.getElementById("phone_no");
phone.addEventListener("change", phone_number);

function phone_number() {
    var text_phone = document.getElementById("phone_no").value;
    var phone_regularexpression = /^\(?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if (!text_phone.match(phone_regularexpression)) {
        alert("Please Enter match the phone number");
    }
    else {
        console.log(text_phone);
    }
}

// Aadhaar------------------------------------
var aadhar = document.getElementById("aadhaar");
aadhar.addEventListener("change", aadhar_fc);

function aadhar_fc() {
    var text_aadhar = document.getElementById("aadhaar").value;
    var aadhar_regularexpression = /^\(?([1-9]{1})\)?[-. ]?([0-9]{6})[-. ]?([0-9]{5})$/;
    if (!text_aadhar.match(aadhar_regularexpression)) {
        alert("Please match tha aadhaar number");
    }
    else {
        console.log(text_aadhar);
    }
}

// Email----------------------------------
var email = document.getElementById("email");
email.addEventListener("change", email_fc);

function email_fc() {
    var text_email = document.getElementById("email").value;
    var email_regularexpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!text_email.match(email_regularexpression)) {
        alert("Please enter valid email address");
    }
    else {
        console.log(text_email);
    }
}

// Intrest-------------------------------
var intrest = document.getElementsByName("intrest");
for (i = 0; i < intrest.length; i++) {
    intrest[i].addEventListener("click", checkbox);
};

var check_value_value;
function checkbox() {
    let check_box = document.querySelectorAll('input[name="intrest"]:checked');
    check_value = [];
    check_value_value = check_value;
    check_box.forEach(intrest => {
        check_value.push(intrest.value);
    });
    alert(check_value_value);
};

// District---------------------------
var district = document.getElementById("district");
district.addEventListener("change", function () {
    dropdown_district(this)
});

function dropdown_district(event) {
    var selected = event.selectedIndex;
    var option = event.options;
    alert("Index value is : " + option[selected].index + " is " + option[selected].text);
};

// state------------------------
var state = document.getElementById("state");
state.addEventListener("change", function () { dropdown_state(this) });

function dropdown_state(e) {
    var selected = e.selectedIndex;
    var option = e.options;
    alert("Index value is : " + option[selected].index + "is" + option[selected].text);
};

// country-------------------------
var country = document.getElementById("country");
country.addEventListener("keypress", country_fc);

function country_fc(e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
        console.log(e);
        return true
    }
    else {
        console.log(text_country);
        e.preventDefault();
    }
}

// address-----------------------
var address = document.getElementById("address");
address.addEventListener("change", address_fc);
var text_address = address.value

function address_fc() {
    var text_address = document.getElementById("address").value;
    console.log(text_address);
}

// comments--------------------------
var comments = document.getElementById("comments");
comments.addEventListener("change", comments_fc);
var text_comments = comments.value;

function comments_fc() {
    var text_comments = document.getElementById("comments").value;
    console.log(text_comments);
}

// Submit Button---------------
var submit = document.getElementById("submit");
submit.addEventListener("click", submit_fc);
function submit_fc() {
    if (fname.value == '') {
        alert("Enter Your name...");
    }
    else if (age.value == '') {
        alert("Enter Your age");
    }
    else if ((x == '') || (x == undefined)) {
        alert("Enter your Gender");
    }
    else if (phone.value == '') {
        alert("Enter Your Phone Number");
    }
    else if (aadhar.value == '') {
        alert("Enter your Aadhaar Number");
    }
    else if (email.value == '') {
        alert("Enter your email address");
    }
    else if ((check_value_value == '') || (check_value_value == undefined)) {
        alert("Enter select your checkbox");
    }
    else if ((district.value == '') || (district.value == undefined)) {
        alert("Enter Your District");
        // alert(district.value);
    }
    else if (state.value == '') {
        alert("Enter your state");
    }
    else if (country.value == '') {
        alert("Enter your country");
    }
    else if (address.value == '') {
        alert("Enter Your Address");
    }
    else if (comments.value == '') {
        alert("Enter Your any comments");
    }
    else {
        alert("Name : " + fname.value + '\n' +
            "Age : " + age.value + '\n' +
            "Gender : " + x + '\n' +
            "Phone Number : " + phone.value + '\n' +
            "Aadhaar Number : " + aadhar.value + '\n' +
            "Email Id : " + email.value + '\n' +
            "Intrest : " + check_value_value + '\n' +
            "District : " + district.value + '\n' +
            "State : " + state.value + '\n' +
            "Country : " + country.value + '\n' +
            "Address : " + address.value + '\n' +
            "Comments : " + comments.value + '\n'
        );
    }
};

