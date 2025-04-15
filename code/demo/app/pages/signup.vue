<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <Form
        v-slot="$form"
        :initialValues="{ name: '', email: '', address: '', phone: '' }"
        :resolver="resolver"
        @submit="onFormSubmit"
        class="flex flex-col gap-4 w-full sm:w-96"
      >
        <!-- Name Field -->
        <div class="flex flex-col gap-1">
          <InputText name="name" type="text" placeholder="Name" fluid />
          <Message
            v-if="$form.name?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.name.error?.message }}
          </Message>
        </div>

        <!-- Email Field -->
        <div class="flex flex-col gap-1">
          <InputText name="email" type="email" placeholder="Email" fluid />
          <Message
            v-if="$form.email?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.email.error?.message }}
          </Message>
        </div>

        <!-- Address Field -->
        <div class="flex flex-col gap-1">
          <InputText name="address" type="text" placeholder="Address" fluid />
          <Message
            v-if="$form.address?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.address.error?.message }}
          </Message>
        </div>

        <!-- Phone Number Field -->
        <div class="flex flex-col gap-1">
          <InputText
            name="phone"
            type="text"
            placeholder="Phone Number"
            fluid
          />
          <Message
            v-if="$form.phone?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.phone.error?.message }}
          </Message>
        </div>

        <!-- Submit Button -->
        <Button type="submit" severity="secondary" label="Submit" />
      </Form>

      <!-- Display Submitted Data -->
      <Message
        v-if="submittedData"
        severity="info"
        size="small"
        variant="simple"
      >
        {{ submittedData }}
      </Message>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";

const submittedData = ref<string | null>(null);

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

function resolver(values: any) {
  try {
    formSchema.parse(values);
    return {};
  } catch (error: any) {
    const errors: Record<string, string> = {};
    error.errors.forEach((err: any) => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
}

function onFormSubmit(values: any) {
  submittedData.value = JSON.stringify(values, null, 2);
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
