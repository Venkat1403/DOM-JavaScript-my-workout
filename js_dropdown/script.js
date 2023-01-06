var state_array = ["Tamil Nadu", "Bihar", "Himachal Pradesh", "Manipur", "Odisha", "Tripura", "Sikkim", "Mizoram", "Nagaland", "Jharkhand"];
var state = document.getElementById("state");
document.getElementById("state").addEventListener("change", state_dropdown);
document.getElementById("district").addEventListener("change", district_dropdown);
document.getElementById("taluk").addEventListener("change", taluk_dropdown);

document.getElementById("state").addEventListener("change", function () { state_dropdown2(this) });

for (var i = 0; i < state_array.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = state_array[i];
    opt.value = state_array[i];
    state.appendChild(opt);
}

function setDefault(first, element) {
    var opt = document.createElement("option");
    opt.innerHTML = first;
    opt.value = first;
    element.appendChild(opt);
}


// State value change then run the function----------------------------------
var state_prev = 0;
function state_dropdown2(e) {
    var current_index = e.selectedIndex;
    var option = e.options;
    console.log("The index value is :" + option[current_index].index + "The State is :" + option[current_index].text);
    if (state_prev != current_index && state_prev != 0) {
        document.getElementById("district").innerHTML = "";
        setDefault("select your District", document.getElementById("district"));

        document.getElementById("taluk").innerHTML = "";
        setDefault("Select Your taluk", document.getElementById("taluk"));

        document.getElementById("village").innerHTML = "";
        setDefault("Select Your Village", document.getElementById("village"));
    }
    else {
        console.log(option[current_index].text);
    }
    state_prev = e.selectedIndex;
}




// State dropdown click view district value---------------------------------------
function state_dropdown() {
    var district_array = ["Tirunelveli", "Coimbatore", "Dharmapuri", "Dindigul", "Erode", "Karur", "Kanyakumari", "Tiruppur", "Tiruvannamalai", "Tenkasi"];
    var district = document.getElementById("district");

    if (document.getElementById('state').selectedIndex != 0) {
        for (var i = 0; i < district_array.length; i++) {
            var opt = document.createElement("option");
            opt.innerHTML = district_array[i];
            opt.value = district_array[i];
            district.appendChild(opt);
        }

        var district_value = document.getElementById("district");
        district_value.addEventListener("change", function () { district_dropdown2(this) });
    }
}
// District value change then run the function----------------------------------
var district_prev = 0;
function district_dropdown2(e) {
    var current_index = e.selectedIndex;
    var option = e.options;
    console.log("The index value is :" + option[current_index].index + "The District is :" + option[current_index].text);
    if (district_prev != current_index && district_prev != 0) {
        document.getElementById("state").selectedIndex = 0;

        document.getElementById("district").innerHTML = "";
        setDefault("select your District", document.getElementById("district"));

        document.getElementById("taluk").innerHTML = "";
        setDefault("Select Your taluk", document.getElementById("taluk"));

        document.getElementById("village").innerHTML = "";
        setDefault("Select Your Village", document.getElementById("village"));
    }
    else {
        console.log(option[current_index].text);
    }
    district_prev = e.selectedIndex;
}




// District dropdown click view taluk values----------------------------------------------------------
function district_dropdown() {
    var taluk_array = ["Palayamkottai", "Manur", "Cheranmahadevi", "Ambasamudiram", "Nanguneri", "Radhapuram", "Thisayanvilai", "Sivagiri", "Alangulam"];
    var taluk = document.getElementById("taluk");
    for (var i = 0; i < taluk_array.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = taluk_array[i];
        opt.value = taluk_array[i];
        taluk.appendChild(opt);
    }
    var taluk_value = document.getElementById("taluk");
    taluk_value.addEventListener("change", function () { taluk_dropdown2(this) });
}
// Taluk value change then run the function----------------------------------
var taluk_prev = 0;
function taluk_dropdown2(e) {
    var current_index = e.selectedIndex;
    var option = e.options;
    console.log("The index value is :" + option[current_index].index + "The Taluk is :" + option[current_index].text);
    if (taluk_prev != current_index && taluk_prev != 0) {
        document.getElementById("state").selectedIndex = 0;

        document.getElementById("district").innerHTML = "";
        setDefault("select your District", document.getElementById("district"));

        document.getElementById("taluk").innerHTML = "";
        setDefault("Select Your taluk", document.getElementById("taluk"));

        document.getElementById("village").innerHTML = "";
        setDefault("Select Your Village", document.getElementById("village"));
    }
    else {
        console.log(option[current_index].text);
    }
    taluk_prev = e.selectedIndex;
}




//Taluk dropdown click view village value---------------------------------------------------- 
function taluk_dropdown() {
    var village_array = ["Vellanguli", "Kallidai", "Veeravanallur", "Pathamadai", "V.K Puram", "Papanasam", "Dana", "Anna Nagar", "Mukudal", "T.nagar"];
    var village_value = document.getElementById("village");
    for (i = 0; i < village_array.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = village_array[i];
        opt.value = village_array[i];
        village_value.appendChild(opt);
    }
    var village_2nd = document.getElementById("village");
    village_2nd.addEventListener("change", function () { village_dropdown2(this) });
}
var village_prev = 0;
// Village value change then run the function----------------------------------
function village_dropdown2(e) {
    var current_index = e.selectedIndex;
    var option = e.options;
    console.log("The index value is :" + option[current_index].index + "The Village is :" + option[current_index].text);
    if (village_prev != current_index && village_prev != 0) {
        document.getElementById("state").selectedIndex = 0;

        document.getElementById('district').innerHTML = "";
        setDefault("select you disctrict", document.getElementById("district"));

        document.getElementById("taluk").innerHTML = "";
        setDefault("Select Your Taluk", document.getElementById("taluk"));

        document.getElementById("village").innerHTML = "";
        setDefault("Select Your Village", document.getElementById("village"));
    }
    else {
        console.log(option[current_index].text);
    }
    village_prev = e.selectedIndex;
}