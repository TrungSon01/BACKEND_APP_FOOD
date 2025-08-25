import express from "express";
import { demoController } from "../controllers/demo.controller";
const demoRouter = express.Router();

// Tạo route CRUD
demoRouter.post("/", demoController.create);
demoRouter.get("/", demoController.findAll);

demoRouter.get("/try", demoController.isConnect);

demoRouter.get("/:id", demoController.findOne);
demoRouter.patch("/:id", demoController.update);
demoRouter.delete("/:id", demoController.remove);
export default demoRouter;
