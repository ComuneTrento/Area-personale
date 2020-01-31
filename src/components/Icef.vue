<template>
    <div>
        <h1 class="section-background-header">Icef</h1>
        <div v-if="!errorMessage && !response" class="col-6 col-lg-3">
            <div class="progress-spinner progress-spinner-active">
                <span class="sr-only">Caricamento...</span>
            </div>
        </div>
        <div v-if="errorMessage" class="alert alert-warning" role="alert">{{errorMessage}}</div>
        <div v-if="response">
            <pre>{{response}}</pre>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Icef',
    data() {
      return {
        response: '',
        errorMessage: '',
      };
    },
    methods: {
      getIcef() {

        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getIcef',
          'parameters': {
            'codiceFiscale': 'MJSKNS15C26L378C',
          },
          'account': 'STZSLY79A59Z604U',
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.status === 'OK')
            this.response = result.body.results;
          else
            this.errorMessage = result.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida' + error;
        });
      },
    },
    beforeMount() {
      this.getIcef();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
