function carFactory(inputOrder) {
    let engineEnum = {
        "smallEngine": { power: 90, volume: 1800 },
        "normalEngine": { power: 120, volume: 2400 },
        "MonsterEngine": { power: 200, volume: 3500 }
    }

    let car = {
        model: inputOrder.model,
        engine: null,
        carriage: null,
        wheels: undefined
    }

    if(inputOrder.power <= 90) {
        car.engine = engineEnum.smallEngine;
    } else if (inputOrder.power <= 120) {
        car.engine = engineEnum.normalEngine;
    } else {
        car.engine = engineEnum.MonsterEngine;
    }

    if(inputOrder.carriage === "hatchback") {
        car.carriage = {type: 'hatchback', color: inputOrder.color};
    } else {
        car.carriage = {type: 'coupe', color: inputOrder.color};  
    }

    let size = inputOrder.wheelsize % 2 !== 0 ? inputOrder.wheelsize : inputOrder.wheelsize - 1;
    car.wheels = new Array(4).fill(size);

   return car;
    
}

let result = carFactory({ 
    
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })

console.log(result);


