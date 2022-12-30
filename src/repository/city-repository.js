const { Op } = require("sequelize");
const { City, Airport } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async createCities(arr) {
    try {
      const cities = await City.bulkCreate(arr);
      return cities;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findOne({
        where: {
          id: cityId,
        },
      });
      //const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async getAllCities(filter) {
    // filter(query in url maybe empty also)
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }

      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }

  async getAllAirports(cityId) {
    try {
      const airports = await City.findAll({
        where: {
          id: cityId,
        },
        include: Airport,
      });
      return airports;
    } catch (error) {
      console.log("Something went wrong at the repository");
      throw { error };
    }
  }
}

module.exports = CityRepository;
