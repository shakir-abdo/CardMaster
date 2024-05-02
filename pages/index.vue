<template>
  <div class="lg:px-32 px-8">
    <div class="flex flex-wrap flex-row-reverse text-left py-8">
      <div class="w-full">
        <div class="centerization w-full text-left">
          <div class="logo-container text-right inline-flex bg-white rounded-lg p-2 px-4 shadow-lg justify-end items-center">
            <img draggable="false" src="mbok.png" class="w-16 inline-block rounded-full">
            <h4 class="font-bold text-gray-700">CardMaster</h4>
          </div>
        </div>
        <h2 class="text-3xl md:pt-12 pt-5  font-semibold text-gray-800 title">Design and Share Your Bank Card Info with Ease</h2>
        <p dir="ltr" class="pt-2 text-gray-700">Please enter all data</p>
      <ValidationObserver ref="form">
        <form @submit.prevent="postData">
        <div class="flex flex-wrap" dir="ltr">
          <div class="w-full md:w-1/2 p-4">
            <ValidationProvider rules="required|name" v-slot="{ errors }">
              <p dir="ltr" class="pt-2 text-gray-700">Full name</p>
              <input type="text"  dir="ltr" v-model="name" class="border border-gray-500 p-2 rounded w-full text-sm mt-2">
              <span class="block text-red-400 text-xs text-left h-2">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <p dir="ltr" class="pt-2 text-gray-700">Branch</p>
              <input type="text"  dir="ltr" v-model="branch" class="border border-gray-500 p-2 rounded w-full  text-sm mt-2">
              <span class="block text-red-400 text-xs text-left h-2">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <ValidationProvider rules="required|number|account" v-slot="{ errors }">
              <p dir="ltr" class="pt-2 text-gray-700">Account Number</p>
              <input type="text"  dir="ltr" v-model="account" class="border border-gray-500 p-2 rounded w-full  text-sm mt-2">
              <span class="block text-red-400 text-xs text-left h-2">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required|mobile" v-slot="{ errors }">
              <p dir="ltr" class="pt-2 text-gray-700">Mobile Number</p>
              <input type="text"  dir="ltr" v-model="mobile" class="border border-gray-500 p-2 rounded w-full  text-sm mt-2">
              <span class="block text-red-400 text-xs text-left h-2">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        </form>
      </ValidationObserver>
        <h3 class="pt-5 py-2 text-gray-700">Please choose design</h3>
        <hr>
      </div>
      <div class="samples w-full flex flex-wrap justify-end">
        <div class="two w-full md:w-1/4 md:p-3 px-0 py-3">
          <div class=" rounded-lg shadow-lg  cursor-pointer img-container  focus:outline-none focus:shadow-outline-blue" tabindex="0">
            <img src="design-2.png" class="w-full"  @click="setDesign('design-2')">
          </div>
        </div>
        <div class="three w-full md:w-1/4 md:p-3 px-0 py-3">
          <div class=" rounded-lg  shadow-lg cursor-pointer img-container  focus:outline-none focus:shadow-outline-blue" tabindex="0">
            <img src="design-3.png" class="w-full"  @click="setDesign('design-3')">
          </div>
        </div>
        <div class="four w-full md:w-1/4 md:p-3 px-0 py-3">
          <div class=" rounded-lg  shadow-lg   cursor-pointer img-container  focus:outline-none focus:shadow-outline-blue" tabindex="0">
            <img src="design-4.png" class="w-full"  @click="setDesign('design-4')">
          </div>
        </div>
        <div class="five w-full md:w-1/4 md:p-3 px-0 py-3">
          <div class=" rounded-lg  shadow-lg   cursor-pointer img-container  focus:outline-none focus:shadow-outline-blue" tabindex="0">
            <img src="design-5.png" class="w-full"  @click="setDesign('design-5')">
          </div>
        </div>
      </div>
      <hr>
      <div class="btn-container p-5 mr-auto">
        <button @click="postData()" class="text-white py-2 px-4 rounded hover:opacity-75  transition-all duration-75">Download Card</button>
      </div>
      <hr>
      <div class="bg-white p-4 mx-5 mt-12 block w-full" dir="ltr">
        <h3 class="font-bold text-gray-700">Credit</h3>
        <p class="text-sm text-gray-600"  dir="ltr">Shakir abdo, ALX Software Engineering Program</p>
        <p class="text-sm text-blue-400 underline"><nuxt-link to="/about">Developer</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
const fileDownload = require('js-file-download');
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, numeric } from 'vee-validate/dist/rules';
extend('number', {
  ...numeric,
  message: 'Please enter a valid mobile number'
});
extend('name', (value) => {
  const pattern = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]/;
  const name = String(value);
  if (pattern.test(name) && name.length > 2 && name.length < 50) return true;
  return 'name is not valid';
});
extend('mobile', (value) => {
  if (String(value).length == 10 && String(value).startsWith('0') && Number(value)) return true;
  return 'mobile number is not valid';
});
extend('account', (value) => {
  if (String(value).length >= 4 && String(value).length <= 10 && Number(value)) return true;
  return 'account number is not valid';
});
extend('required', {
  ...required,
  message: 'this field is required'
});
export default {
  data: () => ({
    name: '',
    design: 'design-2',
    branch: '',
    account: '',
    mobile: ''
  }),
  methods: {
    setDesign(design) {
      this.design = design
    },
    async postData() {
       const success = await this.$refs.form.validate();
      if (!success) {
        window.scrollTo(0,0)
        return;
      }
      let loader = this.$loading.show({
         // Optional parameters
         container: null,
         canCancel: false,
         color: '#cc292b',
         loader:'bars'
                });
      const { data } = await this.$axios({
        url: '/api/test',
        method: 'POST',
        responseType: 'blob',
        data: {name: this.design, user: this.name, branch: this.branch, account: this.account, mobile: this.mobile}
      })
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'card.png');
  document.body.appendChild(link);
  link.click();
  loader.hide()
    }
  },
    components: {
    ValidationProvider,
    ValidationObserver
  }
}
</script>

<style>
body {
background-color: #f6f6f6;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23cbcacc' fill-opacity='0.12' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}
.samples div img {
  object-fit: cover;
}
.samples  .img-container:hover {
  transform: translateY(-12px);
}
.samples .img-container {
  position: relative;
  transition: all .7s ease-in-out 0.1s;
  overflow: hidden;
}
.title {
   color: rgb(104, 104, 255);
    -webkit-text-fill-color: transparent;
    background: linear-gradient(to left, rgb(216, 255, 0), rgb(204, 41, 43)) text;
    background-image: linear-gradient(to left, rgb(216, 255, 0), rgb(204, 41, 43));
    background-clip: text;

}
button {
    background-image: linear-gradient(45deg, rgba(218, 187, 100, 0.74), rgb(204, 41, 43));
}
</style>
