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
