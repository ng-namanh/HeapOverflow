<template>
    <div class="flex items-center justify-center flex-col gap-4">
        <h1 class="text-center
                    text-white
                    font-semibold
                    text-[32px] sm:text-[20px]">Sponsor</h1>
        <p class="text-white text-xs">Diamond Sponsors</p>
    </div>

    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper mySwiper h-[40vh] w-[50%] flex items-center justify-center"
    >
    <swiper-slide class=" w-48 flex flex-col items-center justify-center mt-[-30px]">
        <img class=" w-[250px] " src="./slideImg/image21.png" alt="">
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col items-center justify-center mt-[-30px]">
        <img class=" w-[250px] " src="./slideImg/image21.png" alt="">
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col  items-center justify-center mt-[-30px]">
        <img class=" w-[250px]  " src="./slideImg/image21.png" alt="">
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center mt-[-30px]">
        <img class=" w-[250px]  " src="./slideImg/image21.png" alt="">
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  
  // import required modules
  import { Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
  </script>
  