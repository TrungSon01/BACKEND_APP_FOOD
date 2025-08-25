import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router";
import { appError } from "./src/common/app-error/app-error.error";
const app = express();

// giúp body nhận dữ liệu
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3001", "google.com"],
  })
);

app.use("/api", rootRouter);
app.use(appError);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
