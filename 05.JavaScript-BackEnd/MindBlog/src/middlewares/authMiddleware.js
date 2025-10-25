import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

// General middleware
export function authMiddleware(req, res, next) {
  const token = req.cookies["auth"];

  // Allow if guest
  if (!token) {
    return next();
  }

  //Verify token and clear session if invalid
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    req.user = decodedToken;
    req.isAuthenticated = true;

    // Add to handlebars context
    res.locals.user = decodedToken;
    res.locals.isAuthenticated = true;

    next();
  } catch (err) {
    res.clearCookie("auth");
    res.redirect("/users/login");
  }
}

// Route guards for specific pages

// You can logout if you are authenticated
export function isAuth(req, res, next) {
  if (!req.isAuthenticated) {
    return res.redirect("/users/login");
  }

  next();
}

// You can go to register, login if you are a guest
export function isGuest(req, res, next) {
  if (req.isAuthenticated) {
    return res.redirect("/");
  }

  next();
}
