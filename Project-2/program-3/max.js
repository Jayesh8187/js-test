function findMax() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    
    var max;
    
    if (num1 >= num2) {
        if (num1 >= num3) {
            if (num1 >= num4) {
                max = num1;
            } else {
                max = num4;
            }
        } else {
            if (num3 >= num4) {
                max = num3;
            } else {
                max = num4;
            }
        }
    } else {
        if (num2 >= num3) {
            if (num2 >= num4) {
                max = num2;
            } else {
                max = num4;
            }
        } else {
            if (num3 >= num4) {
                max = num3;
            } else {
                max = num4;
            }
        }
    }
    
    document.getElementById("maxResult").innerText = "The maximum number is: " + max;
}