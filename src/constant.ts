import { checkRequiredFields } from "./util.js";

const DEFAULT_MODEL_NAME = "gpt-3.5-turbo";

export const CONFIG = {
  openAIApiKey: process.env.OPENAI_API_KEY as string,
  lineChannelSecret: process.env.LINE_CHANNEL_SECRET as string,
  lineChannelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN as string,
  defaultModelName: process.env.DEFAULT_MODEL_NAME as string || DEFAULT_MODEL_NAME,
  maxTokens: process.env.MAX_TOKENS ? Number(process.env.MAX_TOKENS) : 2000,
  temperature: process.env.TEMPERATURE ? Number(process.env.TEMPERATURE) : 0.5,
  supabaseUrl: process.env.SUPABASE_URL as string,
  supabasePrivateKey: process.env.SUPABASE_PRIVATE_KEY as string,
  documentsTableName: process.env.DOCUMENTS_TABLE_NAME as string ?? "documents",
  similarityQueryName: process.env.SIMILARITY_QUERY_NAME as string ?? "match_documents",
  keywordQueryName: process.env.KEYWORD_QUERY_NAME as string ?? "kw_match_documents",
  serpapiApiKey: process.env.SERPAPI_API_KEY as string,
};

checkRequiredFields(CONFIG);
