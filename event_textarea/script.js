var text_a = document.getElementById("text_area");
text_a.addEventListener("focusout", text_area);
function text_area() {
    text_a.style.backgroundColor = "blue";
    text_a.style.color = "white";
    alert(text_a.value);
}
