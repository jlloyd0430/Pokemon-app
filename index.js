const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require("./database/mongodb");
const logger = require("morgan");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

const pokemonRouter = require("./routes/api/pokemonRouter");
app.use("/api", pokemonRouter);

const viewsRouter = require("./routes/viewRouters/viewRouter.js");
app.use("/", viewsRouter);
app.use(logger("dev"));
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connectToMongoDB();
});
