
<template>
  <div class="p-10 shadow-sm text-center backdrop-blur-md rounded-md bg-white border border-gray-100">
    <div class="flex justify-center items-center mb-4">
        <span class="flex justify-center items-center w-10 h-10 rounded-full bg-green-100">
        <svg class="w-6 h-6 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
          </span>
    </div>

    <div class="text-2xl mb-6 text-primary-contrast">
      <h1 class="font-medium">
        Lifestyle Calculator
      </h1>
      <p class="font-normal text-base">
        Discover Your Impact
      </p>

    </div>

    <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-md bg-green-50">
      <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5"/><path d="M8.5 6.755h7m-7 4h7m-7 4H12"/></g>
      </svg>
      <span class="sr-only">Info</span>

      <div>
        <span class="font-normal text-gray-800">Answer a few quick questions about your lifestyle</span>
      </div>
    </div>

    <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-md bg-blue-50">
      <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5c-3.81 0-6.5 2.743-6.5 6.119c0 1.536.632 2.572 1.425 3.56c.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774c.404.531.783 1.128.995 1.834a.75.75 0 0 1-1.436.432c-.138-.46-.397-.89-.753-1.357a18 18 0 0 0-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618C4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5c-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714c-.356.467-.615.898-.753 1.357a.751.751 0 0 1-1.437-.432c.213-.706.592-1.303.997-1.834c.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634c.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5M8.75 18h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m.75 3.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
          <span class="font-normal text-gray-800">
            Receive personalized tips to make eco-friendly choices
          </span>
      </div>
    </div>

    <div class="flex items-center p-4 mb-4 text-sm text-purple-800 rounded-md bg-purple-50" >
      <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 7.5H7a.5.5 0 0 0 .146.354zm0 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM7 3v4.5h1V3zm.146 4.854l3 3l.708-.708l-3-3z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
          <span class="font-normal text-gray-800">
            Just 12 questions, only 4 minutes!
          </span>
      </div>
    </div>

    <Button @click="props.activeComp" label="Get Started" icon="pi pi-arrow-right" iconPos="right" class="!bg-gray-900 !border-none w-full rounded-sm" />

  </div>

</template>

<script setup>
import { Button } from 'primevue'

const props = defineProps({
  activeComp: {
    type: Function,
    required: true,
  }
})
</script>
