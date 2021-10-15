import Mongoose from "mongoose";
const { Schema } = Mongoose;
const jsonSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  city: String,
  start_date: String,
  end_date: String,
  price: Schema.Types.Decimal128,
  status: String,
  color: String,
});

export const JsonModel = Mongoose.model("JsonModel", jsonSchema);
