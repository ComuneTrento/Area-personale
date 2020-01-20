<template>
    <div>
        <h1 class="section-background-header">Nidi disponibili</h1>
        <div v-if="!errorMessage && !response" class="col-6 col-lg-3">
            <div class="progress-spinner progress-spinner-active">
                <span class="sr-only">Caricamento...</span>
            </div>
        </div>
        <div v-if="errorMessage" class="alert alert-warning" role="alert">{{errorMessage}}</div>
        <div v-if="response">
            <ul id="example-2">
                <li v-for="(value, key ) in response.listaNidiDisponibili3" v-bind:key="key">
                    {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NidiDisponibili',
    data() {
      return {
        response: '',
        options: [],
        errorMessage: '',
      };
    },
    methods: {
      getListaNidiDisponibili() {
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaNidiDisponibili',
          'parameters': {
            'codiceVia': '10',
            'numeroCivico': '6',
            'barraCivico': '2',
            'numeroDomanda': '2028363',
            'tipoServizio': 'FT',
            'listaCompleta': 'LISTA',
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
      this.getListaNidiDisponibili();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
