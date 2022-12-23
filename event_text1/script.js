document.getElementById("string_length").addEventListener("keyup", string_length);
function string_length() {
    var string_length = document.getElementById("string_length").value;
    var string_length_length = string_length.length;
    console.log("The string is : " + string_length + " , " + "The string length is" + string_length_length);
    alert("The string is : " + string_length + " , " + "The string length is" + string_length_length);
}