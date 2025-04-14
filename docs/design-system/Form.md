# CAVU Usable Forms Guidelines

Our goal is to deliver forms that are not only consistent but also highly usable and accessible. Using Vue’s Composition API in combination with PrimeVue Forms, these guidelines outline best practices for structuring, validating, and styling our forms. Every form must integrate a Zod schema for validation to ensure a reliable and uniform user experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Form Structure](#basic-form-structure)
4. [Form State Management](#form-state-management)
5. [Mandatory Zod Validation](#mandatory-zod-validation)
6. [Usability & Accessibility Guidelines](#usability--accessibility-guidelines)
7. [Dynamic Forms (Advanced)](#dynamic-forms-advanced)
8. [Conclusion](#conclusion)

---

## Overview

We use Vue with the Composition API and the PrimeVue Forms library to streamline state management and validation across our application. Every form follows a consistent structure and validation process, reducing bugs and ensuring a seamless user experience. These guidelines emphasize:

- **Inline Logic:** Declare validation schemas (using Zod) directly within the component unless shared across multiple forms.
- **Accessibility:** Build forms with clear labels, error messages, and keyboard navigation support.
- **Consistency:** Follow the styling and layout conventions to ensure forms look and behave uniformly.

---

## Installation

Install the PrimeVue Forms add-on via your preferred package manager:

```bash
# Using npm
npm install @primevue/forms

# Using yarn
yarn add @primevue/forms

# Using pnpm
pnpm add @primevue/forms

## Basic Form Structure
When creating a form, use the `<Form>` component to encapsulate state management and validation. The key guidelines are:

- **Use the v-slot Pattern:** Pass the form state via a scoped slot (`$form` or `$field`).

- **Name Binding:** Use the `name` property on form fields to link them to the corresponding state.

- **Layout Consistency:** Utilize our preferred CSS classes (e.g., flex, grid) for spacing and responsive design.


**Example:**
`<template>   <Form     v-slot="$form"     :initialValues="{ username: '', password: '' }"     :resolver="resolver"     @submit="onFormSubmit"     class="flex flex-col gap-4 w-full sm:w-56"   >     <!-- Username Field -->     <div class="flex flex-col gap-1">       <InputText name="username" type="text" placeholder="Username" fluid />       <Message         v-if="$form.username?.invalid"         severity="error"         size="small"         variant="simple"       >         {{ $form.username.error?.message }}       </Message>     </div>     <!-- Password Field -->     <div class="flex flex-col gap-1">       <InputText name="password" type="password" placeholder="Password" fluid />       <Message         v-if="$form.password?.invalid"         severity="error"         size="small"         variant="simple"       >         {{ $form.password.error?.message }}       </Message>     </div>     <!-- Submit Button -->     <Button type="submit" severity="secondary" label="Submit" />   </Form> </template>`

---

## Form State Management
- **Centralized Tracking:**
    The `$form` object maintains the state of each field (value, touched, dirty, pristine, valid, invalid, errors). Use this object for both validation feedback and debugging.

- **Display and Debug:**
    It’s often useful to render the state object (in a read-only format) during development to better understand user interactions.


---

## Mandatory Zod Validation

Every form **must** include a Zod schema for validation. Our policy is as follows:

1. **Inline Declaration:**
    Unless the schema will be reused, define it directly within the component. This keeps validation logic close to where it’s applied.

2. **Shared Schemas:**
    If a schema is used by multiple forms, declare it in the `@rhythm/types` package. This approach ensures a single source of truth and reduces redundancy.

3. **Resolver Implementation:**
    The resolver function should parse the values using the Zod schema. On validation failure, it must return an errors object with field-specific error messages.


**Inline Zod Schema Example:**
`<script setup> import { z } from 'zod';  // Inline schema for this form const formSchema = z.object({   username: z.string().min(1, 'Username is required'),   password: z.string().min(6, 'Password must be at least 6 characters'), });  function resolver(values) {   try {     formSchema.parse(values);     return {};   } catch (error) {     const errors = {};     error.errors.forEach((err) => {       errors[err.path[0]] = err.message;     });     return errors;   } }  function onFormSubmit(event) {   console.log('Form submitted:', event); } </script>`

**Shared Schema Example:**

1. In `@rhythm/types/formSchemas.ts`:
    `import { z } from 'zod';  export const userFormSchema = z.object({   username: z.string().min(1, 'Username is required'),   password: z.string().min(6, 'Password must be at least 6 characters'), });`

2. In the component:
    `<script setup> import { userFormSchema } from '@rhythm/types/formSchemas';  function resolver(values) {   try {     userFormSchema.parse(values);     return {};   } catch (error) {     const errors = {};     error.errors.forEach((err) => {       errors[err.path[0]] = err.message;     });     return errors;   } }  function onFormSubmit(event) {   console.log('Form submitted:', event); } </script>`


---

## Usability & Accessibility Guidelines

To create forms that are not only functional but also usable and accessible, adhere to the following best practices:

- **Clear Labeling:**
    Always provide clear, descriptive placeholders or labels for input fields. This supports screen readers and improves clarity.

- **Immediate Feedback:**
    Display validation error messages immediately after an input loses focus or on form submission. This helps users understand and correct mistakes promptly.

- **Consistent Styling:**
    Use our established component classes (e.g., flex, grid, gap utilities) to ensure a uniform look and feel across all forms.

- **Keyboard Navigation:**
    Ensure that all form fields and buttons are accessible via keyboard. Verify focus order, and use semantic HTML elements where possible.

- **Responsive Design:**
    Use responsive utility classes to adjust form layouts on different devices, ensuring a seamless experience on mobile and desktop.

- **Error Messaging:**
    Error messages must be concise and actionable. Use our `<Message>` component with appropriate severity levels to indicate errors.

- **Accessible Roles and Attributes:**
    While the PrimeVue Forms library manages many accessibility features automatically, always double-check that any custom components maintain proper ARIA roles, states, and properties.

- **Testing:**
    Regularly test forms with automated accessibility tools and user testing to ensure the highest level of usability.


---

## Dynamic Forms (Advanced)

For more complex scenarios, our dynamic forms solution allows fields to be generated programmatically from a configuration object. The dynamic form components (e.g., `DynamicForm`, `DynamicFormField`) are provided for demonstration purposes and should be used as a guideline for building flexible form infrastructures.

**Example:**

`<Fieldset legend="Dynamic Form Example" class="flex justify-center">   <DynamicForm @submit="onDynamicFormSubmit">     <DynamicFormField groupId="userId_1" name="username">       <DynamicFormLabel>Username</DynamicFormLabel>       <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />       <DynamicFormMessage />     </DynamicFormField>     <DynamicFormField groupId="passId_1" name="password">       <DynamicFormLabel>Password</DynamicFormLabel>       <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />       <DynamicFormMessage errorType="minimum" />     </DynamicFormField>     <DynamicFormSubmit />   </DynamicForm> </Fieldset>`
```
