
var h4_text = document.querySelectorAll("h4");
var i;
for (i = 0; i < h4_text.length; i++) {

    h4_text[i].addEventListener("mouseover", function () { hover_div(this) });
    h4_text[i].addEventListener("mouseout", clearspan);
}

function clearspan() {

    var span = document.querySelectorAll("span");
    span.forEach(element => {
        element.remove();
    });
}

function hover_div(e) {

    var span_txt = document.createElement("span");

    e.parentElement.style.position = "relative";
    e.parentElement.append(span_txt);

    span_txt.style.left = "80px"
    span_txt.style.top = "-40px";
    
    span_txt.innerText = e.innerText;

}
