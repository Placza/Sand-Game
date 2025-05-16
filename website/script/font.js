let titles = Array.from(document.getElementsByClassName("title"));
let texts = Array.from(document.getElementsByClassName("text"));

function sizeSmall() {
    titles.forEach(title => {
        title.style.fontSize = "larger";
    });

    texts.forEach(text => {
        text.style.fontSize = "small";
    });
}

function sizeMedium() {
    titles.forEach(title => {
        title.style.fontSize = "large";
    });

    texts.forEach(text => {
        text.style.fontSize = "medium";
    });
}

function sizeLarge() {
    titles.forEach(title => {
        title.style.fontSize = "35px";
    });

    texts.forEach(text => {
        text.style.fontSize = "large";
    });
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