---
theme: ./theme
colorSchema: "dark"
backgroundImage: "/images/background.png"
title: Using MCP & Copilot To Accelerate Development
layout: intro
introImage: "/images/chris.png"
transition: fade
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Using MCP & Copilot To Accelerate Development

.NET Meetup April 15, 2025

---
layout: cover-logos
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
logos: [
  '/images/abinbev.jpg',
  '/images/deer.jpg',
  '/images/ua.png',
  '/images/scruminc.png',
  '/images/sigao.png'
]
---

# Hi. I'm Chris.

- I like to do the startup thing
- I love teaching
- I've developed for many moons...and yes, much of that has atrophied
- I've coached with and for some big names

---
layout: image-right
image: /images/aiApp.png
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
imageWidth: '450'
imageHeight: '950'
---

<img src="https://www.gorhythmic.com/3.icon.png" alt="alt text" title="image Title" width="100" height="100"/>

# I've been building an AI Platform for Product People

*Augments* product leaders to save time

- Firmly believe that AI serves us best when it *serves us best*
- Acknowledge that AI is progressing quickly and can be difficult to keep up with
- Developers MUST learn to use the tool to accelerate

---
layout: table-contents
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# So what are we going to cover?
Tips and techniques in the rapidly changing world of AI Development tooling

- The evolution of AI Dev.
- Not Vibe-coding. AI Acceleration.
- Making AI smarter.
- Hooking AI to the world.
- Tips and techniques.

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# A Brief History of AI + Dev

## Pre-2020: AI Curiosity Phase
- Mostly autocomplete
- Not much in production
- `IntelliCode`, `Kite`

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# A Brief History of AI + Dev

## 2021: Copilot enters
- We probably all tried it, 
- most of us "real devs" hated it

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# A Brief History of AI + Dev

## 2022-2023: Ecosystem Explosion
- ` Cursor `, ` WindSurf `, ` ChatGPT `
- Some real people started using it
- Still not great, but definitely better

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# A Brief History of AI + Dev

## 2024+: Enter the Vibe Coder + Agentic Dev

- Some definite possibility
- Great for proof of concepts
- When used right can accelerate, __not replace__ developers

---
layout: image
image: /images/vc1.png
---

---
layout: image
image: /images/vc2.png
---

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# What AI CAN do.
Be a radical pragmatist

- Autocomplete boilerplate, tests, regex, data access code
- Refactor with scary confidence
- Translate old frameworks (e.g., .NET Framework ➝ Core)
- Save minutes per task, which stacks into hours

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# What AI CAN'T do.
Be a radical pragmatist

- Understand business logic deeply
- Replace architecture decisions
- Replace humans on high-context debugging or legacy migration
- Fix the spaghetti it just wrote yesterday

---
layout: image
image: /images/badrobot.png
---

---
layout: table-contents
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Let's see some real stuff
Warning: Live demos ahead!

- A plain-ole chat bot in your coder (GitHub Copilot)
- The power of prompt engineering
- Emerging standards: `llms.txt`
- Emerging standards: `Model Context Protocol`
- Adding MCP
- Customizing Copilot

---
layout: center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Let's start with out-of-the-box Github Copilot
It's gotten better and can do some impressive stuff. But, woa boy can it get it wrong.

```md
Generate a form using PrimeVue's form. The form should have name, user name, 
email, phone, and address. The form should submit to the database.
```

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
---

# Prompting can make it smarter
Prompt engineering...the "science" of arguing with a computer and forcing it to do what you want...kinda.... ever argued with a computer? __Well now you get to.__

````md magic-move
```md
Generate a form using PrimeVue's form. The form should have name, user name, 
email, phone, and address. The form should submit to the database.
```
```md
Your goal is to generate a new Vue form component.

The form should have name, user name, 
email, phone, and address. The form should submit to the database.

Ask for the form name and fields if not provided.

Requirements for the form:

- Use form design system guidelines: [design-system/Form.md](../docs/design-system/Form.md)
- Always define TypeScript types for your form data
- Use `zod` for validation:
  - Create reusable validation schemas in separate files
  - Use TypeScript types to ensure type safety
  - Customize UX-friendly validation Rules
- Use PrimeVue components for the UI

```
````

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Well that can be cumbersome (and inconsistent)
Prompt engineering is helpful, but sometimes if you get the prompt right, you really haven't saved yourself a ton of time. 

> And what about that noob down the hall? Or the ornery dev in the other room that doesn't want none of your new fangled crap???

Well that's where tools like Windsurf, Cursor, and now, VSCode CoPilot come in handy.

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Code instructions and prompt files
You know all that documentation you wrote? You can turn that into prompts with a couple of simple steps.

