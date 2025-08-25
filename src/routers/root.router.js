import express from "express";
import demoRouter from "./demo.router";
import likeRouter from "./like.router";
import restaurantRouter from "./restaurant.router";
import orderRouter from "./order.router";

const rootRouter = express.Router();

rootRouter.use("/demo", demoRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/restaurant", restaurantRouter);
rootRouter.use("/order", orderRouter);
export default rootRouter;
