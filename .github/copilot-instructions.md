# Our stack

- We use Nuxt 3, Vue,
- Tailwind for styling
- PrimeVue controls for UI
- Prisma and Zenstack for DAL


# For ANY question about LangGraph or Prisma, use #list_doc_sources and #fetch_docs to help answer.

- reflect on the urls in the llms.txt,
- reflect on the input question,
- call fetch_docs on any urls relevant to the questions

# Anytime you use a Primevue control, use #list_doc_sources and #fetch_docs to identify the best practices in using a given control.

- reflect on possible llms.txt you can use and identify the best one
- reflect on the control you want to use
- call fetch_docs on any urls relevant to the control

## Framework & Syntax

- Use Vue 3 with the Composition API.
- Prefer `<script setup>` syntax for Single File Components (SFCs).
- Utilize `ref` for primitive reactive state and `reactive` for objects.
- Employ `computed` for derived state.
- Use `watch` and `watchEffect` for side effects.
- Implement lifecycle hooks like `onMounted`, `onUpdated`, etc.

## State Management

- Use Pinia for global state management.
- Define stores in the `store/` directory.
- Access stores using the `useStore` pattern.

## Routing

- Configure routes in the `router/` directory.
- Use Vue Router's `createRouter` and `createWebHistory` functions.

## Styling

- Use scoped CSS within components.
- Use Tailwind 3 classes. Use style attributes sparingly only when needed.
- Follow BEM naming conventions for class names.

## TypeScript

- Use TypeScript for type safety.
- Define interfaces for props and state where applicable.
- Use zod fopr schema validation.

## Code Quality

- Write clean, readable, and maintainable code.
- Include comments for complex logic.
- Follow Vue's official style guide.

## Testing

- Write unit tests for components using Jest or Vitest.
- Place test files alongside the components they test.

## Additional Guidelines

- Avoid using the Options API unless necessary.
- Refrain from using mixins; prefer composables for code reuse.
- Keep components small and focused on a single responsibility.
