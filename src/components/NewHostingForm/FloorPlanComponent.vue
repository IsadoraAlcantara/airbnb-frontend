<template>
    <main>
        <h1>Compartilhe algumas informações básicas sobre sua acomodação</h1>
        <p class="sub-title">Você adicionará mais informações depois, como tipos de cama.</p>
        <div class="counters-container">
            <div class="line">
                <p>Hóspedes para pernoite</p>
                <div class="counter">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
            <div class="line">
                <p>Quartos</p>
                <div class="counter">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
            <div class="line">
                <p>Camas</p>
                <div class="counter">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
            <div class="line">
                <p>Banheiros</p>
                <div class="counter">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
main {
    text-align: left;
    max-width: 640px;
}

h1 {
    font-size: 30px;
    font-weight: 600;
    color: #222222;
    max-width: 640px;
    margin: 35px 0 15px 0;
}

.sub-title {
    color: #424242e1;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 50px;
    width: 100%;
}

.counters-container {
    display: grid;
    gap: 16px;
    width: 100%;

    & .line {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        color: #222222;
        border-bottom: 1px solid #dfdfdfe0;
        padding: 20px 0;
    }

    & .line:last-child {
        border: none;
    }

    & .counter {
        display: flex;
        align-items: center;
        gap: 14px;

        & p {
            font-weight: 400;
            font-size: 16px;
        }

        & button {
            border-radius: 50%;
            border: none;
            width: 35px;
            aspect-ratio: 1;
            font-size: 24px;
            color: #424242e1;
        }
    }
}
</style>