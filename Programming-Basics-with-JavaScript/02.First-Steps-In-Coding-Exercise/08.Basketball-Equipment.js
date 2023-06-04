function basketballEquipment(inputArray) {
    let annualFee = Number(inputArray[0]);
    let shoesPrice = annualFee - (annualFee * 0.4);
    let outfitPrice = shoesPrice - (shoesPrice * 0.2);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalCost = annualFee + shoesPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalCost);
}


//basketballEquipment(["365"]);