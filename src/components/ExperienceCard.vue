<script setup>
defineProps({
    experience: {
        type: Object,
        required: true
    }
});
</script>
<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" >
        <div class="card__text">
            {{ experience.name }}
        </div>
    </div>
</template>