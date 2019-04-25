"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = require("bunyan");
const index_1 = require("../index");
const data_1 = require("./data");
const log = bunyan_1.createLogger({
    name: "Wod",
});
index_1.app.get("/getResults/:year/:month/:day", (req, res) => {
    log.info(`Results for WOD on Day: ${req.params.day}, Month: ${req.params.month}, Year: ${req.params.year}`);
    // date to number
    let date = req.params.month + req.params.day + req.params.year;
    date = parseInt(date, 10);
    // look for date in list of IWods
    const atDate = [];
    for (const score of data_1.testData) {
        if (score.date === date) {
            atDate.push(score);
        }
    }
    if (atDate.length === 0) {
        res.send([{ userName: "No results found" }]);
    }
    res.send(atDate);
});
//# sourceMappingURL=routes.js.map