function foodDelivery(inputArray) {
   let chickenMenu = Number(inputArray[0]);
   let fishMenu = Number(inputArray[1]);
   let vegetarianMenu = Number(inputArray[2]);

   let chickenMenuCost = chickenMenu * 10.35;
   let fishMenuCost = fishMenu * 12.40;
   let vegetarianMenuCost = vegetarianMenu * 8.15;
   let rawCost = chickenMenuCost + fishMenuCost + vegetarianMenuCost;
   let dessertCost = rawCost * 0.2;

   let totalCost = rawCost + dessertCost + 2.5;

   console.log(totalCost);
}


//foodDelivery(["2", "4", "3"]);
