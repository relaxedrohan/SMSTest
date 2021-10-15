import { Router } from "express";
import * as taskController from "../controller/taskController.js";

const route = Router();

export const TaskRoute = (app) => {
  app.use("/api", route);

  //GET for All Locations
  route.get("/locations", taskController.getLocations);

  //GET for one location associated with this id
  route.get("/location/:id", taskController.getLocation);

  //DELETE for location entry
  route.delete("/location/:id", taskController.deleteLocation);

  //POST for Update
  route.post("/location/:id", taskController.updateLocation);
};
