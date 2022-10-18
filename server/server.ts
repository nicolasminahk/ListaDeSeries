import express, { Express, Request, Response } from 'express';
import { router } from "./routes"
// const cookieParser = require("cookie-parser");
require("dotenv").config();

const app: Express = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use("/api", router);



app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});