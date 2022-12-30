const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

// POST -> /airplane
const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully created an airplane",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the airplane",
      err: error,
    });
  }
};

// POST -> /airplanes
const bulkCreate = async (req, res) => {
  try {
    const airplanes = await airplaneService.createAirplanes(req.body);
    return res.status(201).json({
      data: airplanes,
      success: true,
      message: "Successfully created the airplanes",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the airplanes",
      err: error,
    });
  }
};

// DELETE -> /airplane/:id
const destroy = async (req, res) => {
  try {
    const response = await airplaneService.deleteAirplane(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the airplane",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airplane",
      err: error,
    });
  }
};

// PATCH -> /airplane/:id along with body(new data)
const update = async (req, res) => {
  try {
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully updated the airplane",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airplane",
      err: error,
    });
  }
};

// GET -> /airplane/:id
const get = async (req, res) => {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetched the airplane",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the airplane",
      err: error,
    });
  }
};

module.exports = {
  create,
  bulkCreate,
  destroy,
  update,
  get,
};
