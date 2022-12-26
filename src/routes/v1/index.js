const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);

module.exports = router;
