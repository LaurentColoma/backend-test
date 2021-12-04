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
    let rentalDays = Math.ceil(differenceDate / _MS_PER_DAY) + 1;

    return rentalDays;
  };

  calculateDiscount = () => {
    const differenceDate = this.calculateRentalDays();

    if (differenceDate > 1 && differenceDate <= 4)
      return 0.9;
    else if (differenceDate > 4 && differenceDate <= 10)
      return 0.7;
    else if (differenceDate > 10)
      return 0.5;
    else
      return 1;
  }

  calculateTimePrice = (pricePerDay) => {
    return (this.calculateRentalDays() * pricePerDay) * this.calculateDiscount();
  };

  calculateDistancePrice = (pricePerKm) => {
    return this.distance * pricePerKm;
  };

  calculatePrice = (pricePerDay, pricePerKm) => {
    return (this.calculateTimePrice(pricePerDay) + this.calculateDistancePrice(pricePerKm));
  };

  calculateCommision = (price) => {
    console.log(price * 0.3)
    return price * 0.3;
  }
};

module.exports = Rental;
