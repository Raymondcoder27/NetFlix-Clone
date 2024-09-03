<script setup>
import movies from './movies.json'
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue'
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue'    
import Television from 'vue-material-design-icons/Television.vue'
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

import {useMovieStore} from '@/stores/movie'
import { storeToRefs } from 'pinia'
const useMovie = useMovieStore()
const {movie, showFullVideo} = storeToRefs(useMovie)

onMounted(()=>{
  setTimeout(() => movie.value = movies[0][0], 100);
})

</script>

<template>
  <div class="bg-black fixed w-full h-screen">
    <div v-if="!showFullVideo" id="SideNav" class="flex z-40 items-center h-screen bg-black relative w-[120px]">
      <img src="/public/images/netflix-logo.png" class="absolute  top-0 mt-10 w-[35px] ml-10" alt="">
      <div class="mt-16">
        <div class="py-2 mx-10 my-6">
          <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
          <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <TrendingUp fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Television fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Plus fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
  <RouterView />


</template>
