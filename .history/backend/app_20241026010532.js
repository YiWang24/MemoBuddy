const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const middlewares = require("./middleware");
const passport = require("./middleware/passportMiddleware");
const routers = require("./routes/index");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  swaggerDefinition: config.swaggerDefinition,
  apis: ["./routes/*.js", "./models/*.js"],
};
const swaggerSpec = swaggerJsDoc(options);
const app = express();

mongoose
  .connect(config.db.url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewares.sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(`${config.app.apiPrefix}`,routers);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "server error" });
});

app.listen(config.app.port, () => {
  console.log(`Server ${config.app.name} is running on port ${config.app.port} in dev mode`);
});