<template>
  <section
    class="pt-16 flex items-center justify-evenly gap-28 sm:flex-col-reverse"
    id="Home"
  >
    <div class="mt-12 sm:mt-[18rem] sm:text-center">
      <h1
        class="text-white sm:text-[20px] heading-bold-h2 sm:leading-[28px] relative @md:text-[20px] @md:leading-7"
      >
        Take your best <br />
        Exciting Problem
      </h1>
      <p class="mt-5 paragraphy-regular-body-16px">
        Heap Overflow is the best Online Judge for Technical Student and
        <br class="sm:hidden" />
        Devloper to improve technical knowlege by solving programing
        <br class="sm:hidden" />
        problems and participanting contest
      </p>
      <div class="mt-12">
        <!--   <button
          class="text-base py-3 px-8 sm:px-16 sm:py-4 rounded-2xl font-medium bg-[#1E50FF] text-white transition-all border border-transparent hover:bg-white hover:border-black hover:text-black"
          to="#"
        >
          Get Started
        </button> -->
        <a href="http://app.heap-overflow.com/dashboard" target="_blank">
          <ButtonTemplate>
            <template #Hero> Get Started </template>
          </ButtonTemplate>
        </a>
      </div>
    </div>

    <img
      class="sm:absolute sm:top-[152px] sm:left-[72px] flex justify-center items-center w-[440px] h-[449px] mt-[-22px] h-22 w-29 sm:h-[253px] sm:w-[253px]"
      src="../Public/Image/hero.png"
      alt=""
    />
  </section>
</template>
<script>
export default {};
</script>
<style src="@/assets/css/typography.css"></style>
