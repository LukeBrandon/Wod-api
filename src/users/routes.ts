// User routes
import { Request, Response } from "express";

import { createLogger } from "bunyan";
import { app } from "../index";

import { IWod } from "../users/model";
import { IScore } from "./model";

const log = createLogger({
    name: "Wod",
});

app.get("/getResults/:year/:month/:day", (req: Request, res: Response) => {
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
