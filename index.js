import Express from "express";
import env from "./src/lib/env.js";
import MongooseConnection from "./src/lib/connections/mongoose.js";
import routes from "./src/api/index.js";
import morgan from "morgan";
import bodyParser from "body-parser";

const run = async () => {
  const app = Express();
  app.listen(env.port, console.log(`server is up & running on ${env.port}`));
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(morgan(env.log_output));
  app.use(routes());
  MongooseConnection(env.mongo_uri);
};

run();
