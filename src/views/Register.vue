<script>
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const fullName = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  await createUserWithEmailAndPassword(auth, {
    name: fullName.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <section class="h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-5">
      <h1 class="text-2xl font-bold">Register</h1>
      <form class="space-y-4 mt-5">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Full name</label
          >
          <input
            type="text"
            id="fullName"
            class="mt-1 px-3 py-2 border-2 shadow-none block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name"
            v-model="fullName"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 px-3 py-2 border-2 shadow-none block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 px-3 py-2 border-2 shadow-none block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <div class="mb-4">
          <button
            type="submit"
            @click="register"
            class="w-full bg-indigo-600 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
