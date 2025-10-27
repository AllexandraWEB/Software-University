import { Router } from "express";

const errorController = Router();

// Wildcard
errorController.all("/*path", (req, res) => {
    res.render("404")
});

export default errorController;