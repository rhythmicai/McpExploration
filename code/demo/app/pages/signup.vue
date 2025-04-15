<template>
  <div class="signup-form">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label for="address" class="block text-sm font-medium text-gray-700"
          >Address</label
        >
        <input
          v-model="form.address"
          type="text"
          id="address"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone Number</label
        >
        <input
          v-model="form.phone"
          type="tel"
          id="phone"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          pattern="\\d{10}"
          required
        />
        <p class="text-sm text-gray-500">Format: 10 digits</p>
      </div>

      <button
        type="submit"
        class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>

    <Message v-if="submitted" :info="form" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Message from "@/components/Message.vue";

const form = ref({
  name: "",
  email: "",
  address: "",
  phone: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
.signup-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
