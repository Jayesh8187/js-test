const carsArray = [
    { brand: 'Toyota', mileage: 25, speed: 120 },
    { brand: 'Honda', mileage: 30, speed: 110 },
    { brand: 'Ford', mileage: 20, speed: 140 },
    { brand: 'Chevrolet', mileage: 35, speed: 100 },
    { brand: 'BMW', mileage: 15, speed: 160 }
];
document.getElementById('output').innerHTML += `<h1>this is for loop example</h1>`;
for (let i = 0; i < carsArray.length; i++) {
    const car = carsArray[i];
    document.getElementById('output').innerHTML += `<p>${car.brand} - Mileage: ${car.mileage}, Speed: ${car.speed}</p>`;
}
document.getElementById('output').innerHTML += `<h1>this is foreach loop example</h1>`;

function add(car) {
    document.getElementById('output').innerHTML += `<p>${car.brand} - Mileage: ${car.mileage}, Speed: ${car.speed}, this line is added from foreach loop</p>`;
}
carsArray.forEach(add);

document.getElementById('output').innerHTML += `<h1>this is forin loop example</h1>`;

for (const key in carsArray) {
    document.getElementById('output').innerHTML += `<p>${key}, ${carsArray[key].brand}, this line is added from forin loop</p>`;
}
document.getElementById('output').innerHTML += `<h1>this is forof loop example</h1>`;

for (const value of carsArray) {
    document.getElementById('output').innerHTML += `<p>${value.brand}, ${value.mileage}, this line is added from foreach loop</p>`;
}