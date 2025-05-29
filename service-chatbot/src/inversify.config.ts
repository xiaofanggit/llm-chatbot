import { Container } from "inversify";
import { LLMService } from "./services/LLMService";
import { LLMController } from "./controllers/LLMController";

const container = new Container();

container.bind(LLMService).toSelf();
container.bind(LLMController).toSelf();
export default container;