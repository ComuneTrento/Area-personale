<template>
    <div>
        <h1 class="section-background-header">Famiglia</h1>
        <div v-if="!errorMessage && !response" class="col-6 col-lg-3">
            <div class="progress-spinner progress-spinner-active">
                <span class="sr-only">Caricamento...</span>
            </div>
        </div>
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
        response: null,
        errorMessage: null,
        values: {
          '2028363': 'BDARYN15E01L378M',
          '110995': 'RCCCST72L09A952T',
          '2013284': 'BBAKVN02D21L378N',
          '2023056': 'MJSKNS15C26L378C',
          '1234567': 'BDARYN15E01L378M',
        }
      };
    },
    methods: {
      getListaFamigliaREST() {
        // eslint-disable-next-line no-console
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaFamigliaREST',
          'parameters': {
            'codiceFamiglia': this.$route.params.id,
          },
          'account': this.values[this.$route.params.id],
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
    watch: {
      '$route.params.id': function (id) {
        this.errorMessage = '';
        this.response = '';
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaFamigliaREST',
          'parameters': {
            'codiceFamiglia': id
          },
          'account': this.values[id],
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK')
            this.response = result.body.results;
          else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida' + error;
        });
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
