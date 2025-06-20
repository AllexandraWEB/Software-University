import { expect } from "chai";
import { artGallery } from "../artGallery.js";

describe("ArtGallery", () => {
    // addArtwork
    it("should throw an error for number in the title string", () => {
           expect(() => artGallery.addArtwork(5, "30 x 40", "Picasso")).to.throw("Invalid Information!");
    });

    it("should throw an error for number in the artist string", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30 x 40", 5)).to.throw("Invalid Information!");
    });

    it("should throw an error for number in the artist string", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30 d 40", "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for number in the dimension string", () => {
           expect(() => artGallery.addArtwork("Sunflower", 5 , "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for incorrect dimension format", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30x 40" , "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for incorrect dimension format", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30 x40" , "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for incorrect dimension format", () => {
           expect(() => artGallery.addArtwork("Sunflower", "-30 x 40" , "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for incorrect dimension format", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30 x -40" , "Picasso")).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for forbidden artist", () => {
           expect(() => artGallery.addArtwork("Sunflower", "30 x 40" , "Pikasso")).to.throw("This artist is not allowed in the gallery!");
    });

    it("should return the message stating that the input is valid", () => {
            expect(artGallery.addArtwork("Sunflower", "30 x 40" , "Picasso")).to.equal("Artwork added successfully: 'Sunflower' by Picasso with dimensions 30 x 40.")
    })

    // calculateCosts

    it("should throw an error since the exhibitionCosts is not a number", () => {
            expect(() => artGallery.calculateCosts("20", 10, true)).to.throw("Invalid Information!");
    })

    it("should throw an error since the insuranceCosts is not a number", () => {
            expect(() => artGallery.calculateCosts(20, "10", true)).to.throw("Invalid Information!");
    })

    it("should throw an error since the exhibitionCosts is a negative number", () => {
            expect(() => artGallery.calculateCosts(-20, 10, true)).to.throw("Invalid Information!");
    })

    it("should throw an error since the insuranceCosts is a negative number", () => {
            expect(() => artGallery.calculateCosts(20, -10, true)).to.throw("Invalid Information!");
    })

    it("should throw an error since the insuranceCosts is a negative number", () => {
            expect(() => artGallery.calculateCosts(20, 10, 10)).to.throw("Invalid Information!");
    })

    it("should return positive message with 10% discount", () => {
            expect(artGallery.calculateCosts(20, 10, true)).to.equal("Exhibition and insurance costs are 27$, reduced by 10% with the help of a donation from your sponsor.")
    })

    it("should return positive message without discount", () => {
            expect(artGallery.calculateCosts(20, 10, false)).to.equal("Exhibition and insurance costs are 30$.")
    })

    // organizeExhibits

    it("should throw an error since the artworksCount is not a number", () => {
            expect(() => artGallery.organizeExhibits("10", 10)).to.throw("Invalid Information!");
    })

    it("should throw an error since the displaySpacesCount is not a number", () => {
            expect(() => artGallery.organizeExhibits(10, "10")).to.throw("Invalid Information!");
    })

    it("should throw an error since the artworksCount is negative number", () => {
            expect(() => artGallery.organizeExhibits(-10, 10)).to.throw("Invalid Information!");
    })

     it("should throw an error since the displaySpacesCount is negative number", () => {
            expect(() => artGallery.organizeExhibits(10, -10)).to.throw("Invalid Information!");
    })

    it("should return the message with calculated artworksPerSpace", () => {
             expect(artGallery.organizeExhibits(50, 5)).to.equal('You have 5 display spaces with 10 artworks in each space.');      
    })

    it("should return the message with calculated artworksPerSpace with less than 5", () => {
             expect(artGallery.organizeExhibits(5, 5)).to.equal('There are only 1 artworks in each display space, you can add more artworks.');     
    })

    it("should return the message with calculated artworksPerSpace", () => {
            expect(artGallery.organizeExhibits(9, 5)).to.equal('There are only 1 artworks in each display space, you can add more artworks.'); 
    })
})