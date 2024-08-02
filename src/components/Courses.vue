<template>
    <div>
      <h2 class="text-2xl font-bold mb-2">Courses</h2>
      <form @submit.prevent="addCourse" class="mb-4">
        <input v-model="newCourse.title" placeholder="Title" class="border p-2 mr-2" />
        <input v-model="newCourse.description" placeholder="Description" class="border p-2 mr-2" />
        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </form>
      <ul>
        <li v-for="(course, index) in courseList" :key="index" class="mb-2">
          <span>{{ course.title }} - {{ course.description }}</span>
          <button @click="removeCourse(index)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courseList: [],
        newCourse: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      addCourse() {
        if (this.newCourse.title && this.newCourse.description) {
          this.courseList.push({...this.newCourse});
          this.newCourse.title = '';
          this.newCourse.description = '';
        }
      },
      removeCourse(index) {
        this.courseList.splice(index, 1);
      }
    }
  }
  </script>
  