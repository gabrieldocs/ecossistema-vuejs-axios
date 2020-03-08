<template>
  <div class="hello mb-5">
    <div class="jumbotron bg-danger">
      <div class="row">
        <div class="col-md-12">
          <img src = "http://research.uninta.edu.br/ecossistema/vendor/images/logo.png" width = "120">
          <br><br>
          <h1 class = "text-white">{{ msg }}</h1>
         
        </div>
      </div>
    </div>
    
    <h3>Ferramentas de Ecossistema</h3>
    <center>
      <div class="pre bg-danger mt-5 mb-5"></div>
    </center>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.jumbotron { 
  border-radius: 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.pre { 
  width: 100px;
  height: 4px;
  border-radius: 10px;;
}
</style>
