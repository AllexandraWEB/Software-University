function yardGreening(input) {
    let squaredMeters = Number(input[0]);

    let totalCost = squaredMeters * 7.61;
    let discountPrice = totalCost * 0.18; // 18/100
    let finalCost = totalCost - discountPrice;

    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}


//yardGreening(["550"]);
//yardGreening(["150"]);