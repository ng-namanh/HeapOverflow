<te<div class="hidden sm:absolute sm:top-0 sm:-right-full sm:h-screen sm:w-screen sm:bg-[#0F0B33]  overflow-hidden">            
                    <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                <li class=" active:text-white hover:text-white py-10 px-8 w-full text-[20px] text-gray-500"
                            v-for="(navLink, i) in navLinks" 
                            :key="i">
                            <nuxt-link to="#" class=" active:text-white">
                                {{ navLink }}
                            </nuxt-link>
                                </li>
                    </ul>
        </div>mplate>

        
       
       
       <ul class="  sm:hidden 
                    flex 
                    items-center 
                    space-x-7 
                    text-white 
                    ml-[-200px]
                    sm:flex-col
                    " >
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
     const activeLink = useState("activeLink", () =>"Home"); 
</script>
