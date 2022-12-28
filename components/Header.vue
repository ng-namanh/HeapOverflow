<template >
    <header class=" sm:py-mobile flex items-center sm:justify-between justify-between py-7  mx-auto sticky top-0">
       <div class=" sm:w-full sm:justify-between flex justify-center items-center">
        
        <div class="">
            <svg class=" sm:w-8 sm:h-8 w-11 h-11 inline-block" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M7.5 15L22.5 5.625L37.5 15V30L22.5 39.375L7.5 30V15Z" fill="#58B9FF"/>
            <path d="M22.5 11.25V5.625L7.5 15V30L22.5 39.375V33.75L13.125 27.1875V17.8125L22.5 11.25Z" fill="#94D2FF"/>
            <path d="M22.5 11.25V5.625L37.5 15V30L22.5 39.375V33.75L31.875 27.1875V17.8125L22.5 11.25Z" fill="#228AD6"/>
            </svg>
        <p class=" sm:text-[12px] 
                text-white  
                text-base 
                font-medium 
                inline-block">Heap Overflow</p>
        </div>     
            <button class=" before:content-[''] 
                            before:w-7 before:h-1 
                            before:bg-white 
                            before:absolute 
                            before:translate-y-[6px] 
                            before:rounded-2xl
                            after:content-['']
                            after:w-7 after:h-1 
                            after:bg-white 
                            after:absolute 
                            after:translate-y-[-6px] 
                            after:rounded-2xl
                            flex 
                            justify-center 
                            items-center 
                            relative 
                            invisible 
                            sm:visible
                          text-white 
                          bg-gray-100 
                            bg-opacity-0 
                            w-9 
                            h-9 " ></button>
       </div>
       <ul class="  sm:hidden 
                    flex 
                    items-center 
                    space-x-7 
                    text-white 
                    ml-[-200px]" >
            <li 
                    class="group" 
                    @click="activeLink = navLink"
                    :class="{' text-white': activeLink != navLink}"
                    v-for="(navLink, i) in navLinks" 
                    :key="`navLink${i}`">
                   
                    <nuxt-link to="/" 
                    :class="{ ' text-white': activeLink == navLink,}"
                    class=" font-medium 
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
			<button class=" sm:hidden text-base border-solid text-white border border-blue-700 py-3 px-8 rounded-2xl font-medium hover:bg-blue-700" to="#">Login</button>
    </header>
</template>
<script setup>
     const navLinks = ["Home", "Services", "Our Team", "About Us"];
     const activeLink = useState("activeLink", () =>"Home"); 
</script>
