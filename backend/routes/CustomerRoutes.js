import express from "express"
import CustomerController from "../controllers/CustomerController.js"

const router = express.Router()

router.post("/register", CustomerController.register)

export default router