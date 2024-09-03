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
    <div class="relative min-w-[1200px]">
        <div class="flex justify-between mr-6">
            <div class="flex items-center font-semibold text-white text-lg cursor-pointer">{{ category }}</div>
        </div>
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