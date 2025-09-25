<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default {
        name: "Foto",
        data(){
            return {
                avatar: "/img/clube.jpg",
                descricao: "foto do filme clube dos cinco"
            }
        }
    }
</script>
<style scoped>
    img{
        width: 400px;
        height: 200px;
        border-radius: 10%;
    }
</style>