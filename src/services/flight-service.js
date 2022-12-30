const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

const flightRepository = new FlightRepository();
const airplaneRepository = new AirplaneRepository();

class FlightService {
  async createFlight(data) {
    try {
      // check if arrival dateTime is greater than departure dateTime
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time can not be less than Departure time" };
      }

      const airplane = await airplaneRepository.getAirplane(data.airplaneId);

      // req object has everything except total seats property
      // we can get that from airplane's capacity itself and adding the data to req data
      //console.log(airplane.capacity);
      data.totalSeats = airplane.capacity;

      const flight = await flightRepository.createFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await flightRepository.updateFlight(flightId, data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getFlightData(flightId) {
    try {
      const flight = await flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const flights = await flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteFlight(flightId) {
    try {
      const response = await flightRepository.deleteFlight(flightId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
