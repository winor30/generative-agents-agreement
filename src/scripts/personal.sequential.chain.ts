/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-underscore-dangle */
import { CallbackManagerForChainRun } from "langchain/callbacks";
import { LLMChain, SequentialChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { ChainValues } from "langchain/schema";
import { CONFIG } from "../constant.js";
import { createPersonalChain } from "./utils/personal.chain.js";

class CustomSequentialChain extends SequentialChain {
  /** @ignore */
  async _call(
    values: ChainValues,
    runManager?: CallbackManagerForChainRun,
  ): Promise<ChainValues> {
    const input: ChainValues = values;
    const allChainValues: ChainValues = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const chain of this.chains) {
      const chainInput = chain.inputKeys.reduce((acc, key) => {
        const value = input[key];
        if (value == null) {
          return acc;
        }
        acc[key] = value;
        return acc;
      }, {} as ChainValues);
      console.log(chain, input, chainInput);
      // eslint-disable-next-line no-await-in-loop
      const resOutput = await chain.call(chainInput, runManager?.getChild());
      // eslint-disable-next-line no-restricted-syntax
      for (const key of Object.keys(resOutput)) {
        allChainValues[key] = resOutput[key];
        input[key] = resOutput[key];
      }
      // input = { ...input, resOutput };
    }
    const output: ChainValues = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.outputVariables) {
      output[key] = allChainValues[key];
    }

    return output;
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
const main = async (): Promise<void> => {
  const outputKeys = ["hiroyukiRes", "mishimaRes"];
  const hiroyukiChain = createPersonalChain("HIROYUKI", outputKeys[0]);
  const mishimaChain = createPersonalChain("MISHIMA", outputKeys[1]);

  const agreementLLM = new OpenAI({
    openAIApiKey: CONFIG.openAIApiKey,
    modelName: CONFIG.defaultModelName,
    maxTokens: CONFIG.maxTokens,
    verbose: true,
    temperature: 0,
  });
  const agreementTemplate = `あなたは最終意思決定者です。
参加者の結果から、公正に判断し正しい意思決定を考えてください。


# 質問文
{input}


${outputKeys.map((key, i) => `# 参加者${i}の意見:\n{${key}}`).join("\n\n")}

最終意思決定の意見:`;
  const agreementPromptTemplate = new PromptTemplate({
    template: agreementTemplate,
    inputVariables: [...outputKeys, "input"],
  });
  const agreementChain = new LLMChain({
    llm: agreementLLM,
    prompt: agreementPromptTemplate,
    outputKey: "agreement",
  });

  const overallChain = new CustomSequentialChain({
    chains: [hiroyukiChain, mishimaChain, agreementChain],
    inputVariables: ["input", "history"],
    outputVariables: [...outputKeys, "agreement"],
    verbose: true,
  });

  const message = "もし、あなたが今の日本の政治をよくするなら、なにを優先的に解決すべきですか？そして、なには優先度を下げますか？よく分からなくても絶対にあなたの思っている考えを聞かせてください。";

  const answer = await overallChain.call({ input: message });

  console.log(`answer ${JSON.stringify(answer, null, 2)}`);
};

// eslint-disable-next-line no-console
main().catch(console.error);
