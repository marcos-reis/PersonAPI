"use strict";
exports.__esModule = true;
var generateEmail = function (person) {
    var name = person.name.replace(" ", "").toLowerCase();
    var domain = "personapi.com";
    return name + "@" + domain;
};
exports["default"] = generateEmail;
