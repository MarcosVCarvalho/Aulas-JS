<template>
    <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Não estou trabalhando</p>
    <u>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Vue.js</li>
        <li>HTML</li>
    </u>
    <div>
        <button @click="ShowEmail">{{textoBotao}}</button>
    </div>
    <p v-show="mostar_email">Mande uma mensagem para {{ email }}</p>
    <p>Para acessar meu portifolio basta <a v-bind:href="meuLink">clicar aqui</a></p>
    <foto />
    </div>
</template>

<script>
import foto from "./foto.vue"

export default {
    name: "Infos",
    components: {
        foto
    },
    data(){
        return {
            esta_trabalhando: true,
            mostar_email: false,
            email: "markinho@gmail",
            meuLink: "https://www.google.com",
            textoBotao: "Mostrar Email"
        }
    },
    methods: {
        ShowEmail(){
            this.mostar_email = !this.mostar_email
            if(this.mostar_email){
                this.textoBotao = "esconder email"
            } else {
                this.textoBotao = "mostrar email"
            }
        }
    }
};
</script>
