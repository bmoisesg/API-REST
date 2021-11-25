"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var apiRouters_1 = __importDefault(require("./routes/apiRouters"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use("/usuario", apiRouters_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("Server on port ", _this.app.get("port"));
        });
    };
    return Server;
}());
exports.server = new Server();
exports.server.start();
