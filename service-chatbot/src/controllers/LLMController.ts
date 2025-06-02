import { inject } from "inversify";
import { controller, httpPost, request, response } from "inversify-express-utils";
import { Request, Response } from "express";
import { LLMService } from "../services/LLMService";
import { TYPES } from "../types";

@controller("/api/chat")
export class LLMController {
  constructor(@inject(TYPES.LLMService) private llmService: LLMService) {}

  @httpPost("/")
  async handleMessage(@request() req: Request, @response() res: Response) {
    const message = req.body?.message;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const reply = await this.llmService.query(message);
      return res.json({ response: reply });
    } catch (err) {
      return res.status(500).json({ error: "LLM call failed", details: err });
    }
  }
}
