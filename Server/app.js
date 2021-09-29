require("./dal");
const express = require("express");
const cors = require("cors");
const worksController = require("./controllers/work");
const catsController = require("./controllers/category");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/works", worksController);
server.use("/api/cats", catsController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));
