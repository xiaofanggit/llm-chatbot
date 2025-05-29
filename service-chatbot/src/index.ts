import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser from "body-parser";
import cors from "cors";
import { container } from "./inversify.config.js"; // 👈 NOTE `.js` here
import "./controllers/LLMController.js"; // 👈 NOTE `.js` here

const server = new InversifyExpressServer(container);
server.setConfig((app: express.Application) => {
  app.use(cors());
  app.use(bodyParser.json());
});

const app = server.build();
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
