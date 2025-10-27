import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";
import volcanoController from "./controllers/volcanoController.js";

const routes = Router();

routes.use(homeController)

// TODO - Add routes here
routes.use("/users", userController);
routes.use("/volcanos", volcanoController);

// The errorController must be the last one
routes.use(errorController)

export default routes;

// We use it to import all the controllers