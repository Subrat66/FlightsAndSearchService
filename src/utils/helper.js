function compareTime(arrivalTimeString, departureTimeString) {
  let arrivalDateTime = new Date(arrivalTimeString);
  let departureDateTime = new Date(departureTimeString);

  return arrivalDateTime > departureDateTime;
}

module.exports = {
  compareTime,
};
