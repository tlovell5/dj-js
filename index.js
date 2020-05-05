//Blue when the mouse hovers over the square
document.querySelector("#square").addEventListener("mouseover", function () {
    document.querySelector("#square").style.backgroundColor = "blue"
});

//Red when the mouse button is held down over the square
document.querySelector("#square").addEventListener("mousedown", function () {
    document.querySelector("#square").style.backgroundColor = "red"
});

//Yellow when the mouse button is let go over the square
document.querySelector("#square").addEventListener("mouseup", function () {
    document.querySelector("#square").style.backgroundColor = "yellow"

});
//Green when the mouse is double clicked in the square
document.querySelector("#square").addEventListener("dblclick", function () {
    document.querySelector("#square").style.backgroundColor = "green"
});

//Orange when the mouse scroll is used somewhere in the window (not just over the square).
document.body.addEventListener("mousewheel", function () {
    document.querySelector("#square").style.backgroundColor = "orange"
});

// Type text change square color
document.body.addEventListener("keydown", function () {
    if (event.key === "b") {
        document.querySelector("#square").style.backgroundColor = "blue"
    }
    if (event.key === "r") {
        document.querySelector("#square").style.backgroundColor = "red"
    }
    if (event.key === "y") {
        document.querySelector("#square").style.backgroundColor = "yellow"
    }
    if (event.key === "g") {
        document.querySelector("#square").style.backgroundColor = "green"
    }
    if (event.key === "o") {
        document.querySelector("#square").style.backgroundColor = "orange"
    }
});