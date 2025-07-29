import express from "express"
import { registerUser  } from "../controllers/userController.js";
const router = express.Router();
import { authUser } from "../controllers/userController.js";


// router.route('/').post(function).get(function name only)
// router.post('/login',authUser)

router.post('/',registerUser)
router.post('/login',authUser)
export default router;