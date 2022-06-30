import { Router } from "express";
import { usersCtrl } from "../controllers/users.controller.js";
const { renderSignUpForm, renderSignInForm, signIn, signup, logOut } =
  usersCtrl;

const router = Router();

//New user
router.get("/api/v1/users/signup", renderSignUpForm);
router.post("/api/v1/users/signup", signup);

//Login
router.get("/api/v1/users/sign-in", renderSignInForm);
router.post("/api/v1/users/sign-in", signIn);

//Logout
router.get("/api/v1/users/logout", logOut);

export default router;
