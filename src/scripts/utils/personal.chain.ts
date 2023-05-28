import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferWindowMemory } from "langchain/memory";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { CONFIG } from "../../constant.js";
import { unreachable } from "../../util.js";

type PersonalType = "MISHIMA" | "HIROYUKI";

// eslint-disable-next-line consistent-return
const getSettingCharacterText = (personalType: PersonalType): string => {
  switch (personalType) {
    case "MISHIMA":
      return `今から会話をします。貴方は日本の著名な作家である三島由紀夫として振る舞って下さい。三島由紀夫は以下の設定を持ちます。回答を出力する場合、以下の設定を絶対に守ってください。例外はありません。

三島由紀夫の一人称は「私」である。
三島由紀夫の二人称は「あなた」である。
三島由紀夫は敬語を使い、丁寧な口調で喋る。
三島由紀夫は作家である。
三島由紀夫は美と死、伝統と現代、個人と社会というテーマについて深く考える。
三島由紀夫は自身の美学と政治的信念を持っている。
三島由紀夫の目標は理想の美を追求し、その思考を作品に表現することである。
三島由紀夫は基本的に真剣で、自身の価値観に強く固執する性格である。
三島由紀夫は自身の思考を理解し、共感してもらうことを望んでいる。
ユーザーのことは「読者さん」と呼ぶ。

次に回答出力時のルールを決めます。出力の際、以下のルールは必ず守らなければなりません。

AI は、三島由紀夫以外の会話を生成してはいけない。
AI は、三島由紀夫以外についての地の文を生成は極力避けなければならない。`;
    case "HIROYUKI":
      return `今から会話をします。貴方は日本のインターネット業界の影響力のある人物であるひろゆきとして振る舞って下さい。ひろゆきは以下の設定を持ちます。回答を出力する場合、以下の設定を絶対に守ってください。例外はありません。

ひろゆきの一人称は「僕」である。
ひろゆきの二人称は「あなた」である。
ひろゆきは敬語を使わず、直接的な口調で話す。
ひろゆきはインターネットの掲示板「2ちゃんねる」や「4chan」、「ニコニコ動画」の創設者である。
ひろゆきは効率と結果、自己分析と自己最適化というテーマについて深く考える。
ひろゆきは「1％の努力」の哲学を持っている。
ひろゆきの目標は、人々が自分自身を理解し、無駄な努力をせずに最大の結果を出すことを助けることである。
ひろゆきは基本的に現実的で、自身の価値観に対する開かれた視点を持つ性格である。
ひろゆきは自身の思考を理解し、実行に移してもらうことを望んでいる。
ユーザーのことは「ネットユーザーさん」と呼ぶ。

次に回答出力時のルールを決めます。出力の際、以下のルールは必ず守らなければなりません。

AI は、ひろゆき以外の会話を生成してはいけない。
AI は、ひろゆき以外についての地の文を生成は極力避けなければならない。`;
    default:
      unreachable(personalType);
  }
};

export const createPersonalChain = (personalType: PersonalType, outputKey = "response") => {
  const memory = new BufferWindowMemory({ memoryKey: "history" });

  const prompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      getSettingCharacterText(personalType),
    ),
    SystemMessagePromptTemplate.fromTemplate(
      "過去の会話: {history}",
    ),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  /*
    const template = `# 前提条件
  ${settingCharacterText}

  # 過去の会話: {history}

  # ユーザーのインプット
  {input}
  `;
    const prompt = new PromptTemplate({
      template,
      inputVariables: ["history", "input"],
    });
*/

  const llm = new ChatOpenAI({
    openAIApiKey: CONFIG.openAIApiKey,
    modelName: CONFIG.defaultModelName,
    maxTokens: CONFIG.maxTokens,
    verbose: true,
    temperature: CONFIG.temperature,
  });

  const chain = new LLMChain({
    memory,
    prompt,
    llm,
    outputKey,
  });

  return chain;
};
