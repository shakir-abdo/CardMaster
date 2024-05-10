<template>
    <div class="container mx-auto">
        <div class="relative max-h-screen h-[500px] overflow-hidden rounded-2xl">
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
        <div id="features" class="px-2 mt-12">
            <h1 class="font-bold text-gray-700 text-3xl mt-3">Features</h1>
            <div class="flex justify-center mt-8 flex-wrap items-center">
                <div class="w-full md:w-1/3">
                    <img src="/card-demo.png" alt="">
                </div>
                <div class="p-4 flex-1">
                    <h1 class="text-gray-700">Design your card with ease. Simply enter the full name, the name of the difference, the account number, and the phone number. Choose from 4 different designs.</h1>
                </div>
            </div>
        </div>
        <div id="about" class="px-2 mt-12 pb-24">
            <div id="about" class="px-2 mt-12">
                <h1 class="font-bold text-gray-700 text-3xl mt-3">About</h1>
                <div class="mt-8">
                    <h1 class="text-gray-700">Inspiration for CardMaster</h1>
                    <p class="mt-4">
                        The idea for <strong>CardMaster</strong> originated from a common challenge faced by people in Sudan, including myself and my co-developer, Awab Omer. In Sudan, completing even the simplest financial transaction requires the exchange of detailed bank account information, such as full name, account number, and bank branch. This information is frequently exchanged over platforms like WhatsApp, and remembering or accurately recording this information each time can be cumbersome and error-prone.
                    </p>
                    <p class="mt-4">
                        We noticed that many of our friends and family members were frustrated with the repetitive nature of this process, often leading to mistakes and security concerns when sharing sensitive information in plain text. We saw an opportunity to streamline this process by creating a web application that allows users to generate a visually appealing and easily shareable bank card image. This image could be downloaded and reused, reducing the need to repeatedly type or remember bank details.
                    </p>
                    <p class="mt-4">
                        The development of CardMaster is not only a response to a real-world problem but also a key component of our portfolio at Holberton School. This project reflects our commitment to applying what we've learned in a practical, user-oriented context.
                    </p>
                    <h2 class="mt-8">Project Timeline:</h2>
                    <ul class="list-disc list-inside mt-4">
                        <li><strong>Week 1</strong>: Research and Project Proposal submission.</li>
                        <li><strong>Week 2</strong>: MVP definition and layout of infrastructure requirements.</li>
                        <li><strong>Week 3</strong>: Final adjustments based on feedback and preparation for deployment.</li>
                    </ul>

                    <h1 class="mt-8">Team Members and Links</h1>
                    <h2 class="mt-4">Shakir Abdo</h2>
                    <ul class="list-disc list-inside mt-2">
                        <li>GitHub: <a href="https://github.com/shakir-abdo" class="text-blue-500 underline" target="_blank">shakir-abdo</a></li>
                        <li>Twitter: <a href="https://twitter.com/shakir_abdoo" class="text-blue-500 underline" target="_blank">@shakir_abdoo</a></li>
                    </ul>

                    <h2 class="mt-4">Awab Omer</h2>
                    <ul class="list-disc list-inside mt-2">
                        <li>GitHub: <a href="https://github.com/awab228" class="text-blue-500 underline" target="_blank">awab228</a></li>
                        <li>Twitter: <a href="https://twitter.com/awab228" class="text-blue-500 underline" target="_blank">Awab Omer</a></li>
                    </ul>

                    <h1 class="mt-8">Project Repository</h1>
                    <p class="mt-4">
                        <strong>Repository</strong>
                        <a href="https://github.com/shakir-abdo/https://github.com/shakir-abdo/CardMaster" class="text-blue-500 underline" target="_blank">GitHub Repository</a>
                    </p>
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
#features > h1:after, #about > h1:after{
    content: "";
    display: block;
    width: 100px;
    height: 5px;
    background-color: #fada55;
    margin-top: -5px;
}
</style>
