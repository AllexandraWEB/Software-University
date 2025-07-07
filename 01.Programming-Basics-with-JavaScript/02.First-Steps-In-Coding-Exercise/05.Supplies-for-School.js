function suppliesForSchool(inputArray) {
   let packOfPens = Number(inputArray[0]);
   let packOfMarkers = Number(inputArray[1]);
   let liters = Number(inputArray[2]);
   let discountPercentage = Number(inputArray[3]);

   let totalCost = packOfPens * 5.8 + packOfMarkers * 7.2 + liters * 1.2; //изчисляваме цялостната цена.
   let discountAmount = totalCost * discountPercentage / 100; //пресмятаме %

   console.log(totalCost - discountAmount); //изваждаме намалението от цялостната цена. 
}


//suppliesForSchool(["2", "3", "4", "25"]);
//suppliesForSchool(["4", "2", "5", "13"]);