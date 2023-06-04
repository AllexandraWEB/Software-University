function repainting(inputArray) {
   let neededNylon = Number(inputArray[0]);
   let neededPaint = Number(inputArray[1]);
   let neededTinner = Number(inputArray[2]);
   let neededHours = Number(inputArray[3]);

   let nylonAmount = (neededNylon + 2) * 1.5;
   let percentPaint = neededPaint * 0.1;
   let paintAmount = (neededPaint + percentPaint) * 14.5;
   let tinnerAmount = neededTinner * 5;

   let materialsCost = nylonAmount + paintAmount + tinnerAmount + 0.4;
   let workersCommission = (materialsCost * 0.3) * neededHours;
   let totalCost = materialsCost + workersCommission;

   console.log(totalCost);
}


//repainting(["10", "11", "4", "8"]);
//repainting(["5", "10", "10", "1"]);