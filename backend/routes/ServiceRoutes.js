import express from 'express'
import ServiceController from '../controllers/ServiceController.js'
import ServiceRequestController from '../controllers/ServiceRequestController.js'

const router = express.Router()

router.post("/register", ServiceController.register)
router.post("/request", ServiceRequestController.request)
// router.get("/check-user", UserController.checkUser)
// router.get("/:id", UserController.getUserbyId)
// router.patch("/edit/:id", verifyToken, UserController.edit)

export default router