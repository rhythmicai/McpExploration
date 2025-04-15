Your goal is to generate a new Vue form component.

Ask for the form name and fields if not provided.

Requirements for the form:

- Use form design system guidelines: [design-system/Form.md](../../docs/design-system/Form.md)
- Always define TypeScript types for your form data
- Use `zod` for validation:
  - Create reusable validation schemas in separate files
  - Use TypeScript types to ensure type safety
  - Customize UX-friendly validation Rules
- Use PrimeVue components for the UI
- ALways put the form in a Card component 'primevue/card'
