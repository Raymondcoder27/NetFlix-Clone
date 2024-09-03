<script setup>
  const props = defineProps({
    movie: Object
  })
</script>

<template>
  <div v-if="movie" class="z-20 text-white pt-20 w-[53%]">
    <div class="font-semibold font-serif text-[55px]">
      {{movie.name}}
    </div>
    <div class="flex items-center text-lg pt-4">
     <div>
      {{ movie.year }}
     </div>
    <div class="relative">
      <span class="absolute text-[40px] left-[2px] -top-[12px]">.</span>
      <span class="pl-4 text-md">{{movie.genre.one}}</span>
    </div>
    <div class="relative">
      <span class="absolute text-[40px] left-[2px] -top-[12px]">.</span>
      <span class="pl-4 text-md">{{movie.genre.two}}</span>
    </div>
    <div class="relative">
      <span class="absolute text-[40px] left-[2px] -top-[12px]">.</span>
      <span class="pl-4 text-md">{{movie.genre.three}}</span>
    </div>
  </div>
  <div class="text-md pt-6">{{ movie.description }}</div>
  </div>
</template>
