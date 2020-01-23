"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_js_1 = require("../models/user.model.js");
console.log('------------ user -------------');
let user = new user_model_js_1.User("Jan", "Kowalski");
user.log();
