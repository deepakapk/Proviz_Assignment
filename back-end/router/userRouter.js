import express from "express"
import { getApplications, postApplication } from "../controller/userController.js"

const router = express.Router()

router.post("/post/application", postApplication )
router.get("/get/application",getApplications)

export default router