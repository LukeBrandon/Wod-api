"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = require("bunyan");
const index_1 = require("../index");
const log = bunyan_1.createLogger({
    name: "Wod",
});
index_1.app.get("/getResults/:year/:month/:day", (req, res) => {
    log.info(`Results for WOD on Day: ${req.params.day}, Month: ${req.params.month}, Year: ${req.params.year}`);
    // // date to number
    // let date = req.params.month + req.params.day + req.params.year;
    // date = parseInt(date, 10);
    // // look for date in list of IWods
    // let atDate = { title: "No WOD found" };
    // for (const wod of testData) {
    //     if (wod.date === date) {
    //         atDate = wod;
    //     }
    // }
    res.send({ userName: "not implemented yet" });
});
//# sourceMappingURL=routes.js.map