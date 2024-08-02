<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Computer Science Department Admin Dashboard</h1>
      <nav class="flex space-x-4 mb-4">
        <button @click="currentView = 'news'" class="px-4 py-2 bg-blue-500 text-white rounded">News</button>
        <button @click="currentView = 'courses'" class="px-4 py-2 bg-green-500 text-white rounded">Courses</button>
        <button @click="currentView = 'research'" class="px-4 py-2 bg-red-500 text-white rounded">Research</button>
      </nav>
      <component :is="currentViewComponent" />
    </div>
  </template>
  
  <script>
  import News from '@/components/News.vue'
  import Courses from '@/components/Courses.vue'
  import Research from '@/components/Research.vue'
  
  export default {
    data() {
      return {
        currentView: 'news'
      }
    },
    computed: {
      currentViewComponent() {
        return {
          news: News,
          courses: Courses,
          research: Research
        }[this.currentView]
      }
    }
  }
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  