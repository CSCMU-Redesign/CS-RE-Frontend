<template>
    <div>
      <h2 class="text-2xl font-bold mb-2">News</h2>
      <form @submit.prevent="addNews" class="mb-4">
        <input v-model="newNews.title" placeholder="Title" class="border p-2 mr-2" />
        <input v-model="newNews.content" placeholder="Content" class="border p-2 mr-2" />
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
      </form>
      <ul>
        <li v-for="(news, index) in newsList" :key="index" class="mb-2">
          <span>{{ news.title }} - {{ news.content }}</span>
          <button @click="removeNews(index)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsList: [],
        newNews: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      addNews() {
        if (this.newNews.title && this.newNews.content) {
          this.newsList.push({...this.newNews});
          this.newNews.title = '';
          this.newNews.content = '';
        }
      },
      removeNews(index) {
        this.newsList.splice(index, 1);
      }
    }
  }
  </script>
  