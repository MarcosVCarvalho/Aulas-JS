<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: "Life",
    data(){
        return{
            nome: "ainda não sei"
        }
    },
    created(){
        this.nome = "Marcos Vinicius"
    },
    mounted(){
        this.nome = "Marcos Vinicius Carvalho"
    }
};
</script>