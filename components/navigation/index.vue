<template>
  <header
    class=" sm:py-mobile flex items-center sm:justify-between justify-between py-7 top-0 w-full"
  >
    <div class="sm:flex sm:justify-between sm:w-full">
      <div class="sm:flex whitespace-nowrap items-center w-full">
        <div class="flex justify-center items-center ">
          <img class="sm:w-8 sm:h-8 w-11 h-11 inline-block" :src="logo" alt="" />
          <p
            class="paragraphy-semibold-body-16px text-white px-2 inline-block"
          >
             {{ heap }}
          </p>
        </div>
        <div class="relative top-[2px] right-[-7.25rem]">

          <button
            class="before:content-[''] before:w-7 before:h-1 before:bg-white before:absolute before:translate-y-[6px] before:rounded-2xl before:z-[99999] after:content-[''] after:w-7 after:h-1 after:bg-white after:absolute after:translate-y-[-6px] after:rounded-2xl after:z-[99999] flex justify-center items-center invisible sm:visible text-white bg-gray-100 bg-opacity-0 w-9 h-9"
            @click="showMobileMenu"
          ></button>
        </div>
      </div>
    </div>

    <ul
      class="sm:hidden flex items-center space-x-7 text-white -ml-52 sm:flex-col"
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
          class="active:text-white paragraphy-semibold-body-16px text-gray-500 group-hover:text-white transition-all duration-300"
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
    <!-- <button
      class="sm:hidden paragraphy-semibold-body-16px border-solid text-white border border-blue-700 py-3 px-8 rounded-2xl hover:bg-blue-700"
      to="#"
    >
      Login
    </button> -->
    <ButtonTemplate class="sm:hidden paragraphy-semibold-body-16px text-white hover:text-white border border-blue-700 py-2 px-7 hover:bg-blue-700 bg-transparent">
        <template #Login>
            Login
        </template>
      </ButtonTemplate>

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
<style src="@/assets/css/typography.css">

</style>