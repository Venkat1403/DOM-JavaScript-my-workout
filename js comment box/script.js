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

    // console.log(textarea.value.length);
    var textarea_length = textarea.value.length;
    var textarea_text = textarea.value;
    console.log(textarea_text);
    console.log(textarea_length);
    var char_limit = 125;

    // if (textarea_length > char_limit) {
        console.log("varudu");
        // console.log(textarea.value);
        // var short_text = document.createElement("span");
        // short_text.setAttribute("class", "short_text");
        // textarea.appendChild(short_text);
        // // console.log(textarea_text)

        // var long_text = document.createElement("span");
        // long_text.setAttribute("class", "long_text");
        // textarea.appendChild(long_text);

        // var text_dots = document.createElement("span");
        // text_dots.innerText = "...";
        // text_dots.setAttribute("class", "text_dots");
        // textarea.appendChild(text_dots);

        // var show_more = document.createElement("span");
        // show_more.innerText = "Read More";
        // show_more.setAttribute("class", "show_more_button");
        // show_more.setAttribute("data-more", 0);
        // textarea.appendChild(show_more);

        if (textarea_text.length < char_limit) {
            console.log('<div>' + textarea_text + '</div>');
        }
        else
            // {
            console.log('<div><span class="short_text">' + textarea_text.substr(0, char_limit) + '</span><span class="long_text">' + textarea_text.substr(char_limit) + '</span><span class= "text_dots">...</span><span class="show_more_button" data-more="0">See More</span></div>');

        var short_text = document.createElement("span");
        short_text.setAttribute("class", "short_text");
        // textarea_text.append(short_text);
        textarea.appendChild(short_text);
        // console.log(textarea_text)

        var long_text = document.createElement("span");
        long_text.setAttribute("class", "long_text");
        textarea.appendChild(long_text);

        var text_dots = document.createElement("span");
        text_dots.innerText = "...";
        text_dots.setAttribute("class", "text_dots");
        textarea.appendChild(text_dots);

        var show_more = document.createElement("span");
        show_more.innerText = "Read More";
        show_more.setAttribute("class", "show_more_button");
        show_more.setAttribute("data-more", 0);
        textarea.appendChild(show_more);
        // }

        document.querySelector(".show_more_button").addEventListener("click", function () {
            if (this.getAttribute('data-more') == 0) {
                this.setAttribute('data-more', 1);
                this.style.display = 'block';
                this.innerHTML = 'Read Less';
                this.previousElementSibling.style.display = 'none';
                this.previousElementSibling.previousElementSibling.style.display = 'inline';
            }
            else if (this.getAttribute('data-more') == 1) {
                this.setAttribute('data-more', 0);
                this.style.display = 'inline';
                this.innerHTML = 'Read More';

                this.previousElementSibling.style.display = 'inline';
                this.previousElementSibling.previousElementSibling.style.display = 'none';
            }
        });
    // }
    // else {
        // console.log("varala");
    // }

    // if (textarea_text.length < char_limit) {
    //     console.log('<div>' + textarea_text + '</div>');
    // }
    // else {
    //     console.log('<div><span class="short_text">' + textarea_text.substr(0, char_limit) + '</span><span class="long_text">' + textarea_text.substr(char_limit) + '</span><span class= "text_dots">...</span><span class="show_more_button" data-more="0">See More</span></div>');
    // }

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

    user_comments.innerText = textarea.value;
    textarea.value = '';


    var current_time_dots = document.createElement("span");
    current_time_dots.setAttribute("class", "three_dots");
    current_time_dots.setAttribute("id", "three_dots");
    current_time_dots.innerText = "...";
    current_time_div.append(current_time_dots);

    current_time_dots.addEventListener("click", function () { three_dots(this) });

    //like button create-----------------
    // var like = document.createElement("div");
    // like.setAttribute("class", "like");
    // div_create.appendChild(like);

    //like button create-----------------
    like_div2 = document.createElement("div");
    like_div2.setAttribute("class", "like_div2");
    div_create.appendChild(like_div2);

    var like_div = document.createElement("div");
    like_div.setAttribute("class", "like_div");
    like_div2.append(like_div);
    //like button-----------------
    like_button = document.createElement("button");
    like_button.setAttribute("id", "like_button");
    like_button.setAttribute("class", "like_button");
    like_button.innerText = "Like";
    like_div.appendChild(like_button);

    // like_button.addEventListener("click", function () { smiley(this) });

    // like line div------------
    var like_line_div = document.createElement("div");
    like_line_div.setAttribute("class", "like_line_div");
    like_div2.append(like_line_div);

    var like_line = document.createElement("span");
    like_line.setAttribute("class", "like_line");
    like_line.innerText = "|";
    like_line_div.append(like_line);

    // replay button div-------------------
    var replay_div = document.createElement("div");
    replay_div.setAttribute("class", "replay_div");
    like_div2.append(replay_div);

    var replay_btn = document.createElement("button");
    replay_btn.setAttribute("class", "replay_button");
    replay_btn.innerText = "Replay";
    replay_div.append(replay_btn);
}
// var x;
function three_dots(e) {



    console.log(e);
    // console.log(e.closest(".comment_one_div"));

    // var element = e.closest(".comment_one_div");
    var x = document.getElementById("contextmenu");
    var cloneDiv = x.cloneNode(true);
    // element.appendChild(cloneDiv);
    // x.setAttribute("id", "submenu");
    e.appendChild(cloneDiv);
    // if (e.target.nodeName.toLowerCase() == "span") {

    var hide_show = document.querySelectorAll(".hide_show");
    for (i = 0; i < hide_show.length; i++) {
        if (hide_show[i].classList.contains("hide_show")) {
            hide_show[i].classList.remove("hide_show");
            //document.getElementById("contextmenu").style.display = "none";
        }
    }
    cloneDiv.classList.add("hide_show");
}


var parent_element;
function smiley(e) {
    // console.log(e.nextSibling);
    // console.log(e.parentElement);
    parent_element = e.parentElement;
    // console.log(e);
    if (e.nextSibling == null) {
        smile_img = document.createElement("img");
        smile_img.setAttribute("class", "smile_img");
        smile_img.setAttribute("id", "smile_img");
        smile_img.setAttribute("src", "like.png");
        parent_element = e.parentElement;
        parent_element.append(smile_img);
    }
}

function replay_function(e) {
    // alert("hi");
}
over_all = document.getElementById("over_all");
over_all.addEventListener("click", show);
var comment_one_div = document.getElementsByClassName("comment_one_div");


var parent;
var testingparent;
function show(e) {
    // console.log(e.target.nodeName.toLowerCase() == "p".toLowerCase());
    // console.log(typeof (e.target.nodeName.toLowerCase()));
    if (e.target.nodeName.toLowerCase() == "p") {
        textarea.value = e.target.innerText;
        testingparent = e.target.closest(".comment_one_div");
        parent = testingparent.parentElement;
        parent.removeChild(testingparent);
    }
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
}
// Live Date format--------------------------
var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
console.log(time);