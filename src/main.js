import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css' // Custom CSS
import './assets/css/tailwind.css' // Tailwind CSS

createApp(App).use(router).mount('#app')
