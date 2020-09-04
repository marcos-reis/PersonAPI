"use strict";
exports.__esModule = true;
var calculateAge = function (person) {
    var _a = person.birthDate.split("-"), day = _a[0], month = _a[1], year = _a[2];
    var BirthDateInstance = new Date(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
    var CurrentDate = new Date();
    return CurrentDate.getFullYear() - BirthDateInstance.getFullYear();
};
exports["default"] = calculateAge;
