let titles = Array.from(document.getElementsByClassName("title"));
let texts = Array.from(document.getElementsByClassName("text"));
let body = document.getElementById("body");

function sizeSmall() {
    body.style.fontSize = "small";
}

function sizeMedium() {
    body.style.fontSize = "medium";
}

function sizeLarge() {
    body.style.fontSize = "large";
}


let small = document.getElementById("small");
small.onclick = function() {
    sizeSmall();
}

let medium = document.getElementById("medium");
medium.onclick = function() {
    sizeMedium();
}

let large = document.getElementById("large");
large.onclick = function() {
    sizeLarge();
}