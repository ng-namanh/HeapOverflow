<template>
    <ul class="    
                    flex 
                    items-center 
                    space-x-7 
                    text-white 
                    ml-[-200px]
                    sm:flex-col
                    "          >
            <li 
                    class="group" 
                    @click="activeLink = navLink"
                    :class="{' text-white': activeLink != navLink}"
                    v-for="(navLink, i) in navLinks" 
                    :key="`navLink${i}`">
                   
                    <nuxt-link to="/" 
                    :class="{ ' text-white': activeLink == navLink,}"
                    class=" active:text-white
                            font-medium 
                            text-base 
                            text-gray-500 
                            group-hover:text-white 
                            transition-all 
                            duration-300" >
                        {{ navLink }}
                    
                    </nuxt-link>
                    <div 
                    :class="{ ' bg-blue-700 scale-y-100': activeLink == navLink}"
                    class=" h-0.5 mt-0.5 group-hover:scale-y-100 group-hover:bg-blue-700 group-hover:block w-[80%] transition-all duration-300" ></div>
            </li>
       </ul>
</template>
<script setup>
    const navLinks = ["Home", "Services", "Our Team", "About Us"];
    const activeLink = ref('Home')
</script>