<script setup>
    import {ref, toRefs} from 'vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel';

    import {useMovieStore} from '@/stores/movie'
    import { storeToRefs } from 'pinia';

    const useMovie = useMovieStore()
    const {movie, showFullMovie} = storeToRefs(useMovie)

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
</script>   
<template>
    
</template>

<style>
    .carousel_prev,
    .carousel_next,
    .carousel_prev:hover,
    .carousel_next:hover{
        color: white;
    }
</style>