import mongoose from "mongoose";

export default async function MongooseConnection(mongoURI) {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to db");
  } catch (e) {
    console.log(e);
  }
}
