import { injectable } from "inversify";
import axios from "axios";

@injectable()
export class LLMService {
  async query(prompt: string): Promise<string> {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral",
      prompt,
      stream: false,
    });
    return response.data.response;
  }
}
