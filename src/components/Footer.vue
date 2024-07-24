<script setup>
</script>

<template>
  <footer class="bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-4 md:mb-0">
            <h2 class="text-2xl font-bold">Contact</h2>
            <p>ที่อยู่ ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์</p>
            <p>239 ถ. ห้วยแก้ว ต.สุเทพ อ.เมือง จ. เชียงใหม่ 50200</p>
            <p>หมายเลขโทรศัพท์ โทรศัพท์ : 0-5394-3412-16, 063-080-7969</p>
            <p>ธุรการ : กด 0 หรือ 101</p>
            <p>หลักสูตรปริญญาตรี : กด 103</p>
            <p>หลักสูตรปริญญาโท-เอก : กด 105</p>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <a href="https://www.facebook.com/compscicmu/" target="_blank" class="text-white hover:text-gray-400">
                <v-icon name="fa-facebook" scale="2.5"/>
              </a>
            </div>
            <div>
              <p>Email : Compsci@cmu.ac.th</p>
              <p>Line ID : 
                <a href="https://line.me/ti/p/~cscmu" class="text-sky-400 hover:text-sky-700">comscicmu</a>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 text-end text-sm">
          <p>Copyright © 2024 ภาควิชาวิทยาการคอมพิวเตอร์. All rights reserved.</p>
        </div>
      </div>
    </footer>
</template>

<script>
</script>


<style scoped>
  footer {
    background-color: black;
    color: white;
    bottom: 0;
    width: 100%;
  }
  footer p {
    margin: 0.5rem 0;
  }
  footer a {
    transition: color 0.3s ease;
  }
</style>

