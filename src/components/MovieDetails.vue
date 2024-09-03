<script setup>
  const props = definProps({
    movie
  })
</script>

<template>
  <div v-if="movie" class="z-20 text-white pt-20 w-[53%]">
    <div class="font-semibold font-serif text-[55px]">
      {{movie.name}}
    </div>
    <div class="flex items-center text-lg pt-4">
      {{ movie.year }}
    </div>
    <div class="relative">
      <div class="absolute text-[40px] left-[2px] -top-[12px]">.</div>
      <div class="pl-4">{{movie.genre.one}}</div>
    </div>
  </div>
</template>
