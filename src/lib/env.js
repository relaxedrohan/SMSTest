import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  log_output: process.env.LOG_OUTPUT,
};
