<script setup>
import { useRoute } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue'

</script>

<template>
  <TheNavbar></TheNavbar>

  <div class="container">
    <router-view v-slot="{Component}" >
      <transition name="fade" mode="out-in"  :key="useRoute().path">
        <component :is="Component" ></component>
      </transition>
    </router-view>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>