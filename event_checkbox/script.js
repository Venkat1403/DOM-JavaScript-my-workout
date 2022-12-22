const check_box = document.getElementsByName("check_box[]");
console.log(check_box);
for (i = 0; i < check_box.length; i++) {
    check_box[i].addEventListener('change', clicking);
}
function clicking() {
    let check_boxes = document.querySelectorAll('input[name = "check_box[]"]:checked');
    let check_value = [];
    check_boxes.forEach((check_boxes) => {
        check_value.push(check_boxes.value);
    });
    alert(check_value + " , ");
}