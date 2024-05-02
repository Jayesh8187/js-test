function checkNumber() {
    var number = parseFloat(document.getElementById("number").value);
    var output = document.getElementById("output");

    if (number > 0) {
        output.innerHTML = "The number is <strong>positive</strong>.";
    } else if (number < 0) {
        output.innerHTML = "The number is <strong>negative</strong>.";
    } else {
        output.innerHTML = "The number is <strong>zero</strong>.";
    }
}