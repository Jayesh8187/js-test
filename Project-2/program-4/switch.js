function getDay() {
    var input = document.getElementById("dayInput").value.toUpperCase();
    var output = document.getElementById("output");

    switch(input) {
        case "M":
            output.innerHTML = "Monday";
            break;
        case "T":
            output.innerHTML = "Tuesday";
            break;
        case "W":
            output.innerHTML = "Wednesday";
            break;
        case "TH":
            output.innerHTML = "Thursday";
            break;
        case "F":
            output.innerHTML = "Friday";
            break;
        case "S":
            output.innerHTML = "Saturday";
            break;
        case "SU":
            output.innerHTML = "Sunday";
            break;
        default:
            output.innerHTML = "Invalid input. Please enter a valid day abbreviation (M, T, W, TH, F, S, SU).";
    }
}