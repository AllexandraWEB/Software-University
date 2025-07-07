function evenPowersOf2(inputArray) {
    let n = Number(inputArray[0]);

    for (let exponent = 0; exponent <= n; exponent +=2) {
        console.log(2 ** exponent);
    }
}


//evenPowersOf2(["6"]);