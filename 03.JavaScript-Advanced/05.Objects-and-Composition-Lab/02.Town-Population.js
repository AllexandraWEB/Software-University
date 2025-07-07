// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.

function townPopulation(townData) {
    let finalResult = {}; // Empty object where the result is going to be stored

    for(let record of townData) { // Loop through every string in the townData
        let [cityName, population] = record.split(" <-> "); // Using array destructuring and split method - returns ["Istanbul", "100000"]
        population = Number(population);

        if(finalResult.hasOwnProperty(cityName) === false) { // .hasOwnProperty returns a booleand whether this object has the specified property
            finalResult[cityName] = 0; // If this city hasn’t been added yet, start it with a population of 0.
        }

        finalResult[cityName] += population; // Add the population to that city
    }

    for(let cityName in finalResult) { // Go through the object and print each town
        console.log(`${cityName} : ${finalResult[cityName]}`);
    }
}

townPopulation([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
])
