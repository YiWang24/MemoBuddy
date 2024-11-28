const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const middlewares = require("./middleware/index");
const passport = require("./middleware/passportMiddleware");
const routers = require("./routes/index");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  swaggerDefinition: config.swaggerDefinition,
  apis: ["./routes/*.js", "./models/*.js"],
};
const swaggerSpec = swaggerJsDoc(options);
const cors = require("cors");
const app = express();

app.use(cors({ origin: config.cors.origin, credentials: true }));

// Connect to MongoDB
mongoose
  .connect(config.db.url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.static("public")); // to serve static files
app.use(express.json()); // to parse the body of the request
app.use(express.urlencoded({ extended: true })); // to parse the body of the request
app.use(middlewares.sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(`${config.app.apiPrefix}`, routers); // all routes are prefixed with /api
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI

app.use(middlewares.errorMiddleware); // error handler

// Start the server
app.listen(config.app.port, () => {
  console.log(
    `Server ${config.app.name} is running on port ${config.app.port} in dev mode`
  );
});
