var dialog = document.getElementById("dialog");
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

yesButton.addEventListener("click", function () {
    console.log("User clicked Yes");
    dialog.style.display = "none";
});

noButton.addEventListener("click", function () {
    console.log("User clicked No");
    dialog.style.display = "none";
});

dialog.style.display = "block";
