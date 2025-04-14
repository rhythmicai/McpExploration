<template>
  <Form @submit="onSubmit" class="p-fluid">
    <FormField label="Name" :error="errors.name?.message">
      <InputText v-model="formData.name" placeholder="Enter your name" />
    </FormField>

    <FormField label="Username" :error="errors.username?.message">
      <InputText
        v-model="formData.username"
        placeholder="Enter your username"
      />
    </FormField>

    <FormField label="Email" :error="errors.email?.message">
      <InputText v-model="formData.email" placeholder="Enter your email" />
    </FormField>

    <FormField label="Phone" :error="errors.phone?.message">
      <InputText
        v-model="formData.phone"
        placeholder="Enter your phone number"
      />
    </FormField>

    <FormField label="Address" :error="errors.address?.message">
      <InputTextarea
        v-model="formData.address"
        placeholder="Enter your address"
      />
    </FormField>

    <Button label="Submit" type="submit" class="p-mt-2" />
  </Form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { z } from "zod";
import { useForm } from "vee-validate";
import { InputText, Textarea, Button } from "primevue";
import { Form, FormField } from "@primevue/forms";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default defineComponent({
  name: "SignupForm",
  setup() {
    const formData = reactive<SignupFormData>({
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
    });

    const { errors, handleSubmit } = useForm({
      validationSchema: signupSchema,
      initialValues: formData,
    });

    const onSubmit = handleSubmit((values) => {
      console.log("Form submitted:", values);
    });

    return {
      formData,
      errors,
      onSubmit,
    };
  },
});
</script>

<style scoped>
.p-fluid {
  max-width: 400px;
  margin: auto;
}
</style>
