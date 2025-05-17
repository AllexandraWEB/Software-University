// Write a program that receives 6 parameters which are a number and a list of five operations. 
// Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one.

function cookingByNumbers(inputNumber, ...params){
    let cookingOperations = {
        "chop" : (number) => number / 2,
        "dice" : (number) => Math.sqrt(number),
        "spice" : (number) => number + 1,
        "bake" : (number) => number * 3,
        "fillet" : (number) => number * 0.80,
    }

    let number = Number(inputNumber);

    for(let operation of params) {
        number = cookingOperations[operation](number);
        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// chop - divide the number by two
// · dice - square root of a number
// · spice - add 1 to the number
// · bake - multiply number by 3
// · fillet - subtract 20% from the number