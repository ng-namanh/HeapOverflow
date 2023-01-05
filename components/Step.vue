<template>
  <section class=" mt-desktop">
  <div class="flex justify-around gap-24 items-center my-36 " 
   data-aos-anchor-placement="top-bottom">
     <img data-aos="fade-up"
   data-aos-duration="1000" class=" w-[450px] h-[450px] bg-opacity-[50] " src="../Public/Image/image7.png" alt="">
     <div data-aos="fade-down"
   data-aos-easing="linear"
   data-aos-duration="1500" >
      <h1 class="heading-bold-h2 text-[#58B9FF]">Step 1</h1>
      <p class="heading-bold-h3  text-white">Pick your favorite <br> programming problem</p>
     </div>
  </div>
  
  <div class="flex justify-around gap-24 items-center my-36 "
   data-aos-anchor-placement="center-bottom"  >
     <img data-aos="fade-right" data-aos-duration="1000" class=" w-[450px] h-[450px] bg-opacity-[50] " src="../Public/Image/image8.png" alt="">
     <div data-aos="fade-left"  data-aos-duration="1500">
      <h1 class="heading-bold-h2 text-[#58B9FF]">Step 2</h1>
      <p class="heading-bold-h3 text-white">Solving your <br> programming problem</p>
     </div>
  </div>
  <div class="flex justify-around gap-24 items-center"
   data-aos-anchor-placement="bottom-bottom">
     <img data-aos="fade-up-right" data-aos-duration="1000"  class=" w-[450px] h-[450px] bg-opacity-[50] " src="../Public/Image/image9.png" alt="">
     <div data-aos="fade-up-left" data-aos-duration="1500">
      <h1 class="heading-bold-h2 text-[#58B9FF]">Step 3</h1>
      <p class="heading-bold-h3  text-white">Improve your skill <br> and get points</p>
     </div>
  </div>
</section>
</template>
<script>
  import aosMixin from '~/mixins/aos'
export default {
name: 'PageIndex',
mixins: [aosMixin]
}
</script>
