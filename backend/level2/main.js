const fs = require('fs');
const Car = require('./Car');
const Rental = require('./Rental');

const parseFile = () => {
  return JSON.parse(fs.readFileSync('./data/input.json', 'utf8'));
};

const setCar = (dataToSet) => {
  let cars = dataToSet.map((data) => {
    return new Car(data);
  });

  return cars;
};

const setRental = (dataToSet) => {
  let rentals = dataToSet.map((data) => {
    return new Rental(data)
  });

  return rentals;
};

const createOutputData = (cars, rentals) => {
  let outputData = { "rentals": [] };

  outputData["rentals"] = rentals.map((data) => {
    const car = cars.filter(item => item.id === data.carId);

    return { "id": data.id, "price": data.calculatePrice(car[0].pricePerDay, car[0].pricePerKm), };
  });

  return outputData;
}

const saveFile = (outputData) => {
  fs.writeFile('./data/output.json', outputData, function(err) {
    if (err)
      console.log(err);
  });
}

const main = () => {
  console.log("Processing please wait...");

  const file = parseFile();
  const cars = setCar(file['cars']);
  const rentals = setRental(file['rentals']);
  const outputData = createOutputData(cars, rentals);

  saveFile(JSON.stringify(outputData, null, 2));

  console.log("output.json generated !");
};

main();
