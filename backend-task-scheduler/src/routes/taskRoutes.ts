import express from "express";
import { startTask1, stopTask1, startTask2, stopTask2 } from "../controllers/taskController";

const router = express.Router();

router.post("/start-task1", startTask1);
router.post("/stop-task1", stopTask1);
router.post("/start-task2", startTask2);
router.post("/stop-task2", stopTask2);

export default router;
