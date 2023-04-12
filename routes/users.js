import express from "express";
import { createUser, getAllUsers,findAndUpdateUser,findAndDeleteUser} from "../controllers/userController.js";

const router = express.Router();

router.post('/', createUser);
router.get('/',getAllUsers);
router.patch('/:userid',findAndUpdateUser);
router.delete('/:userid',findAndDeleteUser);

export default router;