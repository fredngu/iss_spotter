const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printISSTimesForLocation } = require('./index')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printISSTimesForLocation(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  


  