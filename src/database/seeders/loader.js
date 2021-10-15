import { JsonModel } from "../models/json.js";
import jsonData from "../../../data.json";
import mongoose from "mongoose";
import MongooseConnection from "../../lib/connections/mongoose.js";
import env from "../../lib/env.js";

try {
  MongooseConnection(env.mongo_uri);
  jsonData.forEach(async (item) => {
    const document = new JsonModel(item);
    await document.save();
  });
} catch (e) {
  console.log(e);
}

setTimeout(() => {
  mongoose.connection.close();
  console.log(`connection ended`);
}, 60000);
