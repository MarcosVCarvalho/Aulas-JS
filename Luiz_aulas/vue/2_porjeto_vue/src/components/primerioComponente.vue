<template>
    <div>
    <h1>Ola Vue</h1>
    <p>Meu nome é {{ profissao }} e sou o {{ nome }}</p>
    </div>
</template>

<script>
    export default {
        name: "primerioComponente",
        data(){
            return{
                nome: "Marcos",
                profissao: "Programador"
            }
        }
    }
</script>