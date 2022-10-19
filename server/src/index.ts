import { AppDataSource } from "./data-source"
import { Express, Router } from "express"
import * as express from "express"
import { Serie } from "./entity/Series.entity"
import { routes } from "./routes"

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", routes)


//Usar appdata en rutas 
AppDataSource.initialize().then(async () => {

    console.log("database on ...")
    // const serie = new Serie()
    // // serie.titulo = "jjjjj"
    // serie.descripcion = "Sin titulo new"
    // serie.precio = 25
    // serie.estrellas = 3
    // // serie.active = true
    // serie.atp = true
    // serie.fecha = new Date()
    // serie.genero = "drama"

    // await AppDataSource.manager.save(serie)
    // console.log("Saved a new user with id: " + serie.precio)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(Serie)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
app.listen(3000, () => {
    console.log("server on")
})

