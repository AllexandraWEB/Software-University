function petShop(input) {
   let dogsFood = Number(input[0]);
   let catsFood = Number(input[1]);
   let totalCost = dogsFood * 2.50 + catsFood * 4;

   let result = `${totalCost} lv.`;

   console.log(result);
}

//petShop(["5", "4"]);
//petShop(["13", "9"]);