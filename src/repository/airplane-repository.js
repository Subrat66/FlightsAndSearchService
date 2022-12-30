const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data.modelNumber, data.capacity);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async createAirplanes(arr) {
    try {
      const airplanes = await Airplane.bulkCreate(arr);
      return airplanes;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      airplane.modelNumber = data.modelNumber;
      airplane.capacity = data.capacity;

      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const response = await Airplane.destroy({
        where: {
          id: airplaneId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
