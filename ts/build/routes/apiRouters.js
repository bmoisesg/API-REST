"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiController_1 = require("../controllers/apiController");
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    ApiRoutes.prototype.config = function () {
        this.router.get("/", apiController_1.apiController.funcion1);
        this.router.post("/", apiController_1.apiController.funcion2);
        this.router.get("/:nombre", apiController_1.apiController.funcion3);
        this.router.get("/saludo/:nombre", apiController_1.apiController.funcion4);
    };
    return ApiRoutes;
}());
var apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
