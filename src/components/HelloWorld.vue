<template>
  <div class="hello">
    <button v-on:click="sendData()">SEND POST REQUEST2</button>        <br/>
    <br/>
    <pre>{{response}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        response: process.env.TEST
      }
    },
    methods: {
      sendData() {
        // eslint-disable-next-line no-console
        console.log('SEND');
        this.$http.post("https://globo.ship.opencontent.io", {
          "name":"getPersonaREST",
          "parameters":{
            "codiceFiscale":"BDARYN15E01L378M",
            "contesto":"GLOBO",
            "listaAut":"PGLOBO"},
          "account":"BDARYN15E01L378M"
        }, { headers: { "content-type": "application/json"} }).then(result => {
          this.response = result.body;
        }, error => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
</style>
