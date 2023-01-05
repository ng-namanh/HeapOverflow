<template>
  <section class="mt-[80px]">
    <div class="flex relative justify-between sm:justify-around">
      <img class="w-[100px] h-[100px] mt-[1rem] sm:w-8 sm:h-8" src="../Public/Image/image10.png" alt="" />
      <img class="w-[150px] h-[150px] sm:w-8 sm:h-8" src="../Public/Image/image15.png" alt="" />
      <img class="w-[120px] h-[120px] sm:w-8 sm:h-8 sm:mt-[0.75rem]" src="../Public/Image/image13.png" alt="" />
    </div>
    <div class="flex relative">
      <img class="absolute top-[7rem] left-[5%] sm:w-[15px] sm:h-[15px] sm:top-12" src="~~/Public/Image/image14.png" alt="">
      <img class="absolute top-[7rem] left-[85%] sm:w-[20px] sm:h-[20px] sm:top-12" src="~~/Public/Image/image17.png" alt="">
    </div>
    <div class="mt-[58px] flex flex-col items-center justify-center sm:mt-2">
      <h1 class="text-white heading-bold-h2 text-center sm:text-[16px] sm:leading-[24px]">
        Ready to use <br />
        Heap Overflow
      </h1>
      <p
        class="text-white heading-medium-h4 text-center font-medium mt-6 sm:text-[10px] sm:w-[170px] sm:leading-[12px] sm:mt-2"
      >
        Join thousand users and teams in the community
      </p>
      <div class=" mt-12 sm:mt-6">
        <!-- <button
          class="text-base py-3 px-8 rounded-xl font-medium bg-[#1E50FF] text-white transition-all border border-transparent hover:bg-white hover:border-black hover:text-black sm:w-6 sm:h-6 sm:text-xs"
        >
          Get start
        </button> -->
        <ButtonTemplate>
          <template #Ready>
              Get Started
          </template>
        </ButtonTemplate>
      </div>
    </div>
    <div class="flex justify-between sm:justify-around">
        <img class="w-[100px] h-[100px] sm:w-5 sm:h-5" src="~~/Public/Image/image11.png" alt="">
        <img class="w-[100px] h-[100px] sm:w-5 sm:h-5" src="~~/Public/Image/image16.png" alt="">
      </div>
  </section>
</template>
<script>
export default {};
</script>
