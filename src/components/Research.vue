<template>
    <div>
      <h2 class="text-2xl font-bold mb-2">Research</h2>
      <form @submit.prevent="addResearch" class="mb-4">
        <input v-model="newResearch.title" placeholder="Title" class="border p-2 mr-2" />
        <input v-model="newResearch.summary" placeholder="Summary" class="border p-2 mr-2" />
        <button type="submit" class="px-4 py-2 bg-red-500 text-white rounded">Add</button>
      </form>
      <ul>
        <li v-for="(research, index) in researchList" :key="index" class="mb-2">
          <span>{{ research.title }} - {{ research.summary }}</span>
          <button @click="removeResearch(index)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        researchList: [],
        newResearch: {
          title: '',
          summary: ''
        }
      }
    },
    methods: {
      addResearch() {
        if (this.newResearch.title && this.newResearch.summary) {
          this.researchList.push({...this.newResearch});
          this.newResearch.title = '';
          this.newResearch.summary = '';
        }
      },
      removeResearch(index) {
        this.researchList.splice(index, 1);
      }
    }
  }
  </script>
  