1. Create custom instructions for your repo. 
> [Adding repository custom instructions for GitHub Copilot - GitHub Docs](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#enabling-or-disabling-repository-custom-instructions)
  - Open your command pallet  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
  - Open `settings.json`
  - Activate `github.copilot.chat.codeGeneration.instructions
  - Add `./github/copilot-instructions.md` 



---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

## Chat Prompts
2. Now, remember code snippets? Chat Prompts are like that, but for AI.
  - Open your command pallet <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
  - Open `settings.json`
  - add `chat.promptFiles:true` to enable `.github/prompts`
  - Create some prompt files

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---    

## form.prompt.md


```json
Your goal is to generate a new Vue form component.

Ask for the form name and fields if not provided.

Requirements for the form:

- Use form design system guidelines: [design-system/Form.md](https://github.com/rhythmicai/McpExploration/blob/post/.github/docs/design-system/Form.md)
- Always define TypeScript types for your form data
- Use `zod` for validation:
    - Create reusable validation schemas in separate files
    - Use TypeScript types to ensure type safety
    - Customize UX-friendly validation Rules
- Use PrimeVue components for the UI
```

---
layout: center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---    

# Woa...cool.
🤞 Let's see if it makes it any better. 🤞


---
layout: image-center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
image: "/images/llmstxt.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
imageHeight: '200'
imageWidth: '400'
---

# Let's make it smarter with llms.txt
It's like a sitemap for your documentation. It is a standard way of storing a site informaiton in a way you can easily find it and a format you can easily consume.

---
layout: image-center
image: "/images/mcp2.png"
imageHeight: '200'
imageWidth: '400'
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---    

# Ok, but do I have to copy it everytime?
Enter __M__ odel __C__ ontext __P__ rotocol - A protocol that helps LLMS connect with APIs securely and easily.

---
layout: image-center
image: "/images/mcpdoc.png"
imageHeight: '200'
imageWidth: '400'
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---    

# Let's setup MCPDoc!
An opensource MCP Server that connects your IDE to a library of llms.txt.

---
layout: cover
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

## Setup MCP Doc

1. Install UVP
2. Create  ``./vscode/mcp.json``
3. Add your server and choose your llms

  - __PrimeVue:__ https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
  - __Prisma:__ https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
  - __LangChain:__ https://js.lang.chat/llms.txt",
  - __LangGraph:__ https://langchain-ai.lang.chat/langgraphjs/llms-full.txt",   

---
layout: full
---

# Sample mcp.json

````md magic-move
```json
{
  "servers": {

  }
}
```
```json
{
  "servers": {
    "primevue-prisma-and-langgraph-docs-mcp": {
      "command": "uvx",
      "args": [

      ]
    }
  }
}
```
```json
{
  "servers": {
    "primevue-prisma-and-langgraph-docs-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "mcpdoc",
        "mcpdoc",
        "--urls",
        "PrimeVue:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "Prisma:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "LangChain:https://js.lang.chat/llms.txt",
        "LangGraph:https://langchain-ai.lang.chat/langgraphjs/llms-full.txt",
        "--allowed-domains",
        "*",
        "--transport",
        "stdio"
      ]
    }
  }
}
```
````

---
layout: center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Don't have an LLMS.txt?
Make your own with  [LLMs.txt NPX Generator | Firecrawl](https://docs.firecrawl.dev/features/alpha/llmstxt-npx)

---
layout: full
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# Bonus Content
Keep secure stuff secure.
````md magic-move
```json
{
  "servers": {
    "primevue-prisma-and-langgraph-docs-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "mcpdoc",
        "mcpdoc",
        "--urls",
        "PrimeVue:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "Prisma:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "LangChain:https://js.lang.chat/llms.txt",
        "LangGraph:https://langchain-ai.lang.chat/langgraphjs/llms-full.txt",
        "--allowed-domains",
        "*",
        "--transport",
        "stdio"
      ]
    }
  }
}
```
```json
{
  "servers": {
    // https://github.com/ppl-ai/modelcontextprotocol/
    "Perplexity": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PERPLEXITY_API_KEY",
        "mcp/perplexity-ask"
      ],
      "env": {
        "PERPLEXITY_API_KEY": "${input:perplexity-key}"
      }
    },
    "primevue-prisma-and-langgraph-docs-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "mcpdoc",
        "mcpdoc",
        "--urls",
        "PrimeVue:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "Prisma:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "LangChain:https://js.lang.chat/llms.txt",
        "LangGraph:https://langchain-ai.lang.chat/langgraphjs/llms-full.txt",
        "--allowed-domains",
        "*",
        "--transport",
        "stdio"
      ]
    }
  }
}
```
```json
{
  // 💡 Inputs will be prompted on first server start,
  //    then stored securely by VS Code.
  "inputs": [
    {
      "type": "promptString",
      "id": "perplexity-key",
      "description": "Perplexity API Key",
      "password": true
    },
  ],
  "servers": {
        // https://github.com/ppl-ai/modelcontextprotocol/
    "Perplexity": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PERPLEXITY_API_KEY",
        "mcp/perplexity-ask"
      ],
      "env": {
        "PERPLEXITY_API_KEY": "${input:perplexity-key}"
      }
    },
    "primevue-prisma-and-langgraph-docs-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "mcpdoc",
        "mcpdoc",
        "--urls",
        "PrimeVue:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "Prisma:https://rhythmicai.github.io/llms/mudblazor/llms-full.txt",
        "LangChain:https://js.lang.chat/llms.txt",
        "LangGraph:https://langchain-ai.lang.chat/langgraphjs/llms-full.txt",
        "--allowed-domains",
        "*",
        "--transport",
        "stdio"
      ]
    }
  }
}
```
````

---
layout: center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
---

# ❓ Questions❓
I __might__ have answers