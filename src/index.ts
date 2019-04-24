import bodyParser from "body-parser";
import { createLogger } from "bunyan";
import cors from "cors";
import express, { Request, Response } from "express";
import process = require("process");

export const app = express();
const port = process.env.PORT || 15100;
const log = createLogger({ name: "Server" });

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        origin: true,
    })
);

// For enabling all origins on employee routes
// tslint:disable-next-line:variable-name
app.all("/", (_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// start the Express server
app.listen(port, () => {
    log.info(`Server started on port ${port}`);
});

import "./users/routes";
import "./wod/routes";

app.get("/ping", (_: Request, res: Response) => {
    log.info("pong");
    res.send("pong");
});
