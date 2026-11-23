<script setup>
import { useFormStore } from '@/stores/formStore'
import { CardStructureComponent } from '@/components';
import { structureList } from './structureList';

// const formStore = useFormStore()
</script>
<template>
    <main>
        <h1>Qual das seguintes opções descreve melhor seu espaço?</h1>
        <div class="cards-container">
            <CardStructureComponent v-for="i in structureList" :text="i" :key="i"/>
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 640px;
}
</style>