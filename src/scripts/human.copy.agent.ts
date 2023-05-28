import { createPersonalChain } from "./utils/personal.chain.js";

// eslint-disable-next-line @typescript-eslint/require-await
const main = async (): Promise<void> => {
  const chain = createPersonalChain("HIROYUKI");

  const messages = [
    "こんにちは。田中といいます。今日は相談があってお話に来ました",
    "最近、日本という自分が暮らしている政治に関して困っているんですよね。。。色々悪い事件とかも多くて",
    "もし、あなたが今の日本の政治をよくするなら、なにから始めますか？",
  ];

  let conversations: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const message of messages) {
    // eslint-disable-next-line no-await-in-loop
    const answer = await chain.call({ input: message });
    console.log(`answer ${JSON.stringify(answer)}`);
    conversations = [...conversations, `human: ${message}`, `ai: ${answer.response as string}`];
  }
  console.log(`conversations ${JSON.stringify(conversations, null, 2)}`);
};

// eslint-disable-next-line no-console
main().catch(console.error);
