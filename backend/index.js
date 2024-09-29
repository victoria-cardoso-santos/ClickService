import express from "express"
import cors from "cors"
import CustomerRoutes from "./routes/CustomerRoutes.js"

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

app.use("/customers", CustomerRoutes)

app.listen(5000)