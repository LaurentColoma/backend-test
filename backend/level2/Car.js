class Car {
  constructor(data) {
    this.id = data['id'];
    this.pricePerDay = data['price_per_day'];
    this.pricePerKm = data['price_per_km'];
  }
}

module.exports = Car;
