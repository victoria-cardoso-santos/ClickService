import express from "express"
import cors from "cors"
import UserRoutes from "./routes/UserRoutes.js"
import ServiceRoutes from "./routes/ServiceRoutes.js"

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: "http://localhost:8080" }))

app.use("/users", UserRoutes)
app.use("/services", ServiceRoutes)
app.listen(5000)