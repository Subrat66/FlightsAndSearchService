const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice) {
      Object.assign(filter, {
        price: {
          [Op.gte]: data.minPrice,
        },
      });
    }

    if (data.maxPrice) {
      Object.assign(filter, {
        price: {
          [Op.lte]: data.maxPrice,
        },
      });
    }

    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        price: {
          [Op.between]: [data.minPrice, data.maxPrice],
        },
      });
    }
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await Flights.findByPk(flightId);
      flight.airplaneId = data.airplaneId;
      flight.departureAirportId = data.departureAirportId;
      flight.arrivalAirportId = data.arrivalAirportId;
      flight.departureTime = data.departureTime;
      flight.arrivalTime = data.arrivalTime;
      flight.price = data.price;
      flight.boardingGate = data.boardingGate;
      flight.totalSeats = data.totalSeats;

      await flight.save();
      return flight;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async deleteFlight(flightId) {
    try {
      const response = await Flights.destroy({
        where: {
          id: flightId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);

      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
