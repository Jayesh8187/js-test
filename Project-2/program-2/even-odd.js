function checkEvenOdd() {
    let num = document.getElementById("numInput").value;
    let result = (num % 2 === 0) ? "Even" : "Odd";

    if (num == "") {
        result = "Enter number";
    }

    document.getElementById("result").innerText = num + " " + result + ".";
}