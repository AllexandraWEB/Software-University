class BikeRentalService {
   
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) { // This method adds bikes to the bike rental service
        class Bike {
            constructor(brand, quantity, price) {
                this.brand = brand;
                this.quantity = quantity;
                this.price = price;
            }
        }

        let newlyAddedBrands = new Set();

        for(const line of bikes) {
            let [brand, quantity, price] = line.split('-'); // The information is separated by a dash. Using .split("-")
            price = Number(price); // We need to work with numbers when it comes to the price and quantity
            quantity = Number(quantity);

            let existingBike = this.availableBikes.find((b) => b.brand === brand); // Test if the bike exists in the available bikes using .find()

            if(existingBike) { // If the brand of the current bike is already present in availableBikes array, add the new quantity to the old one and update the old price per bike
                existingBike.quantity += quantity;

                if(existingBike.price < price) { // If the current one is higher.
                    existingBike.price = price;
                }
            } else { // Otherwise add the bike, with properties: {brand, quantity, price} to the availableBikes array.
                this.availableBikes.push(new Bike(brand, quantity, price));
                newlyAddedBrands.add(brand);
            }
        }
        return `Successfully added ${[...newlyAddedBrands].join(", ")}`
    }

    rentBikes(selectedBikes) { // With this method, users can rent bikes from the rental service
        let totalPrice = 0;
        let brandNotFound = false;

        for(const element of selectedBikes) { // For each element of the array selectedBikes, check:
            let [brand, quantity] = element.split("-"); // The information is separated by a dash
            let bikeIndex = this.availableBikes.findIndex((bike) => bike.brand === brand);

            let availableQuantity = bikeIndex !== -1 ? this.availableBikes[bikeIndex].quantity : 0

            if(bikeIndex === -1 || parseInt(quantity) > availableQuantity) {
                brandNotFound = true;
            } else {
                let priceBike = this.availableBikes[bikeIndex].price;
                totalPrice += priceBike * parseInt(quantity); // Calculate the price for the given bike by multiplying the price per bike for the given brand by the quantity desired by the user.
                this.availableBikes[bikeIndex].quantity -= parseInt(quantity); // Reduce the quantity recorded in the availableBikes array.
            }
        }
        if(brandNotFound) {
            return `Some of the bikes are unavailable or low on quantity in the bike rental service.`
        } else {
            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
        }
    }

    returnBikes(returnedBikes) { // This method allows users to return bikes to the rental service
        let hasInvalidBike = false;

        for(const element of returnedBikes) {
            let [brand, quantity] = element.split("-");
            quantity = Number(quantity);

            let bike = this.availableBikes.find(b => b.brand === brand); // Checks if the bike is available

            if(bike) { // If the brand of the current bike is not present in availableBikes array
                bike.quantity += quantity; // Increase the quantity recorded in the array availableBikes with the quantity obtained as a parameter
            } else {
                hasInvalidBike = true;
            }
        }

        return hasInvalidBike ? "Some of the returned bikes are not from our selection." : "Thank you for returning!"
    }

    revision() { // This method returns all available bikes in the store
        let result = [];
        result.push("Available bikes:")

        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price); // Display information about each bike sorted in ascending order of the price

        for(const bike of sortedBikes) {
            result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`)
        }

        result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`)

        return result.join("\n")
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));

console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));

console.log(rentalService.revision());
