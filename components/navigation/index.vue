<template>
  <header
    class="sm:z-[10000] sm:py-mobile flex items-center sm:justify-between justify-between py-7 mx-auto top-0 w-full"
  >
    <div class="sm:flex sm:justify-between sm:w-full">
      <div class="sm:flex whitespace-nowrap items-center w-full">
        <img class="sm:w-8 sm:h-8 w-11 h-11 inline-block" :src="logo" alt="" />
        <p
          class="px-2 sm:text-[14px] text-white text-base font-medium inline-block"
        >
           {{ heap }}
        </p>
        <div class="absolute top-[42px] right-[2.25rem]">

          <button
            class="before:content-[''] before:w-7 before:h-1 before:bg-white before:absolute before:translate-y-[6px] before:rounded-2xl before:z-[99999] after:content-[''] after:w-7 after:h-1 after:bg-white after:absolute after:translate-y-[-6px] after:rounded-2xl after:z-[99999] flex justify-center items-center invisible sm:visible text-white bg-gray-100 bg-opacity-0 w-9 h-9"
            @click="showMobileMenu"
          ></button>
        </div>
      </div>
    </div>

    <ul
      class="sm:hidden flex items-center space-x-7 text-white ml-[-200px] sm:flex-col"
    >
      <li
        class="group"
        @click="activeLink = navLink"
        :class="{ ' text-white': activeLink != navLink }"
        v-for="(navLink, i) in navLinks"
        :key="`navLink${i}`"
      >
        <nuxt-link
          to="/"
          :class="{ ' text-white': activeLink == navLink }"
          class="active:text-white font-medium text-base text-gray-500 group-hover:text-white transition-all duration-300"
        >
          {{ navLink }}
        </nuxt-link>
        <div
          :class="{ ' bg-blue-700 scale-y-100': activeLink == navLink }"
          class="h-0.5 mt-0.5 group-hover:scale-y-100 group-hover:bg-blue-700 group-hover:block w-[80%] transition-all duration-300"
        ></div>
      </li>
    </ul>
    <!--  Login Button -->
    <button
      class="sm:hidden text-base border-solid text-white border border-blue-700 py-3 px-8 rounded-2xl font-medium hover:bg-blue-700"
      to="#"
    >
      Login
    </button>
    <navigation-mobile v-if="showMobileNav" />
  </header>
</template>
<script setup>
import logo from "~/assets/image/logo.svg";
const heap = ref("Heap Overflow")
const navLinks = ["Home", "Services", "Our Team", "About Us"];
const activeLink = ref('Home')
const showMobileNav = ref(false)
function showMobileMenu() {
       showMobileNav.value = !showMobileNav.value
}
</script>
