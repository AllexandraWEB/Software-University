// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it

function cityRecord(cityName, population, treasury) {
  let finalRecord = {};

  finalRecord.name = cityName;
  finalRecord.population = population;
  finalRecord.treasury = treasury;

  return finalRecord;
}

// Second solution

function cityRecord(name, population, treasury) {
  return {
    name,
    population,
    treasury
  };
}

console.log(cityRecord("Tortuga", 7000, 15000));
