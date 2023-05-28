import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { CONFIG } from "../../constant.js";

export const embeddings = new OpenAIEmbeddings({ openAIApiKey: CONFIG.openAIApiKey });
