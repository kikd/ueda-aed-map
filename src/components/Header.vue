<script setup lang="ts"></script>

<template>
    <header class="navbar">
        <h1 class="item">上田市 AED設置場所マップ</h1>
        <router-link to="about" class="item">About</router-link>
    </header>
</template>

<style scoped>
.navbar {
    padding:0 1rem;
    display:flex;
    justify-content: space-between;
    align-self:center;
    align-items:baseline;
    background-color: #31a9ee; 
    color: #080808;
}
.navbar .item:first-child{
    margin-right:auto;
}
</style>
