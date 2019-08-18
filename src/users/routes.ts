// User routes
import { Request, Response } from "express";

import { createLogger } from "bunyan";
import { app } from "../index";
import { testData, logins, users } from "./data";

// import { IWod } from "../users/model";
import { IScore, IUserLogin, IUser } from "./model";

const log = createLogger({
    name: "Users",
});

app.get("/getResults/:year/:month/:day", (req: Request, res: Response) => {
    log.info(`Getting results for WOD on Day: ${req.params.day}, Month: ${req.params.month}, Year: ${req.params.year}`);

    // date to number
    let date = req.params.month + req.params.day + req.params.year;
    date = parseInt(date, 10);

    // look for date in list of IWods
    const atDate = [];
    for (const score of testData) {
        if (score.date === date) {
            atDate.push(score);
        }
    }

    if (atDate.length === 0) {
        res.send([{ userName: "No results found" }]);
    }

    res.send(atDate);
});

app.get("/getAllUsers", (req: Request, res: Response) => {
    log.info(`Getting all users`);

    res.send(users);
});

app.post("/users/login", (req: Request, res: Response) => {
    log.info(`Incoming login credentials are ${req.body}`);
    log.info(`Attempted login with Email: ${req.body.email}`);

    // get data from db and see if correct
    for (const login of logins) {
        if (login.email === req.body.email && login.password === req.body.password) {
            res.send(login);
        }
    }

    res.send(null);
});

