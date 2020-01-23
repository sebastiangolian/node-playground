"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    log() {
        console.log("firstname is  :   " + this.firstname);
        console.log("lastname is  :   " + this.lastname);
    }
}
exports.User = User;
