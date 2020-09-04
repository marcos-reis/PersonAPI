"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var express_1 = require("express");
var PersonsController_1 = require("../controllers/PersonsController");
exports.Routes = express_1.Router();
var personsController = new PersonsController_1["default"]();
exports.Routes.get('/persons', personsController.index);
