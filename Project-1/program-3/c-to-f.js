function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);

    if (isNaN(celsius)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('result').innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
}