import express from "express"
import cors from "cors"
import CustomerRoutes from "./routes/UserRoutes.js"

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

app.use("/users", CustomerRoutes)
app.listen(5000)