<script setup>
</script>
<template>
    <main>
        <h1>Confirme seu endereço</h1>
        <p class="info">Seu endereço só é compartilhado com os hóspedes depois que a reserva é confirmada.</p>
        <div class="inputs-container">
            <p>
                <label for="endereco">Endereço</label>
                <input id="endereco" type="text" placeholder="Digite o endereço" />
            </p>
            <p>
                <label for="numero">Número</label>
                <input id="numero" type="text" placeholder="Digite o número da residência" />
            </p>
            <p>
                <label for="bairro">Bairro</label>
                <input id="bairro" type="text" placeholder="Digite o bairro" />
            </p>
            <p>
                <label for="cidade">Cidade</label>
                <input id="cidade" type="text" placeholder="Digite a cidade" />
            </p>
            <p>
                <label for="estado">Estado</label>
                <input id="estado" type="text" placeholder="Digite o estado" />
            </p>
            <p>
                <label for="cep">CEP</label>
                <input id="cep" type="text" placeholder="Digite o CEP" />
            </p>
        </div>
    </main>
</template>
<style scoped>
main {
    width: 500px;
    text-align: left;
}

h1 {
    font-size: 30px;
    font-weight: 600;
    color: var(--black);
    margin: 35px 0 15px 0;
}

.info {
    color: #424242e1;
    font-weight: 400;
    margin-bottom: 20px;
}

.inputs-container {
    display: grid;
    gap: 16px;
    width: 100%;
}

p {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--black);

    & label {
        font-size: 14px;
    }

    & input {
        border-radius: 10px;
        border: 1px solid #9c9c9c;
        outline: none;
        padding: 12px;
        background-color: transparent;
    }
}
</style>