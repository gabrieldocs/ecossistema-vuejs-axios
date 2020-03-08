<template>
  <div id="app">
    <Nav></Nav>
    <hello msg = "ECOSSISTEMA DE APRENDIZAGEM"></hello>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <card title="ECOSSISTEMA DE APRENDIZAGEM" content = "Espaço destinado a propagação de ideias e ..." url = "https://ecossistema.uninta.edu.br" />
        </div>
        <div class="col-md-4">
          <card title="ECOSSISTEMA DE APRENDIZAGEM" content = "Espaço destinado a propagação de ideias e ..." url = "https://ecossistema.uninta.edu.br" />
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

import Card from './components/Card.vue'
import Hello from './components/Hello.vue'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Card,
    Hello,
    Nav
  }
}
</script>

<style>
h1, h2, h3, h4 { 
  font-family: 'Alata', sans-serif;
}
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
