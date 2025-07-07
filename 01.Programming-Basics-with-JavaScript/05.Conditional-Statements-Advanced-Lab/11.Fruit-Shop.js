//плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
//цена	2.50	1.20	0.85	1.45	    2.70	5.50	    3.85

//Weekend
//плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
//цена	2.70	1.25	0.90	1.60	    3.00    5.60	    4.20


function fruitShop (inputArray) {
    let fruit = inputArray[0];
    let day = inputArray[1];
    let quantity = Number(inputArray[2]);
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch(fruit) {
            case "banana":
                price = quantity * 2.50;
            break;
            case "apple":
                price = quantity * 1.20;
            break;
            case "orange":
                price = quantity * 0.85;
            break;
            case "grapefruit":
                price = quantity * 1.45;
            break;
            case "kiwi":
                price = quantity * 2.70;
            break;
            case "pineapple":
                price = quantity * 5.50;
            break;
            case "grapes":
                price = quantity * 3.85;
            break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch(fruit) {
            case "banana":
                price = quantity * 2.70;
            break;
            case "apple":
                price = quantity * 1.25;
            break;
            case "orange":
                price = quantity * 0.90;
            break;
            case "grapefruit":
                price = quantity * 1.60;
            break;
            case "kiwi":
                price = quantity * 3.00;
            break;
            case "pineapple":
                price = quantity * 5.60;
            break;
            case "grapes":
                price = quantity * 4.20;
            break;
        }
    }

    if (price > 0) {
        console.log(price.toFixed(2));
    } else {
        console.log("error");
    }
}


//fruitShop(["apple", "Tuesday", "2"]);

