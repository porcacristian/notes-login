import { Router } from "express";
import { usersCtrl } from "../controllers/users.controller.js";
const { renderSignUpForm, renderSignInForm, signIn, signUp, logOut } =
  usersCtrl;

const router = Router();

//New user
router.get("/api/v1/users/new-user", renderSignUpForm);
router.post("/api/v1/users/new-user", signUp);

//Login
router.get("/api/v1/users/sign-in", renderSignInForm);
router.post("/api/v1/users/sign-in", signIn);

//Logout
router.get("/api/v1/users/logout", logOut);

export default router;
