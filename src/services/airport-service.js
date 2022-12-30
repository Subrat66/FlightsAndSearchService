const { AirportRepository, CityRepository } = require("../repository/index");

const airportRepository = new AirportRepository();

class AirportService {
  async createAirport(data) {
    try {
      const cityRepository = new CityRepository();
      const city = cityRepository.getCity(data.cityId);
      if (!city) {
        error = "City doesnot exist for the creation of airport";
        return error;
      }
      const airport = await airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await airportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await airportRepository.updateAirport(airportId, data);
      return airport;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await airportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
