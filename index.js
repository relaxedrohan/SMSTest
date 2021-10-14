import Express from "express";
import env from "./src/lib/env.js";
import MongooseConnection from "./src/lib/connections/mongoose.js";

const run = async () => {
  const app = Express();
  app.listen(env.port, console.log(`server is up & running on ${env.port}`));
  MongooseConnection(env.mongo_uri);
};

run();
