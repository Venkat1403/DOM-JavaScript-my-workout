// TEXT AREA ------------------------------
var textarea_div = document.createElement("div");
body_div.append(textarea_div);

var textarea = document.createElement("textarea");
textarea.style.width = "97%";
textarea.setAttribute('placeholder', 'Welcome!');
textarea_div.append(textarea);

// SUBMIT BUTTON PART---------------------------
var submit_div = document.createElement("div");
submit_div.style.textAlign = "center";
body_div.append(submit_div);

var submit = document.createElement("button");
submit.setAttribute("class", "submit");
submit.innerText = "SUBMIT";
submit_div.append(submit);

var like_button;
var smile;
var like_div2;

submit.addEventListener("click", submit_function);
function submit_function() {
    // OVER ALL DIV ELEMENT------------------
    var div_create = document.createElement("div");
    div_create.setAttribute("class", "comment_one_div");
    over_all.append(div_create);

    // IMAGE DIV-------------------
    var inner_img_div = document.createElement("div");
    inner_img_div.setAttribute("class", "inner_img_div");
    div_create.appendChild(inner_img_div);

    // IMAGE TAG------------------
    var inner_img = document.createElement("img");
    inner_img.setAttribute("class", "inner_img");
    inner_img.setAttribute("src", "images3.jpg");
    inner_img_div.appendChild(inner_img);

    // P tag and Time Use one div----------------
    var inner_p_img = document.createElement("div");
    inner_p_img.setAttribute("class", "inner_p_img");
    div_create.append(inner_p_img);

    // P TAG INNER DIV-------------------------
    var inner_p_div = document.createElement("div");
    inner_p_div.setAttribute("class", "inner_p_div");
    inner_p_img.appendChild(inner_p_div);

    // P TAG DIV---------------
    var user_name = document.createElement("h4");
    user_name.innerText = "Venkat";
    user_name.setAttribute("class", "user_name");
    user_name.style.fontWeight = "bold";
    inner_p_div.appendChild(user_name);

    // P TAG DIV---------------
    var user_comments = document.createElement("p");
    inner_p_img.appendChild(user_comments);

    //Current Time SET DIV------------------
    var current_time_div = document.createElement("div");
    current_time_div.setAttribute("class", "current_time_div");
    inner_p_div.appendChild(current_time_div);

    // Current Time Set Value------------------
    var current_time = document.createElement("h6");
    current_time.setAttribute("class", "current_time");
    var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    // console.log(time);
    current_time.innerText = time;
    current_time_div.appendChild(current_time);

    var current_time_dots = document.createElement("span");
    current_time_dots.setAttribute("class", "three_dots");
    current_time_dots.innerText = "...";
    current_time_div.append(current_time_dots);

    //like button create-----------------
    var like_div = document.createElement("div");
    like_div.setAttribute("id", "like_div");
    like_div.setAttribute("class", "like_div");
    div_create.appendChild(like_div);

    //like button create-----------------
    like_div2 = document.createElement("div");
    like_div2.setAttribute("class", "like_div2");
    like_div.appendChild(like_div2);

    var like_span = document.createElement("span");
    like_span.setAttribute("class", "like_span");
    like_div2.appendChild(like_span);

    //like button-----------------
    var like_button = document.createElement("button");
    like_button.setAttribute("id", "like_button");
    like_button.setAttribute("class", "like_button");
    like_button.innerText = "Like";
    like_span.appendChild(like_button);

    user_comments.innerText = textarea.value;
    textarea.value = '';

    // var smile = document.getElementById("like_div");
    // smile.addEventListener("click", smiley);
    var like_button = document.querySelectorAll(".like_button");
    for (var j = 0; j < like_button.length; j++) {
        like_button[j].addEventListener("click", function () {smiley(this)});
    }
}
function smiley1(e) {

}



function smiley(e) {
    // if (e.target.nodeName.toLowerCase() == "button") {
        console.log(e.innerText);
        smile_img_div = document.createElement("span");
        like_div2.append(smile_img_div);

        smile_img = document.createElement("img");
        smile_img.setAttribute("class", "smile_img");
        smile_img.setAttribute("src", "like.png");
        smile_img_div.append(smile_img);
        // alert("hi");
        // console.log("hii");
    // }
}
// for (k = 0; k < comment_one_div.length; k++) {
//     comment_one_div[k].addEventListener("click", show);
// }
over_all = document.getElementById("over_all");
over_all.addEventListener("click", show);
var comment_one_div = document.getElementsByClassName("comment_one_div");


var parent;
var testingparent;
function show(e) {
    console.log(e.target.nodeName.toLowerCase() == "p".toLowerCase());
    console.log(typeof (e.target.nodeName.toLowerCase()));

    if (e.target.nodeName.toLowerCase() == "p") {
        textarea.value = e.target.innerText;
        testingparent = e.target.closest(".comment_one_div");
        parent = testingparent.parentElement;
        parent.removeChild(testingparent);
    }
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
}

// var comment_one_div = document.querySelectorAll(".comment_one_div");
// for (var j = 0; j < comment_one_div.length; j++) {
//     comment_one_div[j].addEventListener("click", remove_text);
// }

// var parent1;
// var testingparent1;
// function remove_text(e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);

//     textarea.value = e.target.innerText;
//     testingparent1 = e.target.closest(".comment_one_div");

//     parent1 = testingparent1.parentElement;
//     parent1.removeChild(testingparent1);
// }

// Live Date format--------------------------
var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
console.log(time);