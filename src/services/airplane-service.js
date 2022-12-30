const { AirplaneRepository } = require("../repository/index");

const airplaneRespository = new AirplaneRepository();

class AirplaneService {
  async createAirplane(data) {
    try {
      const airplane = await airplaneRespository.createAirplane(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }

  async createAirplanes(arr) {
    try {
      const airplanes = await airplaneRespository.createAirplanes(arr);
      return airplanes;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await airplaneRespository.updateAirplane(
        airplaneId,
        data
      );
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await airplaneRespository.getAirplane(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const response = await airplaneRespository.deleteAirplane(airplaneId);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
