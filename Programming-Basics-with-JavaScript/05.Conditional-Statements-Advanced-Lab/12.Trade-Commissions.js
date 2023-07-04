function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let res = 0;
    let isValid = true;
 
    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case 'Sofia':
                res = sales * 0.05;
                break;
            case 'Varna':
                res = sales * 0.045;
                break;
            case 'Plovdiv':
                res = sales * 0.055;
                break;
            default: isValid = false;
                break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (city) {
            case 'Sofia':
                res = sales * 0.07;
                break;
            case 'Varna':
                res = sales * 0.075;
                break;
            case 'Plovdiv':
                res = sales * 0.08;
                break;
            default: isValid = false;
                break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (city) {
            case 'Sofia':
                res = sales * 0.08;
                break;
            case 'Varna':
                res = sales * 0.10;
                break;
            case 'Plovdiv':
                res = sales * 0.12;
                break;
            default: isValid = false;
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case 'Sofia':
                res = sales * 0.12;
                break;
            case 'Varna':
                res = sales * 0.13;
                break;
            case 'Plovdiv':
                res = sales * 0.145;
                break;
            default: isValid = false;
                break;
        }
    } else {
        isValid = false;
    }
 
    if (isValid){
        console.log(res.toFixed(2));
    } else {
        console.log(`error`);
    }
 
}


//tradeCommissions(["Sofia", "1500"]);
