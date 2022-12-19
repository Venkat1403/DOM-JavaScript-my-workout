const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
    alert("You clicked the pink element!");
    console.log("You clicked the pink element!");
});

div.addEventListener('click', () => {
    alert("You clicked the green element!");
    console.log("You clicked the green element!");
});

span.addEventListener('click', () => {
    alert("You clicked the blue element!");
    console.log("You clicked the blue element!");
});

button.addEventListener('click', () => {
    alert("You clicked the button element!");
    console.log("You clicked the button element!");
});
