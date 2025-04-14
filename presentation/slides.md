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
layout: image-center
logoHeader: "https://www.gorhythmic.com/4.icon.png"
image: "/images/llmstxt.png"
website: "gorhythmic.com"
handle: "chris-is-agile"
imageHeight: '200'
---

It's like a sitemap for your documentation. It is a standard way of storing a site informaiton in a way you can easily find it and a format you can easily consume.