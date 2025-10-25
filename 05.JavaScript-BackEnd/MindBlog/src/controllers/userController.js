import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

//GET For register
userController.get("/register", isGuest, (req, res) => {
  res.render("users/register");
});

//POST for register
userController.post("/register", isGuest, async (req, res) => {
  const { email, username, password, repeatPassword } = req.body;

  try {
    const token = await userService.register(email, username, password, repeatPassword);

    res.cookie("auth", token);
    res.redirect("/");
  } catch (err) {
    res.status(400).render("users/register", {
      error: getErrorMessage(err),
      user: { email, username }
    });
  }
});

//GET for login
userController.get("/login", isGuest, (req, res) => {
  res.render("users/login");
});

//POST for login
userController.post("/login", isGuest, async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);

    res.cookie("auth", token);
    res.redirect("/");
  } catch (err) {
    res.status(404).render("users/login", {
      error: getErrorMessage(err),
      user: { email },
    });
  }
});

//GET for logout
userController.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

export default userController;
