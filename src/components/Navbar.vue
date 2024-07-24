<template>
    <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-16 w-16" src="@/assets/logo/cscmu_logo.png" alt="Logo">
                    </div>
                    <div class="ml-1">
                        <h4 class="text-2xl font-bold text-gray-800 ">Computer Science</h4>
                        <p class="text-sm font-semibold text-gray-800">Chiang Mai University</p>
                    </div>
                </div>
                <div class="hidden md:flex md:flex-1 md:items-center md:justify-end">
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Programs</a>
                        <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                        <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Staff</a>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <button @click="toggleMobileMenu" type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black">
                        <span class="sr-only">Open main menu</span>
                        <v-icon name="hi-menu" scale="1" v-if="!mobileMenuOpen"/>
                        <v-icon name="hi-x" scale="1" v-else/>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Programs</a>
                <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Faculty</a>
                <a href="#" class="text-gray-700 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
/* Add any necessary custom styles here */
#mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
}

#mobile-menu.block {
    max-height: 500px; /* Adjust based on your content height */
}
</style>
