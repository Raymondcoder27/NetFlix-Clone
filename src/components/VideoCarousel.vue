<script setup>
    import {ref, toRefs} from 'vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel';

    import {useMovieStore} from '@/stores/movie'
    import { storeToRefs } from 'pinia';

    const useMovie = useMovieStore()
    const {movie, showFullVideo} = storeToRefs(useMovie)

    let currentSlide = ref(0)
    const props = defineProps({
        category: String,
        movies: Array
    })
    const {movies, category} = toRefs(props)

    const currentSlideObject = (slide, index) => {
        if (index === currentSlide.value){
            movie.value = slide
        }
    }

    const fullScreenVideo = (index) => {
        currentSlide.value = index
        setTimeout(() => showFullVideo.value = true, 500);
    }
</script>   
<template>
    <div class="relative w-full min-w-[1000px]">
        <div class="flex justify-between mr-6">
            <div class="flex items-center font-semibold text-white text-lg cursor-pointer">{{ category }}</div>
        </div>

        <Carousel 
        ref="carousel"
        v-model="currentSlide"
        :items-to-show="8"
        :items-to-scroll="1"
        :wrap-around="true"
        :transition="500"
        snapAlign="start"
        class="bg-transparent"
        >
        <Slide
        v-for="slide, index in movies"
        :key="slide"
        class="flex items-center object-cover text-white bg-transparent">{{ slide }}</Slide>
    </Carousel>
    </div>
</template>

<style>
    .carousel_prev,
    .carousel_next,
    .carousel_prev:hover,
    .carousel_next:hover{
        color: white;
    }
</style>