import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/style.css' // Custom CSS
import './assets/css/tailwind.css' // Tailwind CSS

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as HiIcons from "oh-vue-icons/icons/hi";

const Fa = Object.values({ ...FaIcons });
const Hi = Object.values({ ...HiIcons });
addIcons(...Fa);
addIcons(...Hi);

createApp(App).component("v-icon", OhVueIcon).use(router).mount('#app')
