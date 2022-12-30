const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const FlightController = require("../../controllers/flight-controller");

router.post("/city", CityController.create);
router.post("/cities", CityController.bulkCreate);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city/:id/airport", CityController.getAllAirports);

router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.delete("/airport/:id", AirportController.destroy);

router.post("/airplane", AirplaneController.create);
router.post("/airplanes", AirplaneController.bulkCreate);
router.get("/airplane/:id", AirplaneController.get);
router.patch("/airplane/:id", AirplaneController.update);
router.delete("/airplane/:id", AirplaneController.destroy);

router.post("/flight", FlightController.create);
router.get("/flight/:id", FlightController.get);
router.get("/flight", FlightController.getAll);
router.patch("/flight/:id", FlightController.update);
router.delete("/flight/:id", FlightController.destroy);

module.exports = router;
