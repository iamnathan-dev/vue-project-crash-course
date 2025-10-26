<template>
  <section
    class="h-screen overflow-hidden flex items-center justify-center relative"
  >
    <div
      class="absolute -top-[20%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[#41B883]/30 -z-10 blur-3xl"
    />
    <div
      class="absolute -bottom-[20%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[#41B883]/30 -z-10 blur-3xl"
    />
    <div class="container mx-auto w-fit text-center">
      <h1 class="text-8xl font-bold">Your Personal Task Tracker</h1>
      <p class="text-2xl font-light text-gray-500 mt-3">
        Stay organized and boost your productivity with our simple task tracker.
      </p>
      <div class="flex items-center justify-center mt-10">
        <RouterLink
          to="/register"
          class="bg-[#41B883] text-white px-7 cursor-pointer py-3.5 rounded-md"
        >
          Get Started
        </RouterLink>
      </div>
    </div>
  </section>
</template>
