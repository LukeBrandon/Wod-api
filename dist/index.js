"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const bunyan_1 = require("bunyan");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const process = require("process");
exports.app = express_1.default();
const port = process.env.PORT || 15100;
const log = bunyan_1.createLogger({ name: "Server" });
// Express configuration
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(cors_1.default({
    credentials: true,
    origin: true,
}));
// For enabling all origins on employee routes
// tslint:disable-next-line:variable-name
exports.app.all("/", (_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
// start the Express server
exports.app.listen(port, () => {
    log.info(`Server started on port ${port}`);
});
require("./users/routes");
require("./wod/routes");
exports.app.get("/ping", (_, res) => {
    log.info("pong");
    res.send("pong");
});
//# sourceMappingURL=index.js.map