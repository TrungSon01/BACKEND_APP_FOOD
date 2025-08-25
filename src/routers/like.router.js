import express from "express";
import { likeController } from "../controllers/like.controller";
const likeRouter = express.Router();

// Tạo route CRUD
likeRouter.post("/", likeController.create);
likeRouter.get("/", likeController.findAll);

likeRouter.post("/unlikeOrLike", likeController.unlikeOrLike);
likeRouter.get("/getLike", likeController.getLike);

likeRouter.get("/:id", likeController.findOne);
likeRouter.patch("/:id", likeController.update);
likeRouter.delete("/:id", likeController.remove);

export default likeRouter;
