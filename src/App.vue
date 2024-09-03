<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import HomeOutline from 'vue-mateial-deisgn-icons/HomeOutline.vue'
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue'    
import Television from 'vue-material-design-icons/Television.vue'
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
</script>

<template>
  <header class="">
    <div class="flex">
      <nav class="flex mx-auto justify-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink class="ml-3" to="/about">About</RouterLink>
      </nav>
    </div>

  </header>
  <RouterView />


</template>
