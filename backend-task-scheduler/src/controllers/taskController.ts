import { Request, Response } from 'express';
import cron from "node-cron";

let task1: cron.ScheduledTask | null = null;
let task2: cron.ScheduledTask | null = null;

export const startTask1 = (req: Request, res: Response) => {
  if (!task1) {
    task1 = cron.schedule("*/5 * * * * *", () => {
      console.log("Task 1 is running every 5 seconds");
    });
    return res.json({ message: "Task 1 started" });
  }
  return res.status(400).json({ message: "Task 1 is already running" });
};

export const stopTask1 = (req: Request, res: Response) => {
  if (task1) {
    task1.stop();
    task1 = null;
    return res.json({ message: "Task 1 stopped" });
  }
  return res.status(400).json({ message: "Task 1 is not running" });
};

export const startTask2 = (req: Request, res: Response) => {
  if (!task2) {
    task2 = cron.schedule("*/10 * * * * *", () => {
      console.log("Task 2 is running every 10 seconds");
    });
    return res.json({ message: "Task 2 started" });
  }
  return res.status(400).json({ message: "Task 2 is already running" });
};

export const stopTask2 = (req: Request, res: Response) => {
  if (task2) {
    task2.stop();
    task2 = null;
    return res.json({ message: "Task 2 stopped" });
  }
  return res.status(400).json({ message: "Task 2 is not running" });
};
