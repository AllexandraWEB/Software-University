function sortNumber(num1, num2, num3) {
    let numbers = [num1, num2, num3];

    numbers.sort((a, b) => (b - a)); // In order to sort in descending order
    numbers.forEach(num => console.log(num));
}

sortNumber(2, 1, 3);