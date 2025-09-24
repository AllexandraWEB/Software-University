import http from "http";
import fs from "fs/promises";
import siteCss from "./site.css.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const homeHtml = await fs.readFile("./src/views/home/index.html", {
      encoding: "utf-8",
    });

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homeHtml);
  } else if (req.url === "/styles/site.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(siteCss);
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}...`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Try a different one.`);
    process.exit(1);
  } else {
    throw err;
  }
});
