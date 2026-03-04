console.log("Script started");

function changeStyle() {
    console.log("click");

    //putting p element in a variable
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";
    p.style.color = "red";
    p.style.fontSize = "100px";
    p.style.border = "4px dotted purple";

    //adding another button

function resetStyle() {
    console.log("click");

    //putting p element in a variable
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";
    p.style.color = "red";
    p.style.fontSize = "100px";
    p.style.border = "4px dotted purple";

}