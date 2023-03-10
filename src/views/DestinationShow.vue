<script setup>
import { computed } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import GoBack from '../components/GoBack.vue'
import data from '../data.json'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const destination = computed(() => {
  return data.destinations.find((destination) => destination.id === props.id)
})
</script>
<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack></GoBack>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          :to="{ name: 'experience.show', params: { id: id, slug: experience.slug } }"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
          <ExperienceCard :experience="experience"></ExperienceCard>
        </router-link>
      </div>
    </section>

    <router-view></router-view>
  </div>
</template>
