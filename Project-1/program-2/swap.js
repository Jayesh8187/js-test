function swapVariables() {
    var variable1 = document.getElementById('variable1').value;
    var variable2 = document.getElementById('variable2').value;

    var temp = variable1;
    variable1 = variable2;
    variable2 = temp;

    var swappedValues = "After Swapping:<br>";
    swappedValues += "Variable 1: " + variable1 + "<br>";
    swappedValues += "Variable 2: " + variable2;
    document.getElementById('result').innerHTML += swappedValues;
}