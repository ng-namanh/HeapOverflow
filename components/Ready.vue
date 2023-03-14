<template>
  <section class="mt-[80px]">
    <div class="flex relative justify-between sm:justify-around">
      <img class="w-[100px] h-[100px] mt-[1rem] sm:w-14 sm:h-14" src="../Public/Image/image10.png" alt="" />
      <img class="w-[150px] h-[150px] sm:w-14 sm:h-14" src="../Public/Image/image15.png" alt="" />
      <img class="w-[120px] h-[120px] sm:w-14 sm:h-14 sm:mt-[0.75rem]" src="../Public/Image/image13.png" alt="" />
    </div>
    <div class="flex relative">
      <img class="absolute top-[7rem] sm:left-[-2%] right-[90%] sm:w-8 sm:h-8 sm:top-12" src="~~/Public/Image/image14.png" alt="">
      <img class="absolute top-[7rem] sm:left-[92%] left-[85%] sm:w-8 sm:h-8 sm:top-12" src="~~/Public/Image/image17.png" alt="">
    </div>
    <div class="mt-[58px] flex flex-col items-center justify-center sm:mt-2">
      <h1 class="text-white text-center heading-bold-h2 sm:heading-bold-h6 sm:leading-9 sm:text-[24px]">
        Ready to use <br />
        Heap Overflow
      </h1>
      <p
        class="text-white text-center heading-medium-h4 font-normal mt-6 sm:text-[14px] sm:leading-6"
      >
        Join thousand users and teams <br class=" hidden sm:block "> 
        in the community
      </p>
      <div class=" mt-12 sm:mt-6">
        <!-- <button
          class="text-base py-3 px-8 rounded-xl font-medium bg-[#1E50FF] text-white transition-all border border-transparent hover:bg-white hover:border-black hover:text-black sm:w-6 sm:h-6 sm:text-xs"
        >
          Get start
        </button> -->
        <a href="http://app.heap-overflow.com/dashboard" target="_blank">
          <ButtonTemplate class=" sm:rounded-[16px] sm:p-3">
            <template #Ready>
                Get Started
            </template>
          </ButtonTemplate>
        </a>
      </div>
    </div>
    <div class="flex justify-between sm:justify-around sm:relative">
        <img class="sm:absolute sm:top-[-6.25rem] sm:left-[0.5rem] w-[100px] h-[100px] sm:w-10 sm:h-10" src="~~/Public/Image/image11.png" alt="">
        <img class="sm:absolute sm:top-[-6.25rem] sm:right-[0.5rem] w-[100px] h-[100px] sm:w-10 sm:h-10" src="~~/Public/Image/image16.png" alt="">
      </div>
  </section>
</template>
<script>
export default {};
</script>
