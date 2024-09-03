import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref(null)
  const showFullVideo = ref(false)

  return { movie, showFullVideo }
})
