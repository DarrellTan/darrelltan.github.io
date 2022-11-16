
function random() {
    let number = Math.random();
    if (number > 0.5) {
        document.getElementById("us").style.display = "unset";
        document.getElementById("dharmin").style.display = "none";
    }
    else {
        document.getElementById("us").style.display = "none";
        document.getElementById("dharmin").style.display = "unset";
    }
    console.log(number);
}