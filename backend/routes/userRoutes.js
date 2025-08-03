import express from "express"
import { allUsers, registerUser  } from "../controllers/userController.js";
const router = express.Router();
import { authUser } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";


// router.route('/').post(function).get(function name only)
// router.post('/login',authUser)

router.post('/', registerUser);
router.get('/', protect, allUsers);

router.post('/login',authUser)
export default router;