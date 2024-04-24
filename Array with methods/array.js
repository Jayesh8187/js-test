const carsArray = [
    { brand: 'Toyota', mileage: 25, speed: 120 },
    { brand: 'Honda', mileage: 30, speed: 110 },
    { brand: 'Ford', mileage: 20, speed: 140 },
    { brand: 'Chevrolet', mileage: 35, speed: 100 },
    { brand: 'BMW', mileage: 15, speed: 160 }
];

const newArray = []

carsArray.forEach(function (car) {
    newArray.push(`<ul><li>Brand : ${car.brand}</li> Maileage : ${car.mileage}<br> Speed : ${car.speed}</ul>`)
})

document.getElementById("output").innerHTML = newArray.join("\n")