import dotenv from "dotenv";
dotenv.config();

const env = {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  log_output: process.env.LOG_OUTPUT,
};

export default env;
