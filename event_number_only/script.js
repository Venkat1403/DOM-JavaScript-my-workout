
document.getElementById("text_number").addEventListener("keypress", text_number);
function text_number(e) {
    var text_number = document.getElementById("text_number").value;
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        alert(e.keyCode);
    }
    else {
        alert(e.keyCode);
        e.preventDefault();
    }
}