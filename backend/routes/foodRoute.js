import express from "express";
import { addFood,listFood, removeFood } from "../controller/foodcontroller.js";
import multer from "multer";

const foodRouter = express.Router();

// Configure storage for multer
const storage = multer.diskStorage({
  destination: "uploads", // where files will be stored
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Add food route with image upload
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)
export default foodRouter;
