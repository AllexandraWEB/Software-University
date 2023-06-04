function radToDeg(inputArray) {
   let radians = Number(inputArray[0]);
   let degrees = radians * 180 / Math.PI;
   
   console.log(degrees);
}


//radToDeg(["3.1416"]);
//radToDeg(["6.2832"]);