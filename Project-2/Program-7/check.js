function compareNumbers() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var output = document.getElementById("output");

    if (number1 === number2) {
        output.innerHTML = "The two numbers are <strong>equal</strong>.";
    } else if (number1 > number2) {
        output.innerHTML = "The first number is <strong>greater</strong> than the second number.";
    } else {
        output.innerHTML = "The first number is <strong>less</strong> than the second number.";
    }
}