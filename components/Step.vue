    <template>
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
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

