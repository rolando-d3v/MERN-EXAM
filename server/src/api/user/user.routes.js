import { Router } from "express";
// import { tokenAdmin, verifyToken } from "../../middlewares/authToken";
import { createUser, getUsers } from "./userController";

const router = Router();

// router.post('/', [verifyToken, tokenAdmin] , createUser)
router.post("/", createUser);
router.get("/", getUsers);

export default router;
