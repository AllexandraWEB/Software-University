// Write a function that calculates how much money you need to buy fruit. 
// You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram.

function fruit(typeOfFruit, grams, pricePerKg) {
    let totalPrice = (grams * pricePerKg / 1000).toFixed(2);
    let totalKg = (grams / 1000).toFixed(2);

    console.log(`I need $${totalPrice} to buy ${totalKg} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);