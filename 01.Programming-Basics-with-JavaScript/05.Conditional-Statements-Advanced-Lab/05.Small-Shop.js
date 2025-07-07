//град 	  coffee	water	beer	sweets	peanuts
//Sofia   0.50	    0.80	1.20	1.45	1.60
//Plovdiv 0.40      0.70	1.15	1.30	1.50
//Varna	  0.45	    0.70	1.10	1.35	1.55

function smallShop(inputArray) {
    let product = inputArray[0];
    let city = inputArray[1];
    let quantity = Number(inputArray[2]);
    let price = 0;

    switch(city) {
        case "Sofia":
            if (product === "coffee") {
                price = quantity * 0.50;
            } else if (product === "water") {
                price = quantity * 0.80;
            } else if (product === "beer") {
                price = quantity * 1.20;
            } else if (product === "sweets") {
                price = quantity * 1.45;
            } else {
                price = quantity * 1.60;
            }
        break;
        case "Plovdiv":
            if(product === "coffee") {
                price = quantity * 0.40;
            } else if (product === "water") {
                price = quantity * 0.70;
            } else if (product === "beer") {
                price = quantity * 1.15;
            } else if (product === "sweets") {
                price = quantity * 1.30;
            } else {
                price = quantity * 1.50;
            }
        break;
        case "Varna":
            if(product === "coffee") {
                price = quantity * 0.45;
            } else if (product === "water") {
                price = quantity * 0.70;
            } else if (product === "beer") {
                price = quantity * 1.10;
            } else if (product === "sweets") {
                price = quantity * 1.35;
            } else {
                price = quantity * 1.55;
            }
        break;
    }

    console.log(price);

}


//smallShop(["coffee", "Varna", "2"]);

