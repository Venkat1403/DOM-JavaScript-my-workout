document.getElementById("text_area").addEventListener("keypress", text_area);
function text_area(e) {
    if (document.getElementById("text_area").value.length <= 20) {
        var text_length = document.getElementById("text_area").value.length;
        console.log(text_length);
        alert(text_length);
    }
    else {
        e.preventDefault();
    }
}