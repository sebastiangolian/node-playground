"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
class Device {
    name;
    price;
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
