import express from "express"
import UserController from "../controllers/UserController.js"
import verifyToken from "../helpers/verifyToken.js"

const router = express.Router()

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/check-user", UserController.checkUser)
router.get("/:id", UserController.getUserbyId)
router.patch("/edit/:id", verifyToken, UserController.edit)

export default router