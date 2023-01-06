// alert("hi");
document.getElementById("state_parent").style.visibility = "visible";
document.getElementById("district_parent").style.visibility = "hidden";
document.getElementById("taluk_parent").style.visibility = "hidden";
document.getElementById("village_parent").style.visibility = "hidden";


var state = document.getElementById("state_parent");
state.addEventListener("change", state_fc);
function state_fc() {
    document.getElementById("district_parent").style.visibility = "visible";
    var state_text = document.getElementById("state");
    alert(state_text.value);
    state_text.addEventListener("change", state_fc2);
    function state_fc2() {
        // alert("state and nxt all hide");
        // document.getElementById("state").selectedIndex = "0";
        document.getElementById("district").selectedIndex = "0";
        document.getElementById("taluk").selectedIndex = "0";
        document.getElementById("village").selectedIndex = "0";
    }
}


var district = document.getElementById("district_parent");
district.addEventListener("change", district_fc);
function district_fc() {
    document.getElementById("taluk_parent").style.visibility = "visible";
    var district_text = document.getElementById("district");
    alert(district_text.value);
    district_text.addEventListener("change", district_fc2);
    function district_fc2() {
        //alert("district and nxt full hide");
        // document.getElementById("state").selectedIndex = "0";
        // document.getElementById("district").selectedIndex = "0";
        document.getElementById("taluk").selectedIndex = "0";
        document.getElementById("village").selectedIndex = "0";
    }
}


var taluk = document.getElementById("taluk_parent");
taluk.addEventListener("change", function () { taluk_fc(this) });
function taluk_fc(e) {
    document.getElementById("village_parent").style.visibility = "visible";
    var taluk_text = document.getElementById("taluk");
    alert(taluk_text.value);

    var selected = e.selectedIndex;
    var option = e.options;
    alert("The index value is :" + option[selected].index + "The village is :" + option[selected].text);

    taluk_text.addEventListener("change", taluk_fc2);
    function taluk_fc2() {
        // alert("taluk and nxt hide");
        // document.getElementById("state").selectedIndex = "0";
        // document.getElementById("district").selectedIndex = "0";
        // document.getElementById("taluk").selectedIndex = "0";
        document.getElementById("village").selectedIndex = "0";
    }
}



var village = document.getElementById("village");
village.addEventListener("change", function () { village_fc(this) });
function village_fc(e) {
    var selected = e.selectedIndex;
    var option = e.options;
    alert("The index value is :" + option[selected].index + "The village is :" + option[selected].text);
    var village_text = document.getElementById("village");
    alert(village_text.value);

    village_text.addEventListener("change", function () { village_fc2(this) });
    function village_fc2(e) {
        if (option[selected].index != option[selected].index) {
            // document.getElementById("state").selectedIndex = "0";
            // document.getElementById("district").selectedIndex = "0";
            // document.getElementById("taluk").selectedIndex = "0";
            // document.getElementById("village").selectedIndex = "0";
            alert("That is fine");
            alert(option[selected].index + "first");
        }
        else {
            document.getElementById("state").selectedIndex = "0";
            document.getElementById("district").selectedIndex = "0";
            document.getElementById("taluk").selectedIndex = "0";
            document.getElementById("village").selectedIndex = "0";
            alert(option[selected].index + "second");
        }
    }
}