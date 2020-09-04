"use strict";
exports.__esModule = true;
var _1 = require(".");
var bindDescription = function (person) {
    var Descriptions = [
        {
            description: "Ol\u00E1 eu sou o " + person.name + " tenho " + _1.calculateAge(person) + " anos de idade, nasci em " + person.birthDate + ", sou de " + person.city + " - " + person.state + ", tenho forma\u00E7\u00E3o em " + person.academy + ", sou entusiasta de " + person.interest + "."
        },
        {
            description: "Ol\u00E1 eu sou a " + person.name + " tenho " + _1.calculateAge(person) + " anos de idade, nasci em " + person.birthDate + ", sou de " + person.city + " - " + person.state + ", tenho forma\u00E7\u00E3o em " + person.academy + ", sou intusiasta de " + person.interest + "."
        },
    ];
    if (person.genre === 0) {
        return Descriptions[0].description;
    }
    return Descriptions[1].description;
};
exports["default"] = bindDescription;
