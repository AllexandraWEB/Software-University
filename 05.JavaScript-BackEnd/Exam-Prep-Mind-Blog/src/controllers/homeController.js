import { Router } from "express";
import { blogService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const homeController = Router();

// GET for rendering home page
homeController.get("/", async (req, res) => {
  const latestBlogs = await blogService.getLatest();  

  res.render("home", { blogs: latestBlogs });
});

// GET for rendering profile, show created and followed blogs
homeController.get("/profile", isAuth, async (req, res) => {
  const userId = req.user.id;
  const createdBlogs = await blogService.getAllByOwner(userId);
  const followedBlogs = await blogService.getAllByFollower(userId);

  res.render("profile", { createdBlogs, followedBlogs });
});

export default homeController;
