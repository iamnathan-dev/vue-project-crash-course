<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <Logo />
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          :to="item.href"
          class="text-sm/6 font-semibold text-gray-900"
          v-for="item in navbarItems"
          :key="item.name"
        >
          {{ item.name }}
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { navbarItems } from "@/constant/navbar.constant.js";
import { RouterLink } from "vue-router";
</script>
