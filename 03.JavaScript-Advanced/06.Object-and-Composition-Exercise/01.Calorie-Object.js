// Write a function that composes an object by given properties.
// Every even index of the array represents the name of the food. 
// Every odd index is a number that is equal to the calories in 100 grams of the given product.

function calorieObject(inputArray) {
    let result = {};

    for(let i = 0; i < inputArray.length; i += 2) {
        let key = inputArray[i];
        let value = Number(inputArray[i + 1]);

        result[key] = value;
    }   
    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);