<script setup>
import { CardPrivacyTypeComponent } from '@/components';
</script>
<template>
    <main>
        <h1>Que tipo de espaço você oferece aos hóspedes?</h1>
        <div class="cards-container">
            <CardPrivacyTypeComponent url="Casa" class="focus">
                <template #title>Um espaço inteiro</template>
                <template #text>Os hóspedes têm o lugar todo só para eles.</template>
            </CardPrivacyTypeComponent>
            <CardPrivacyTypeComponent url="Porta">
                <template #title>Um quarto</template>
                <template #text>Os hóspedes têm um quarto só para eles em uma acomodação, além de acesso a espaços
                    compartilhados.</template>
            </CardPrivacyTypeComponent>
            <CardPrivacyTypeComponent url="Cama">
                <template #title>Quarto compartilhado em um albergue</template>
                <template #text>Os hóspedes dormem em um quarto compartilhado em um albergue gerenciado
                    profissionalmente com funcionários no local 24 horas.</template>
            </CardPrivacyTypeComponent>
        </div>
    </main>
</template>
<style scoped>
main {
    display: flex;
    flex-direction: column;
}
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