<template>
    <main>
        <h1>Adicione algumas fotos da sua acomodação</h1>
        <p class="sub-title">Você precisa de cinco fotos para começar. Você pode adicionar outra imagens ou fazer
            alterações mais tarde.</p>
        <div class="photo-input">
            <img src="../../assets/icons/camera-imagem.avif" alt="a">
            <button>Adicionar</button>
        </div>
    </main>
</template>
<style scoped>
main {
    width: 640px;
    text-align: left;
    /* margin-bottom: 70px; */
}

h1 {
    font-size: 30px;
    font-weight: 600;
    color: var(--black);
    max-width: 640px;
    width: 100%;
    margin: 35px 0 10px 0;
}

.sub-title {
    color: #424242e1;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 26px;
}

.photo-input {
    border: 1px dashed #424242e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 7/6;
    border-radius: 14px;

    & button {
        background-color: var(--black);
        color: #F2F2F2;
        margin: 30px;
        padding: 12px 28px;
        border: none;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
    }

    & img {
        width: 100px;
    }
}
</style>