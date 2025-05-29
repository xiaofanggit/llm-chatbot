import { Container } from "inversify";
import { LLMService } from "./services/LLMService.js";
import { TYPES } from "./types.js";

const container = new Container();
container.bind(TYPES.LLMService).to(LLMService);

export { container };
