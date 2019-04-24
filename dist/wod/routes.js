"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = require("bunyan");
const index_1 = require("../index");
const log = bunyan_1.createLogger({
    name: "Wod",
});
const data_1 = require("./data");
index_1.app.get("/getWod/:year/:month/:day", (req, res) => {
    log.info(`Getting wod on Day: ${req.params.day}, Month: ${req.params.month}, Year: ${req.params.year}`);
    // date to number
    let date = req.params.month + req.params.day + req.params.year;
    date = parseInt(date, 10);
    // look for date in list of IWods
    let atDate = { title: "No WOD found" };
    for (const wod of data_1.testData) {
        if (wod.date === date) {
            atDate = wod;
        }
    }
    res.send(atDate);
});
//# sourceMappingURL=routes.js.map