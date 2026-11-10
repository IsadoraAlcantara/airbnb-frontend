<template>
    <main>
        <form action="#">
            <h2>Seja bem-vindo de volta</h2>
            <h3>Explore o mundo com o Airbnb</h3>
            <p>
                <label for="email">
                    Email
                </label>
                <input type="text" placeholder="Digite seu email">
            </p>
            <p>
                <label for="email">
                    Senha
                </label>
                <input type="text" placeholder="Digite sua senha">
            </p>
            <button>Entrar</button>
        </form>
    </main>
</template>
<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color: white;
    background-image: url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}

form {
    width: 300px;
    background: rgba(134, 103, 160, 0.3);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 40px;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 20px;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    & p {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;

        & label {
            font-size: 14px;
        }

        & input {
            border-radius: 10px;
            border: 1px solid #DFDCF2;
            outline: none;
            padding: 10px;
            background-color: transparent;
        }

        & input::placeholder {
            color: #fafafa;
        }
    }

    & button {
        margin-top: 15px;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-size: 14px;
        background-color: #DFDCF2;
    }
}
</style>