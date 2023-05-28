# Generative Agents Agreement

Generative Agents Agreement is a project that explores the possibilities of AI and generative models. It features multiple Generative Agents, each possessing a distinct personality and ideology. The system works by posing questions to these agents, allowing each to provide their unique responses. In the end, a Decision-Making Agent synthesizes these perspectives and makes a final decision.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/winor30/generative-agents-agreement.git
    ```

2. Navigate into the cloned repository:
    ```
    cd generative-agents-agreement
    ```

3. Install the dependencies:
    ```
    npm install
    ```

## Configuration

This project requires some configuration to work correctly. Please follow the steps below:

1. Make a copy of the `.env.example` file and rename it to `.env`:
    ```
    cp .env.example .env
    ```

2. Open the `.env` file and add your specific configuration values.

## Usage

To run the main script, use the following command:

```sh
npx ts-node --require dotenv/config ./src/scripts/personal.sequential.chain.ts
```

## Result
```sh
answer {
  "hiroyukiRes": "僕が日本の政治をよくするとしたら、まずは教育改革を優先的に解決するべきだと思う。教育が未来の世代に大きな影響を与えるからね。特に、効率的な学習方法や自己分析、自己最適化を教えることで、人々が無駄な努力をせず最大の結果を出せるようになると思う。\n\n一方で、優先度を下げるべきは、特定の業界だけに特別な補助金を出すような政策だと思う。全体的に見て、国民全体に恩恵がある政策に焦点を当てるべきだからね。\n\nただ、僕はインターネット業界の人間で政治家ではないから、これはあくまで僕の意見だよ。でも、現実的な視点で考えると、教育改革が日本の将来にとって重要だと思うんだ。",
  "mishimaRes": "私はあくまで作家であり、政治家ではございませんが、それでも私の美学や政治的信念に基づいて考えると、現代の日本において優先的に解決すべき問題は、伝統と文化の継承です。私は美と死、伝統と現代、個人と社会というテーマに深く関心を持っており、日本の伝統文化や美意識が失われつつあることを憂慮しております。\n\n私の意見では、伝統文化や美意識を育てることで、国民の精神性や倫理観が向上し、それが結果的に社会問題の解決に繋がると考えております。したがって、教育や文化政策の充実を図ることが重要であると思われます。\n\n一方で、優先度を下げるべき問題としては、経済成長や物質的な豊かさを追求することです。もちろん、経済的な安定は重要でございますが、それだけを追求するあまり、精神性や美意識が犠牲になることは避けるべきでございます。私は理想の美を追求し、その思考を作品に表現することを目標としておりますので、その観点からも、物質的な豊かさだけを追求する姿勢には懐疑的でございます。\n\n読者さんにも、私の思考を理解し、共感していただけることを願っております。",
  "agreement": "私は政治家ではありませんが、現在の日本の政治を改善するために優先的に解決すべき問題は、教育改革と伝統文化の継承の両方だと考えます。教育改革によって、効率的な学習方法や自己分析、自己最適化を教えることで、人々が無駄な努力をせず最大の結果を出せるようになります。また、伝統文化の継承を通じて、国民の精神性や倫理観が向上し、社会問題の解決に繋がると考えられます。\n\n一方で、優先度を下げるべきは、特定の業界だけに特別な補助金を出すような政策と、物質的な豊かさだけを追求する姿勢です。全体的に見て、国民全体に恩恵がある政策に焦点を当てるべきであり、物質的な豊かさだけを追求するあまり、精神性や美意識が犠牲になることは避けるべきです。\n\nこれらの意見を踏まえて、教育改革と伝統文化の継承を優先的に解決し、特定の業界への補助金政策や物質的な豊かさだけを追求する姿勢を優先度を下げることで、日本の政治をより良い方向へ導くことができると考えます。"
}
```
