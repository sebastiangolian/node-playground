"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    disp() {
        console.log("Name is  :   " + this.name);
        console.log("Price is  :   " + this.price);
    }
}
exports.Device = Device;
