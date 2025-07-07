function pieceOfPie(inputArray, start, end) {
  let indexStart = inputArray.indexOf(start);
  let indexEnd = inputArray.indexOf(end) + 1;

  let finalResult = inputArray.slice(indexStart, indexEnd);

  return finalResult;
}

console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",

      "Key Lime Pie",

      "Cherry Pie",

      "Lemon Meringue Pie",

      "Sugar Cream Pie",
    ],

    "Key Lime Pie",

    "Lemon Meringue Pie"
  )
);
