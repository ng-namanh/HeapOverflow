<!--     <template>
      <div class=" flex flex-col items-center justify-center" ref="main">
        <div class="box text-white">box 1</div>
        <div class="box text-white">box 2</div>
        <div class="box text-white">box 3</div>
      </div>
    </template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const boxes = self.selector('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
    });
  }, main.value); 
});

onUnmounted(() => {
  ctx.value.revert();
});
</script>

 -->

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