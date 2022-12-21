var in_focus = document.getElementById("focus_in");

// Focus Event-----
in_focus.addEventListener("focusin", (event) => {
    event.target.style.background = 'pink';
});

in_focus.addEventListener("focusout", event => {
    // event.target.style.background = "white";
    alert(in_focus.value);
});


// //change Event----------
var on_change = document.getElementById("on_change_length");

on_change.addEventListener("change", onchange_fun);
function onchange_fun() {
    on_change.style.backgroundColor = "aqua";
    var text = document.getElementById("on_change_length").value;
    alert("The string length is :" + text.length + " , " + "The string is :" + text);
}


//focusout Event---------
var focus_out = document.getElementById("focus_out");
focus_out.addEventListener("focusout", event => {
    event.target.style.background = "blue";
    event.target.style.color = "white";
    alert(focus_out.value);
});