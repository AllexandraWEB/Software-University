class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        class Supply {
            constructor(supplyName, supplyQuantity, supplyTotalPrice) {
                this.supplyName = supplyName;
                this.supplyQuantity = supplyQuantity;
                this.supplyTotalPrice = supplyTotalPrice;
            }
        }

        let messages = [];   

        for(const supplyStr of supplies) { // Refers to the supplies from the method's argument
            let [name, quantityStr, priceStr] = supplyStr.split(" ");
            let quantity = Number(quantityStr);
            let price = Number(priceStr);

            const supply = new Supply(name, quantity, price);

            if(supply.supplyTotalPrice <= this.initialBudget) {
                if(!this.supplyStock[supply.supplyName]) {
                    this.supplyStock[supply.supplyName] = 0;
                }

                this.supplyStock[supply.supplyName] += supply.supplyQuantity;
                this.initialBudget -= supply.supplyTotalPrice;

                messages.push(`Successfully stocked ${supply.supplyQuantity} ${supply.supplyName}`);
            } else {
                messages.push(`There was not enough money to restock ${supply.supplyQuantity} ${supply.supplyName}`)
            }   
        }
        return messages.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if(this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`
        }

        let suppliesObject = {}; // Stores all the supplies required for one room type

        for(const line of neededSupplies) {
            let [supplyName, quantityStr] = line.split(" ");
            suppliesObject[supplyName] = Number(quantityStr);
        }

        this.roomAvailability[roomType] = {
            neededSupplies: suppliesObject,
            pricePerNight: pricePerNight
        };

        const totalRoomTypes = Object.keys(this.roomAvailability).length;

        return `Great idea! Now with the ${roomType}, we have ${totalRoomTypes} types of rooms available, any other ideas?`
    }

    showAvailableRooms() {
        const roomTypes = Object.entries(this.roomAvailability);

        if(roomTypes.length === 0) {
            return `Our rooms are not ready yet, please come back later...`
        }

         return roomTypes
        .map(([roomType, roomInfo]) => `${roomType} - $ ${roomInfo.pricePerNight}`)
        .join("\n");
    }

    bookRoom(roomType) {
        if(!this.roomAvailability.hasOwnProperty(roomType)) { // Check if the room is not available
            return `There is no ${roomType} available, would you like to book another room?`
        }

        const room = this.roomAvailability[roomType];
        const neededSupplies = room.neededSupplies;

        for(const [supplyName, requiredQuantity] of Object.entries(neededSupplies)) {
            if(!this.supplyStock.hasOwnProperty(supplyName) || this.supplyStock[supplyName] < requiredQuantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
            }
        }
        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`
    }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));




