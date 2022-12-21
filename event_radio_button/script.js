// //radio button--------
document.getElementsByName('gender').forEach(function (e) {
    e.addEventListener("change", function () {
        alert(e.value);
    });
});