<template>
    <h1 class="text-center
                    text-white
                    font-semibold
                    text-[32px] sm:text-[20px]">Meet Our Product Team</h1>
    <swiper 
      :slidesPerView="2"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper h-[55vh] w-[50%] flex items-center justify-center my-12"
    >
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center">
        <img class=" max-w-[80%] border-solid border-2 border-blue-500 rounded-full" src="./slideImg/image19.png" alt="">
        <div class="text-center">
        <h1 class=" text-white text-[16px] font-semibold p-2"> Vũ Đặng Anh Quân</h1>
        <p class="text-white text-base">Product Owner</p>
        </div>
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center">
        <img class=" max-w-[80%] border-solid border-2 border-blue-500 rounded-full" src="./slideImg/image20.png" alt="">
        <div class="text-center">
        <h1 class=" text-white text-[16px] font-semibold p-2"> Phạm Tiến Việt </h1>
        <p class="text-white text-base">Product Manager</p>
        </div>
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center">
        <img class=" max-w-[80%] border-solid border-2 border-blue-500 rounded-full" src="./slideImg/image19.png" alt="">
        <div class="text-center">
        <h1 class=" text-white text-[16px] font-semibold p-2"> Vũ Đặng Anh Quân</h1>
        <p class="text-white text-base">Product Owner</p>
        </div>
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center">
        <img class=" max-w-[80%] border-solid border-2 border-blue-500 rounded-full" src="./slideImg/image20.png" alt="">
        <div class="text-center">
        <h1 class=" text-white text-[16px] font-semibold p-2"> Phạm Tiến Việt </h1>
        <p class="text-white text-base">Product Manager</p>
        </div>
      </swiper-slide>
      <swiper-slide class=" w-48 flex flex-col gap-6 items-center justify-center">
        <img class=" max-w-[80%] border-solid border-2 border-blue-500 rounded-full" src="./slideImg/image19.png" alt="">
        <div class="text-center">
        <h1 class=" text-white text-[16px] font-semibold p-2"> Vũ Đặng Anh Quân</h1>
        <p class="text-white text-base">Product Owner</p>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
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
  