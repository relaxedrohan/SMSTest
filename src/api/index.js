import { Router } from "express";
import { TaskRoute } from "./routes/taskRoutes.js";

export default () => {
  const app = Router();
  TaskRoute(app);
  return app;
};
