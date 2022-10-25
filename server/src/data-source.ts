import "reflect-metadata";
import { DataSource } from "typeorm";
import { Serie } from "./entity/Series.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "series",
  synchronize: true,
  logging: false,
  entities: [Serie],
  migrations: [],
  subscribers: [],
});
