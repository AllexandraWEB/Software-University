import { Router } from "express";

const homeController = Router();

homeController.get("/", async (req, res) => {
  console.log(req.user);

  res.render("home");
});

export default homeController;
