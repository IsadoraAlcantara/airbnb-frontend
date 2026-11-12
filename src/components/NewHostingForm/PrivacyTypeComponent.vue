<script setup>
import { CardPrivacyTypeComponent } from '@/components';
</script>
<template>
    <main>
        <h1>Que tipo de espaço você oferece aos hóspedes?</h1>
        <div class="cards-container">
            <CardPrivacyTypeComponent />
            <!-- <CardPrivacyTypeComponent v-for="n in 10" :key="n"/> -->
        </div>
    </main>
</template>
<style scoped>
h1 {
    font-size: 30px;
    font-weight: 600;
    color: var(--black);
    max-width: 640px;
    margin: 35px 0;
}

.cards-container {
    display: grid;
    gap: 16px;
    max-width: 640px;
    width: 100%;
}
</style>