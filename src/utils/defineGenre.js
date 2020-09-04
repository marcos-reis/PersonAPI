"use strict";
exports.__esModule = true;
var defineGenre = function (person) {
    var genreIndex = person.genre;
    return genreIndex == 0 ? "male" : "female";
};
exports["default"] = defineGenre;
