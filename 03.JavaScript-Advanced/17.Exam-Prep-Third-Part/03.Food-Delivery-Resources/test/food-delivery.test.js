import { expect } from "chai";
import { foodDelivery } from "../foodDelivery.js";

describe("FoodDelivery", () => {

    // getCategory()
    it("should return correct description for 'Vegan'", () => {
        expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
    });

    it("should return correct description for 'Vegetarian'", () => {
        expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
    });

    it("should return correct description for 'Gluten-Free'", () => {
        expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
    });

    it("should return correct description for 'All'", () => {
        expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
    });

    it("should throw error for invalid category 'Keto'", () => {
        expect(() => foodDelivery.getCategory("Keto")).to.throw("Invalid Category!");
    });

    it("should throw error for empty string category", () => {
        expect(() => foodDelivery.getCategory("")).to.throw("Invalid Category!");
    });

    it("should throw error for null category", () => {
        expect(() => foodDelivery.getCategory(null)).to.throw("Invalid Category!");
    });

    it("should throw error for numeric category", () => {
        expect(() => foodDelivery.getCategory(5)).to.throw("Invalid Category!");
    });

    // addMenuItem()
    it("should return count of items under price threshold", () => {
        const menu = [
            { name: "Salad", price: 8 },
            { name: "Burger", price: 12 },
            { name: "Soup", price: 5 }
        ];
        expect(foodDelivery.addMenuItem(menu, 10)).to.equal("There are 2 available menu items matching your criteria!");
    });

    it("should return correct count when exactly one item meets price criteria", () => {
        const menu = [
            { name: "Burger", price: 10 },
            { name: "Pizza", price: 15 }
        ];
        expect(foodDelivery.addMenuItem(menu, 10)).to.equal("There are 1 available menu items matching your criteria!");
    });

    it("should return 0 when no items meet price threshold", () => {
        const menu = [{ name: "Steak", price: 15 }];
        expect(foodDelivery.addMenuItem(menu, 10)).to.equal("There are 0 available menu items matching your criteria!");
    });

    it("should throw error for non-array menu", () => {
        expect(() => foodDelivery.addMenuItem("not an array", 10)).to.throw("Invalid Information!");
    });

    it("should throw error for empty menu array", () => {
        expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
    });

    it("should throw error for non-numeric price", () => {
        expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], "not a number")).to.throw("Invalid Information!");
    });

    it("should throw error for price less than 5", () => {
        expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], 3)).to.throw("Invalid Information!");
    });

    it("should throw error for negative price", () => {
        expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], -1)).to.throw("Invalid Information!");
    });

    // calculateOrderCost()
    it("should calculate total cost with 15% discount", () => {
        const result = foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], true);
        expect(result).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
    });

    it("should calculate total cost without discount", () => {
        const result = foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], false);
        expect(result).to.equal("You spend $12.50 for shipping and addons!");
    });

    it("should return $0.00 for empty shipping and addons arrays", () => {
        const result = foodDelivery.calculateOrderCost([], [], false);
        expect(result).to.equal("You spend $0.00 for shipping and addons!");
    });

    it("should throw error for invalid shipping (not an array)", () => {
        expect(() => foodDelivery.calculateOrderCost("not array", [], true)).to.throw("Invalid Information!");
    });

    it("should throw error for invalid addons (not an array)", () => {
        expect(() => foodDelivery.calculateOrderCost([], "not array", true)).to.throw("Invalid Information!");
    });

    it("should throw error for invalid discount (not a boolean)", () => {
        expect(() => foodDelivery.calculateOrderCost([], [], "not boolean")).to.throw("Invalid Information!");
    });
});


// describe("FoodDelivery", () => {
//     it("getCategory", () => { // A function that accepts one parameter: string.
//         expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products."); // If the string is equal to "Vegan"
//         expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish."); // If the string is equal to "Vegetarian"
//         expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten."); // If the string is equal to "Gluten-Free"
//         expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
//         expect(() => foodDelivery.getCategory("Keto")).to.throw("Invalid Category!"); // If the string different type
//         expect(() => foodDelivery.getCategory("")).to.throw("Invalid Category!"); // If the string different type 
//         expect(() => foodDelivery.getCategory(null)).to.throw("Invalid Category!"); // If the string different type
//         expect(() => foodDelivery.getCategory(5)).to.throw("Invalid Category!"); // If the string different type
//     });

//     it("addMenuItem", () => { // A function that accepts an array of objects({name: Item name, price: item price}) and number.
//         expect(foodDelivery.addMenuItem([
//             { name: "Salad", price: 8 },
//             { name: "Burger", price: 12 },
//             { name: "Soup", price: 5 }
//         ], 10)).to.equal("There are 2 available menu items matching your criteria!");

//         expect(foodDelivery.addMenuItem([
//             { name: "Burger", price: 10 },
//             { name: "Pizza", price: 15 }
//         ], 10)).to.equal("There are 1 available menu items matching your criteria!");

//         expect(foodDelivery.addMenuItem([
//             { name: "Steak", price: 15 }
//         ], 10)).to.equal("There are 0 available menu items matching your criteria!");

//         expect(() => foodDelivery.addMenuItem("not an array", 10)).to.throw("Invalid Information!");
//         expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
//         expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], "not a number")).to.throw("Invalid Information!");
//         expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], 3)).to.throw("Invalid Information!");
//         expect(() => foodDelivery.addMenuItem([{ name: "Item", price: 5 }], -1)).to.throw("Invalid Information!");
//     });

//     it("calculateOrderCost", () => { // A function that accepts three parameters: array, array, and boolean.
//         expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], true))
//             .to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
//         expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], false))
//             .to.equal("You spend $12.50 for shipping and addons!");
//         expect(foodDelivery.calculateOrderCost([], [], false))
//             .to.equal("You spend $0.00 for shipping and addons!");
//         expect(() => foodDelivery.calculateOrderCost("not array", [], true)).to.throw("Invalid Information!");
//         expect(() => foodDelivery.calculateOrderCost([], "not array", true)).to.throw("Invalid Information!");
//         expect(() => foodDelivery.calculateOrderCost([], [], "not boolean")).to.throw("Invalid Information!");
//     });
// });