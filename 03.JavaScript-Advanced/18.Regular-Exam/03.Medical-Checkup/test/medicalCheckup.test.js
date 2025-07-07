import { expect } from "chai";
import { medicalCheckup } from "../medicalCheckup.js";

describe("medicalCheckup", () => {
    // scheduleAppointment
    it("should throw an error since patientsCount is a string", () => {
               expect(() => medicalCheckup.scheduleAppointment("5", 20, "Sofia")).to.throw("Invalid Information!");
    });

    it("should throw an error since costPerPatient is a string", () => {
               expect(() => medicalCheckup.scheduleAppointment(5, "20", "Sofia")).to.throw("Invalid Information!");
    });

    it("should throw an error since clinicLocation is an empty string", () => {
               expect(() => medicalCheckup.scheduleAppointment(5, 20, "")).to.throw("Invalid Information!");
    });

    it("should throw an error since clinicLocation is a number", () => {
               expect(() => medicalCheckup.scheduleAppointment(5, 20, 5)).to.throw("Invalid Information!");
    });

    it("should throw an error since clinicLocation is not Sofia", () => {
               expect(() => medicalCheckup.scheduleAppointment(5, 20, "Plovdiv")).to.throw("The location of this clinic is not in the correct city!");
    });

    it("should return positive message that the requirements are met (greater than 30)", () => {
                expect(medicalCheckup.scheduleAppointment(35, 40, "Sofia")).to.equal("This clinic meets the requirements, with capacity for 35 patients at 40$ per checkup.")
    })

    it("should return positive message that the requirements are met (equal to 30)", () => {
                expect(medicalCheckup.scheduleAppointment(30, 40, "Sofia")).to.equal("This clinic meets the requirements, with capacity for 30 patients at 40$ per checkup.")
    })

    it("should return positive message that the requirements are met (less than 50)", () => {
                expect(medicalCheckup.scheduleAppointment(30, 30, "Sofia")).to.equal("This clinic meets the requirements, with capacity for 30 patients at 30$ per checkup.")
    })

    it("should return positive message that the requirements are met (equal to 50)", () => {
                expect(medicalCheckup.scheduleAppointment(30, 50, "Sofia")).to.equal("This clinic meets the requirements, with capacity for 30 patients at 50$ per checkup.")
    })

    it("should return a message when conditions are not met", () => {
        const result = medicalCheckup.scheduleAppointment(20, 60, "Sofia");
                expect(result).to.equal("This clinic does not meet your requirements!");
    });

    // roomDistribution

    it("should return an error since patients is not a number", () => {
                expect(() => medicalCheckup.roomDistribution("5", 5)).to.throw("Invalid Information!");
    });

    it("should return an error since rooms is not a number", () => {
                expect(() => medicalCheckup.roomDistribution(5, "5")).to.throw("Invalid Information!");
    });

    it("should return an error since patients is negative number", () => {
                expect(() => medicalCheckup.roomDistribution(-5, 5)).to.throw("Invalid Information!");
    });

    it("should return an error since rooms is negative number", () => {
                expect(() => medicalCheckup.roomDistribution(5, -5)).to.throw("Invalid Information!");
    });

    it("should return a message for fewer than 4 patients per room", () => {
        const result = medicalCheckup.roomDistribution(6, 3); // 2 per room
        expect(result).to.equal("There is only 2 patient in every room, consider rearranging.");
    });

    it("should return a message for exactly 4 patients per room", () => {
        const result = medicalCheckup.roomDistribution(12, 3); // 4 per room
        expect(result).to.equal("You have 3 rooms with 4 patients in each room.");
    });

    it("should return a message for more than 4 patients per room", () => {
        const result = medicalCheckup.roomDistribution(25, 5); // 5 per room
        expect(result).to.equal("You have 5 rooms with 5 patients in each room.");
    });

    it("should round patients per room correctly (round up)", () => {
        const result = medicalCheckup.roomDistribution(10, 3); // rounds to 3
        expect(result).to.equal("There is only 3 patient in every room, consider rearranging.");
    });

    it("should round patients per room correctly (round down)", () => {
        const result = medicalCheckup.roomDistribution(11, 3); // rounds to 4
        expect(result).to.equal("You have 3 rooms with 4 patients in each room.");
    });

    // additionalServices
    it("should return an error since labTests is string", () => {
                expect(() => medicalCheckup.additionalServices("Test", [], true)).to.throw("Invalid Information!");
    });

    it("should return an error since labTests is number", () => {
                expect(() => medicalCheckup.additionalServices(5, [], true)).to.throw("Invalid Information!");
    });

    it("should return an error since consultations is string", () => {
                expect(() => medicalCheckup.additionalServices([], "Test", true)).to.throw("Invalid Information!");
    });

    it("should return an error since consultations is number", () => {
                expect(() => medicalCheckup.additionalServices([], 5, true)).to.throw("Invalid Information!");
    });

    it("should return an error since hasInsurance is string", () => {
                expect(() => medicalCheckup.additionalServices([], [], "true")).to.throw("Invalid Information!");
    });

    it("should return an error since hasInsurance is number", () => {
                expect(() => medicalCheckup.additionalServices([], [], 5)).to.throw("Invalid Information!");
    });

    it("should throw an error if labTests is not an array", () => {
        expect(() => medicalCheckup.additionalServices("blood", ["general"], true)).to.throw("Invalid Information!");
    });

    it("should throw an error if consultations is not an array", () => {
        expect(() => medicalCheckup.additionalServices(["blood"], "general", true)).to.throw("Invalid Information!");
    });

    it("should throw an error if hasInsurance is not a boolean", () => {
        expect(() => medicalCheckup.additionalServices(["blood"], ["general"], "yes")).to.throw("Invalid Information!");
    });

    it("should return 0 cost if no services are used and no insurance", () => {
        expect(medicalCheckup.additionalServices([], [], false)).to.equal("You spend 0$ for lab tests and consultations!");
    });

    it("should return 0 cost if no services are used and with insurance", () => {
        expect(medicalCheckup.additionalServices([], [], true)).to.equal("You spend 0$ for lab tests and consultations with 20% insurance discount!");
    });

    // Only lab tests, no insurance
    it("should return correct total for blood test only, no insurance", () => {
        expect(medicalCheckup.additionalServices(["blood"], [], false)).to.equal("You spend 20$ for lab tests and consultations!");
    });

    it("should return correct total for blood + urine tests, no insurance", () => {
        expect(medicalCheckup.additionalServices(["blood", "urine"], [], false)).to.equal("You spend 35$ for lab tests and consultations!");
    });

    // Only consultations, no insurance
    it("should return correct total for general consultation only, no insurance", () => {
        expect(medicalCheckup.additionalServices([], ["general"], false)).to.equal("You spend 100$ for lab tests and consultations!");
    });

    it("should return correct total for specialist consultation only, no insurance", () => {
        expect(medicalCheckup.additionalServices([], ["specialist"], false)).to.equal("You spend 200$ for lab tests and consultations!");
    });

    // Full combo without insurance
    it("should return correct total for full set of services, no insurance", () => {
        const result = medicalCheckup.additionalServices(["blood", "urine"], ["general", "specialist"], false);
        expect(result).to.equal("You spend 335$ for lab tests and consultations!");
    });

    // Full combo with insurance
    it("should apply 20% discount if hasInsurance is true", () => {
        const result = medicalCheckup.additionalServices(["blood", "urine"], ["general", "specialist"], true);
        expect(result).to.equal("You spend 268$ for lab tests and consultations with 20% insurance discount!");
    });

    // Edge case: unrecognized test/consultation types
    it("should ignore unrecognized lab test or consultation types", () => {
        const result = medicalCheckup.additionalServices(["blood", "xray"], ["general", "unknown"], false);
        expect(result).to.equal("You spend 120$ for lab tests and consultations!");
    });
})