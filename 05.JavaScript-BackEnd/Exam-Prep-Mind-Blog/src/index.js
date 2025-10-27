import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import routes from "./routes.js";
import cookieParser from "cookie-parser";
import pageHelpers from "./views/helpers/pageHelpers.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import listHelpers from "./views/helpers/listHelpers.js";

const app = express();

// TODO Change database name
// Set database
try {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "mind-blog",
  });
  console.log("Database connected successfully!");
} catch (err) {
  console.error("Cannot connect to database: ", err.message);
}

// Config and set  handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
     ...pageHelpers,
     ...listHelpers
    }
  })
);
app.set("view engine", "hbs");
// Set views folder and path
app.set("views", "src/views");

// Add static middlewares
app.use(express.static("src/public"));
// We can check if it's working when we search in the URL /images/{image}.jpeg and it works if the image is being open

// Add cookie parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded({ extended: false }));

// Add auth middleware
app.use(authMiddleware);

// Add routes
app.use(routes);

// Add global error handling
app.use(errorMiddleware);

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
