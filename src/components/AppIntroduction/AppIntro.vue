
<template>
  <div class="p-10 shadow-sm backdrop-blur-md rounded-md bg-white border border-gray-100">
    <div class="text-2xl mb-6 text-primary-contrast">
      <h1 class="font-semibold">
        Before We Start
      </h1>
    </div>

    <div class="flex flex-col p-4 mb-4 space-y-4 text-sm rounded-md bg-blue-50 w-96">
      <span class="font-medium">Understanding Your Impact</span>
      <div>
        <span class="font-normal text-gray-800">
          Your lifestyle choices impact the climate, shaping what's known as your
            carbon footprint
        </span>
      </div>
    </div>
    <div class="flex flex-col p-4 mb-4 space-y-4 text-sm rounded-md bg-green-50 w-96">
      <span class="font-medium">Real-time Updates</span>
      <div>
        <span class="font-normal text-gray-800">
          As you answer questions, your footprint will update in real-time.
          The more questions you answer, the more accurate your results will be.
          Let's explore your impact together!
        </span>
      </div>
    </div>



<!--    <Button as-child icon="pi pi-arrow-right" iconPos="right" class="!bg-gray-900 !border-none w-full rounded-sm">-->
<!--      <RouterLink to="carbon-calculator">Start Calculator</RouterLink>-->
<!--    </Button>-->

    <Button v-slot="slotProps" asChild>
      <RouterLink to="carbon-calculator">
      <button
        v-bind="slotProps.a11yAttrs"
        class="rounded-sm w-full bg-gray-900 text-white border-none px-6 py-3 cursor-pointer transition-all"
      >
        Start Calculator
      </button>
      </RouterLink>
    </Button>

  </div>

</template>

<script setup>

import { Button } from 'primevue'
</script>
