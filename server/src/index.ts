import { AppDataSource } from "./data-source";
import { Express } from "express";
import * as express from "express";
import { routes } from "./routes";
import * as cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

AppDataSource.initialize()
  .then(async () => {
    console.log("database on ...");
  })
  .catch((error) => console.log(error));
app.listen(3001, () => {
  console.log("server on");
});
