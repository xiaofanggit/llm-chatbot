import { Container } from "inversify";
import { LLMService } from "./services/LLMService";
import { TYPES } from "./types";

const container = new Container();
container.bind(TYPES.LLMService).to(LLMService);

export { container };
