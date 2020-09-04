"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = express_1["default"]();
app.use(routes_1.Routes);
app.listen(3333, function () {
    console.log("server started on port 3333");
});
