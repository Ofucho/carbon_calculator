
<template>
  <div class="px-6 py-16 md:px-12 lg:px-20 flex items-center justify-center  h-screen">
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" :activeComp="activateComponent"></component>
    </Transition>

  </div>
</template>

<script setup>
import AppGetStarted from '@/components/AppIntroduction/AppGetStarted.vue'
import AppIntro from '@/components/AppIntroduction/AppIntro.vue'
import { shallowRef } from 'vue'

const activeComponent = shallowRef(AppGetStarted)

const activateComponent = () => {
  activeComponent.value = AppIntro
}
</script>

<style>
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
