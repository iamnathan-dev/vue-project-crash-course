<template>
  <header class="bg-transparent fixed top-0 left-0 right-0 z-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <Logo />
        </RouterLink>
      </div>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop buttons -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
        <RouterLink
          to="/register"
          class="text-sm/6 font-semibold text-white bg-[#41B883] border border-gray-300 rounded-md px-4 py-2 hover:bg-[#369870]"
        >
          Get Started
        </RouterLink>
        <RouterLink
          to="/login"
          class="text-sm/6 font-semibold text-gray-900 bg-transparent border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
        >
          Log in
        </RouterLink>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-50" @click="mobileMenuOpen = false"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink
            to="/"
            class="-m-1.5 p-1.5"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Your Company</span>
            <Logo />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <RouterLink
                to="/register"
                class="-mx-3 block rounded-lg px-3 py-2.5 cursor-pointer text-base font-semibold leading-7 text-white bg-[#41B883] hover:bg-[#369870]"
                @click="mobileMenuOpen = false"
              >
                Get Started
              </RouterLink>
              <RouterLink
                to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 cursor-pointer text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                Log in
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mobileMenuOpen = ref(false);
</script>
