<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <Card class="w-full max-w-md">
      <template #title>Sign Up</template>
      <template #content>
        <Form
          v-slot="$form"
          :initialValues="initialValues"
          :resolver="resolver"
          @submit="onSubmit"
          class="flex flex-col gap-4"
        >
          <div class="flex flex-col gap-1">
            <InputText name="name" type="text" placeholder="Full Name" />
            <Message
              v-if="$form.name?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.name.error?.message }}</Message
            >
          </div>
          <div class="flex flex-col gap-1">
            <InputText name="email" type="email" placeholder="Email" />
            <Message
              v-if="$form.email?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.email.error?.message }}</Message
            >
          </div>
          <div class="flex flex-col gap-1">
            <InputText name="address" type="text" placeholder="Address" />
            <Message
              v-if="$form.address?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.address.error?.message }}</Message
            >
          </div>
          <div class="flex flex-col gap-1">
            <InputText name="phone" type="text" placeholder="Phone Number" />
            <Message
              v-if="$form.phone?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.phone.error?.message }}</Message
            >
          </div>
          <Button type="submit" label="Sign Up" class="mt-2" />
        </Form>
        <Message v-if="submitted" severity="success" class="mt-4">
          <div>
            <div><b>Name:</b> {{ submittedData.name }}</div>
            <div><b>Email:</b> {{ submittedData.email }}</div>
            <div><b>Address:</b> {{ submittedData.address }}</div>
            <div><b>Phone:</b> {{ submittedData.phone }}</div>
          </div>
        </Message>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { z } from "zod";
import { Form } from "@primevue/forms";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Message from "primevue/message";
import Card from "primevue/card";
import { zodResolver } from "@primevue/forms/resolvers/zod";

interface SignupForm {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const initialValues: SignupForm = {
  name: "",
  email: "",
  address: "",
  phone: "",
};

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  phone: z
    .string()
    .regex(
      /^(\+\d{1,3}[- ]?)?\d{10,15}$/,
      "Phone must be a valid number (10-15 digits, may start with +country code)"
    ),
});

const resolver = zodResolver(schema);

const submitted = ref(false);
const submittedData = reactive<SignupForm>({ ...initialValues });

function onSubmit(e: any) {
  submitted.value = true;
  Object.assign(submittedData, e.values);
}
</script>

<style scoped>
/* BEM naming for custom styles if needed */
</style>
