// Entry point for the backend
import express from "express";
import cors from "cors";
import bodyParser = require("body-parser");
import { LLMController } from "./controllers/LLMController";
import container from "./inversify.config";
import { Request, Response } from "express";
const app = express();
app.use(cors());
app.use(bodyParser.json());

const llmController = container.get(LLMController);

app.post("/api/chat", async (req: Request, res: Response) => {
    llmController.handleMessage(req, res).catch((err) => {
    console.error("Unhandled error in controller:", err);
    res.status(500).json({ error: "Unexpected server error" });
  });
});

app.listen(3001, () => console.log("API server on http://localhost:3001"));