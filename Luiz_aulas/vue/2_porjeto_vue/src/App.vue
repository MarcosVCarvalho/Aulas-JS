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
    Life,
    Pessoa,
  },
  data() {
    return {
      testando: "vc"
    }
    },
};
</script>
http://127.0.0.1:5500/README.md