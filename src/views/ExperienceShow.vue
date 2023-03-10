<script setup>
import { computed } from 'vue';
import data from "../data.json";

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    expSlug: {
        type: String,
        required: true
    }
});
const destination = computed(() => {
    return data.destinations.find((destination) =>  destination.id === props.id);
});

const experience = computed(() => {
    return destination.value.experiences.find((experience) => experience.slug === props.expSlug);
})
</script>

<template>
  <section v-if="experience" id="exp">
    <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p >{{ experience.description }}</p>
  </section>
</template>
