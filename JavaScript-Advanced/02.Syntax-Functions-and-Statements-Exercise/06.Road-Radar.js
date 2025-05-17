// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

// · On the motorway, the limit is 130 km/h
// · On the interstate, the limit is 90 km/h
// · In the city, the limit is 50 km/h
// · Within a residential area, the limit is 20 km/h

// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.

function roadRadar(inputSpeed, inputArea) {
  const limitMotorway = 130;
  const limitInterstate = 90;
  const limitCity = 50;
  const limitResidential = 20;

  switch (inputArea) {
    case "motorway": // In case the inputArea is motorway
      if (inputSpeed <= limitMotorway) {
        // If the speed is within the limit
        console.log(`Driving ${inputSpeed} km/h in a ${limitMotorway} zone`);
      } else {
        // If the speed is outside of the limit
        let difference = inputSpeed - limitMotorway; // Difference from the limit
        let statusDifference = " ";

        if (difference <= 20) {
          // If it's outside of the limit and based on the difference
          statusDifference = "speeding";
        } else if (difference <= 40) {
          statusDifference = "excessive speeding";
        } else {
          statusDifference = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limitMotorway} - ${statusDifference}`
        );
      }
      break;
    case "interstate":
      if (inputSpeed <= limitInterstate) {
        console.log(`Driving ${inputSpeed} km/h in a ${limitInterstate} zone`);
      } else {
        let difference = inputSpeed - limitInterstate;
        let statusDifference = " ";

        if (difference <= 20) {
          statusDifference = "speeding";
        } else if (difference <= 40) {
          statusDifference = "excessive speeding";
        } else {
          statusDifference = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limitInterstate} - ${statusDifference}`
        );
      }
      break;
    case "city":
      if (inputSpeed <= limitCity) {
        console.log(`Driving ${inputSpeed} km/h in a ${limitCity} zone`);
      } else {
        let difference = inputSpeed - limitCity;
        let statusDifference = " ";

        if (difference <= 20) {
          statusDifference = "speeding";
        } else if (difference <= 40) {
          statusDifference = "excessive speeding";
        } else {
          statusDifference = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limitCity} - ${statusDifference}`
        );
      }
      break;
    case "residential":
      if (inputSpeed <= limitResidential) {
        console.log(`Driving ${inputSpeed} km/h in a ${limitResidential} zone`);
      } else {
        let difference = inputSpeed - limitResidential;
        let statusDifference = " ";

        if (difference <= 20) {
          statusDifference = "speeding";
        } else if (difference <= 40) {
          statusDifference = "excessive speeding";
        } else {
          statusDifference = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${limitResidential} - ${statusDifference}`
        );
      }
      break;
  }
}

roadRadar(200, "motorway");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(40, "city");
