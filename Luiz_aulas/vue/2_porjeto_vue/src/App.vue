<template>
  <div>
    <primerioComponente />
    <p>O dado de testando é: {{ testando }}</p>
    <Life />
    <Pessoa />
  </div>
</template>

<script>
import primerioComponente from "./components/primerioComponente.vue";
import Life from "./components/Life.vue";
import Pessoa from "./components/pessoa.vue";

export default {
  name: "App",
  components: {
    primerioComponente,
    Pessoa,
    Life,

  },
  data() {
    return {
      testando: "vc"
    }
    },
};
</script>

<style>
  body{
    background-color: #131313;
    color: #fff}
    a {
      color: #2acf09;
    }
</style>
http:// 127.0.0.1:5500/README.md