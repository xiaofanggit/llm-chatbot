import { LLMService } from "../services/LLMService";
import { injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export class LLMController {
    constructor(private llmService: LLMService) {}
    
    async handleMessage(req: Request, res: Response) {
        const message = req.body.message;
        if (!message) {
            return res.status(400).json({error: "Message is missed"});
        }
        try {
            const response = await this.llmService.query(message);
            res.json({ response });
        } catch (error){
            res.status(500).json({error: `LLM call failed ${JSON.stringify(error)}`});
        }
    }
}