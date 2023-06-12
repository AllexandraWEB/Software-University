function areaOfFigures(inputArray) {
    let figure = inputArray[0];
    let area = 0;

    if (figure === "square") {
        let side = Number(inputArray[1]);
        area = side * side;
    } else if (figure === "rectangle") {
        let length = Number(inputArray[1]);
        let width = Number(inputArray[2]);
        area = length * width;
    } else if (figure === "circle") {
        let radius = Number(inputArray[1]);
        area = Math.PI * radius **2;
    } else {
        let side = Number(inputArray[1]);
        let height = Number(inputArray[2]);
        area = (side * height) / 2;
    }
    console.log(area.toFixed(3));
}

//areaOfFigures(["square", "5"]);
//areaOfFigures(["rectangle","7","2.5"]);
//areaOfFigures(["circle","6"]);
//areaOfFigures(["triangle","4.5","20"]);
