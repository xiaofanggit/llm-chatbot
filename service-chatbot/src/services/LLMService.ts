import axios from "axios";
import { injectable } from "inversify";
import { ILLMService } from "../interfaces/ILLMService";

@injectable()
export class LLMService implements ILLMService {
    async query(prompt: string): Promise<string> {
        const url: string = "http://localhost:11434/api/generate";
        const response = await axios.post(url, {
            model: "mistral",
            prompt,
            stream: false,
        });
        return response.data.response;
    }
}