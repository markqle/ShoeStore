class ShoeList {
    constructor() {
        this.mangGiay = []; // Array to store Shoe objects
    }

    themGiay(shoeObj) {
        // Add the shoe object (assumed to be an instance of the Shoe class) to the mangGiay array
        this.mangGiay.push(shoeObj);
    }

    orderByPrice() {
        this.mangGiay.sort((shoe1, shoe2) => shoe1.price - shoe2.price);
    }
}