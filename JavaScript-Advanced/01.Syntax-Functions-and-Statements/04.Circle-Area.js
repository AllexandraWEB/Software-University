// Write a function that takes a single argument as an input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.

function circleArea(input) {
    let inputType = typeof(input); // Used typeof to find out the type of the input

    if(inputType === 'number') {
        let area = Math.PI * Math.pow(input, 2); // Area radius calculation
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea("String");