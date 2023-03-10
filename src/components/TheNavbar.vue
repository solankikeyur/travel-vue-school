<script setup>
import data from "../data.json";
</script>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="destination in data.destinations" :to="`/destination/${destination.id}`" :key="destination.id">{{destination.name}}</router-link>
  </div>
</template>
