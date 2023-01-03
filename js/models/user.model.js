"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    firstname;
    lastname;
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
