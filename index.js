import Express from "express";
import env from "./src/lib/env.js";
import MongooseConnection from "./src/lib/connections/mongoose.js";
import routes from "./src/api/index.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const run = async () => {
  const app = Express();
  app.listen(env.port, console.log(`server is up & running on ${env.port}`));
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
  app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );

  app.use(morgan(env.log_output));
  MongooseConnection(env.mongo_uri);
  app.use(routes());
};

run();
