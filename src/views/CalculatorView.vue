<template>
  <div class="px-6 py-20 md:px-12 lg:px-20 h-screen">
    <div class="bg-[#ECF1FD]  shadow-md rounded-md w-full lg:w-6/12 mx-auto">
      <div class="flex flex-row">
        <div class="basis-1/3 p-6">
          <div class="flex flex-col gap-12">
            <div>
              <div class="mb-6">
                <h1 class="font-semibold uppercase">
                  Calculating your Footprint
                </h1>
              </div>

              <div class="card flex justify-center mb-12">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="checked" class="sr-only peer" checked>
                  <span class="me-3 text-sm font-medium text-gray-400"
                        :class="{'!text-[#4C6FFF]' : !checked}">
                tonnes
              </span>
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4C6FFF]"></div>
                  <span class="ms-3 text-sm font-medium text-gray-400"
                        :class="{'!text-[#4C6FFF]' : checked}">
                kilograms
              </span>
                </label>
              </div>

            </div>

            <div class="text-center mb-12">
              <p class="text-4xl font-semibold">0.00</p>
              <p>kilograms CO<sub>2</sub>e</p>
            </div>


            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 7.5H7a.5.5 0 0 0 .146.354zm0 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM7 3v4.5h1V3zm.146 4.854l3 3l.708-.708l-3-3z"/>
                </svg>

                <p class="text-sm">1 of 12 questions</p>

              </div>

              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-[#4C6FFF] h-2.5 rounded-full" style="width: 15%"></div>
              </div>

            </div>

          </div>

        </div>

        <div class="basis-2/3 ">
          <div class="bg-gray-50 rounded-md h-full p-6 flex flex-col justify-between">
            <div>
              <div class="flex justify-between">
                <h1 class="uppercase">Home</h1>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.97 8.265a1.45 1.45 0 0 0-.487.57a.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215c-.19.183-.399.358-.579.508l-.147.123a4 4 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736c.22-.28.486-.517.718-.714l.183-.153l.001-.001c.172-.143.324-.27.47-.412c.368-.355.569-.676.569-1.136a.95.95 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"/></svg>

              </div>
              <Divider />
              <div>
                <div class="flex justify-start items-center mb-6">
                  <svg class="stroke-[#4C6FFF] me-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>

                  <p>What is your country of residence?</p>
                </div>

                <div class="card flex justify-center">
                  <Select v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select your country" class="w-full " />
                </div>

              </div>

            </div>




            <div class="flex justify-between">
              <span class="flex justify-center items-center w-10 h-10 rounded-full text-gray-500 border border-gray-300">
              <i class="pi pi-arrow-left"></i>
              </span>
              <span class="flex justify-center items-center w-10 h-10 rounded-full text-white bg-[#4C6FFF]">
              <i class="pi pi-arrow-right"></i>
              </span>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Divider, Select } from 'primevue'

const checked = ref(true);

const selectedCountry = ref();
const countries = ref([
  { name: 'United Arab Emirates', code: 'UAE' },
  { name: 'USA', code: 'US' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Kenya', code: 'KE' }
]);

</script>
