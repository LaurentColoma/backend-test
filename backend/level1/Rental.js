class Rental {
  constructor(data) {
    this.id = data['id'];
    this.carId = data['car_id'];
    this.startDate = new Date(data['start_date']);
    this.endDate = new Date(data['end_date']);
    this.distance = data['distance'];
  };

  calculateRentalDays = () => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const differenceDate = Math.abs(this.endDate - this.startDate);

    return Math.ceil(differenceDate / _MS_PER_DAY);
  };
  calculateTimePrice = (pricePerDay) => {
    return this.calculateRentalDays() * pricePerDay;
  };

  calculateDistancePrice = (pricePerKm) => {
    return this.distance * pricePerKm;
  };

  calculatePrice = (pricePerDay, pricePerKm) => {
    return this.calculateTimePrice(pricePerDay) + this.calculateDistancePrice(pricePerKm);
  };
};

module.exports = Rental;
