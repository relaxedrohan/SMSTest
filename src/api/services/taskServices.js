import { JsonModel } from "../../database/models/json.js";
import * as Exceptions from "../exceptions/customExceptions.js";

export const getLocations = async () => {
  try {
    const result = await JsonModel.find();
    return result;
  } catch (e) {
    Exceptions.InternalServerError(`couldn't find what you're looking for`);
  }
};

export const getLocation = async (id) => {
  try {
    const result = await JsonModel.findOne({ id: id });
    if (!result) {
      Exceptions.NotFound(`Invalid id: ${id}`);
    }
    return result;
  } catch (e) {
    Exceptions.InternalServerError(`couldn't find what you're looking for`);
  }
};

export const deleteLocation = async (id) => {
  try {
    const res = await JsonModel.findOneAndDelete({ id });
    if (!res) {
      Exceptions.NotFound(`Invalid id: ${id}`);
    }
    return res;
  } catch (e) {
    Exceptions.InternalServerError(`couldn't find what you're looking for`);
  }
};

export const updateLocation = async (id, updates) => {
  try {
    const location = await JsonModel.find({ id });
    const updatedLocation = await JsonModel.findOneAndUpdate(
      { id },
      { ...location, ...updates },
      { new: true }
    );
    if (!location) {
      Exceptions.NotFound(`Invalid id: ${id}`);
    }
    return updatedLocation;
  } catch (e) {
    Exceptions.InternalServerError(`couldn't find what you're looking for`);
  }
};
