<template>
  <h1 class="text-center text-white font-semibold text-[32px] sm:text-[20px] sm:heading-bold-h6">
    Meet Our Product Team
  </h1>
  <swiper
    :slidesPerView="2"
    :spaceBetween="0"
    :slidesPerGroup="2"
    :navigation="true"
    :breakpoints="swiperOptions.breakpoints"
    :speed="1000"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :autoplay="{
        delay: 1800,
        disableOnInteraction: false,
      }"
    class="mySwiper h-[62vh] sm:h-[54vh] w-[70%] sm:w-full flex flex-col items-center justify-center my-16 z-10"
  >
    <!--  Group 1 -->
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image19.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px">
            Vũ Đặng Anh Quân1
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Owner</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image20.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Phạm Tiến Việt 1
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Manager</p>
        </div>
      </div>
    </swiper-slide>

  
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image19.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Vũ Đặng Anh Quân2
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Owner</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image20.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Phạm Tiến Việt2
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Manager</p>
        </div>
      </div>
    </swiper-slide>

   
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image19.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Vũ Đặng Anh Quân3
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Owner</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image20.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Phạm Tiến Việt3
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Manager</p>
        </div>
      </div>
    </swiper-slide>

  
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image19.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Vũ Đặng Anh Quân4
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Owner</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-48 flex flex-col gap-6 items-center justify-center z-10"
    >
      <div
        class="w-4/5 flex flex-col gap-6 items-center justify-center text-center"
      >
        <img
          class="max-w-[80%] border-solid border-4 border-blue-500 rounded-full z-10"
          src="./slideImg/image20.png"
          alt=""
        />
        <div
          class="flex flex-col justify-center items-center text-center w-1/2"
        >
          <h1 class="text-white paragraphy-semibold-body-16px sm:semibold-label-12px p-2">
            Phạm Tiến Việt4
          </h1>
          <p class="text-white paragraphy-regular-caption-14px sm:mobile-JobTitle">Product Manager</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup:1,
          },
          770: {
            slidesPerView: 2,
            spaceBetween:0,
            slidesPerGroup: 2,
          },

/*           1023: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2,
          }, */
        },
      },
    };
  },
};
</script>
<style src="@/assets/css/sliderButton.css">
@import "/assets/css/typography.css"
</style>
