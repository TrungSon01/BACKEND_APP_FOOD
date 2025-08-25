import express from "express";
import { restaurantController } from "../controllers/restaurant.controller";

const restaurantRouter = express.Router();

// Tạo route CRUD
restaurantRouter.post("/", restaurantController.create);
restaurantRouter.get("/", restaurantController.findAll);

restaurantRouter.post("/addRate", restaurantController.addReview);
restaurantRouter.get("/getRate", restaurantController.getRate);
restaurantRouter.get("/:id", restaurantController.findOne);
restaurantRouter.patch("/:id", restaurantController.update);
restaurantRouter.delete("/:id", restaurantController.remove);

export default restaurantRouter;
