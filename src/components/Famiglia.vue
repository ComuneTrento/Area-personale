<template>
    <div>
        <h1 class="section-background-header">Famiglia</h1>
        <div v-if="errorMessage" class="alert alert-warning" role="alert">{{errorMessage}}</div>
        <div v-if="response">
            <ul id="example-2">
                <li v-for="(item, index) in response.listaCodiceFiscale" v-bind:key="index">
                    <b>{{ item }}</b> ({{ index }})
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Famiglia',
    data() {
      return {
        response: '',
        errorMessage: '',
      };
    },
    methods: {
      getListaFamigliaREST() {
        // eslint-disable-next-line no-console
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaFamigliaREST',
          'parameters': {
            'codiceFamiglia': '2028363',

          },
          'account': 'BDARYN15E01L378M',
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK')
            this.response = result.body.results;
          else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida' + error;
        });
      },
    },
    beforeMount() {
      this.getListaFamigliaREST();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
