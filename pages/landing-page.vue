<template>
  <div class="relative max-h-screen h-[500px] overflow-hidden">
    <div class="w-full">
        <img src="/showcase.png" alt="" class="object-cover w-full h-full">
    </div>
    <div class="overlay absolute inset-0 flex flex-col justify-start items-stretch">
        <div class="header border-b  py-2 border-white">
            <div class="flex items-center justify-between px-2">
                <div class="flex">
                    <a href="#features" class="px-3">Features</a>
                    <a href="#about" class="px-3">About</a>
                </div>
                <nuxt-link class="px-3 slogan rounded-lg py-2 text-sm hover:opacity-75" to="/">Project demo</nuxt-link>
            </div>
        </div>
        <div class="flex flex-1 justify-center items-center">
            <div>
                <h1 class="text-6xl font-bold text-gray-700">Card Master</h1>
                <p class="slogan  px-2">Design and Share Your Bank Card Info with Ease.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
.overlay {
/* From https://css.glass */
background: rgba(255, 255, 255, 0.46);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.2px);
-webkit-backdrop-filter: blur(2.2px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
.slogan {
    background-color: #fada55;
}
</style>
