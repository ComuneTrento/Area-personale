<template>
    <div>
        <h1 class="section-background-header">Domanda attiva</h1>
        <div v-if="!errorMessage && !response" class="col-6 col-lg-3">
            <div class="progress-spinner progress-spinner-active">
                <span class="sr-only">Caricamento...</span>
            </div>
        </div>
        <div v-if="errorMessage" class="alert alert-warning" role="alert">{{errorMessage}}</div>
        <div v-if="response">
            <ul>
                <li>Richiedente: {{response.richiedente}}</li>
                <li>Identificativo domanda: {{response.idDomanda}}</li>
                <li>Data Domanda: {{response.dtDomanda}}</li>
                <li>Protocollo: {{response.protocollo}}</li>
                <li>Tipo servizio: {{response.tipoServizio}}</li>
                <li>Tipo operazione: {{response.tipoOperazione}}</li>
                <li>Paternità: {{response.paternita}}</li>
                <li>Maternità: {{response.maternita}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DomandaAttiva',
    data() {
      return {
        response: '',
        errorMessage: '',
      };
    },
    methods: {
      getDomandaAttiva() {
        // eslint-disable-next-line no-console
        this.$http.post('https://area-personale.comune.trento.it/secure/globo', {
          'name': 'getDomandaAttiva',
          'parameters': {
            'codiceFiscale': 'BBAKVN02D21L378N',
            'tipoServizio': 'FT',
          },
          'account': 'BDARYN15E01L378M',
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK')
            this.response = result.body.results;
          else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
    },
    beforeMount() {
      this.getDomandaAttiva();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
