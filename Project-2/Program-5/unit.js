function calculateBill() {
    var units = parseInt(document.getElementById("units").value);
    var totalBill = 0;

    if (units <= 50) {
        totalBill = units * 0.50;
    } else if (units > 50 && units <= 150) {
        totalBill = 50 * 0.50 + (units - 50) * 0.75;
    } else if (units > 150 && units <= 250) {
        totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
    } else {
        totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
    }

    var surcharge = totalBill * 0.20;
    totalBill += surcharge;

    document.getElementById("output").innerHTML = "Total electricity bill: Rs. " + totalBill.toFixed(2);
}