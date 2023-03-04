<template>
  <button class="btn">
    <slot name="Hero"></slot>
    <slot name="Login"></slot>
    <slot name="Providing"></slot>
    <slot name="Ready"></slot>
  </button>
</template>
<script></script>
<style>
.btn {
  @apply text-base        
            py-3 
            px-8 
            sm:px-16 
            sm:py-4 
            rounded-2xl 
            font-medium bg-[#1E50FF] 
            text-white 
            transition-all
            duration-700 
            border 
            border-transparent 
            hover:bg-white 
            hover:border-black 
            hover:text-black;
}
</style>
