<template>
    <div class="card-structure-container">
        <img src="https://www.svgrepo.com/show/509134/home.svg" alt="">
        <p>Casa</p>
    </div>
</template>
<style scoped>
.card-structure-container {
    border: 1px solid #cacaca;
    border-radius: 10px;
    padding: 16px;

    & i {
        font-size: 35px;
    }

    & img {
        width: 30px;
        margin-bottom: 4px;
    }
}

.card-structure-container:hover {
    border: 2px solid var(--black);
}

.focus {
    border: 2px solid var(--black);
}
</style>