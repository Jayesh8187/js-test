function calculateFinalSalary() {
    var salary = parseInt(document.getElementById("salary").value);
    var increment = 0;

    if (salary >= 1000 && salary <= 5000) {
        increment = 1000;
    } else if (salary > 5000 && salary <= 10000) {
        increment = 2000;
    } else if (salary > 10000 && salary <= 20000) {
        increment = 3000;
    } else if (salary > 20000 && salary <= 50000) {
        increment = 4000;
    } else {
        increment = 0;
    }

    var finalSalary = salary + increment;

    document.getElementById("output").innerHTML = "Final Salary: Rs. " + finalSalary;
}