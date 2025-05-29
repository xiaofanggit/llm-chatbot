export interface ILLMService {
    query(prompt: string): Promise<string>;
}