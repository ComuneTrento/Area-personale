<template>
    <div>
        <h1 class="section-background-header">Anagrafica</h1>
        <div v-if="!errorMessage && !response" class="col-6 col-lg-3">
            <div class="progress-spinner progress-spinner-active">
                <span class="sr-only">Caricamento...</span>
            </div>
        </div>
        <div v-if="errorMessage" class="alert alert-warning" role="alert">{{errorMessage}}</div>
        <div v-if="response">
            <ul>
                <li>Nome: {{response.nome}} {{response.cognome}}</li>
                <li>Nato il {{response.datanascita}} a {{response.comuneNascita}}</li>
                <li>Codice Fiscale: {{response.codiceFiscale}}</li>
                <li>
                    Indirizzo: {{response.indirizzo}} {{response.numeroCivico}}{{response.barra}}
                    {{response.cap}} {{response.citta}} ({{response.provincia}})
                </li>
                <li>Stato: {{response.stato}} - {{response.nazione}}</li>
                <li v-if="response.sesso === 'M'">Nazionalità: {{response.nazionalita_maschile}}</li>
                <li v-else>Nazionalità: {{response.nazionalita_femminile}}</li>
                <li v-if="response.email">Email: {{response.email}}</li>
                <li>Matricola: {{response.matricola}}</li>
            </ul>

            <h6>Famiglia - {{response.codiceFamiglia}}</h6>
            <ul>
                <li>Dimensione nucleo familiare: {{response.numeroPersoneFamiglia}}</li>
                <li v-if="response.grado_descrizione === 'FIGLIO' || response.grado_descrizione === 'FIGLIA'">Padre: {{response.padre}}</li>
                <li v-if="response.grado_descrizione === 'FIGLIO' || response.grado_descrizione === 'FIGLIA'">Madre: {{response.madre}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Anagrafica',
    data() {
      return {
        response: null,
        errorMessage: null,
      };
    },
    methods: {
      getPersonaREST() {
        // eslint-disable-next-line no-console
        this.$http.post('https://globo.ship.opencontent.io', {
          "name":"getPersonaREST",
          "parameters":{
            "codiceFiscale":this.$route.params.id,
            "contesto":"GLOBO",
            "listaAut":"PGLOBO"},
          "account":this.$route.params.id
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
      this.getPersonaREST();
    },
    watch: {
      '$route.params.id': function (id) {
        this.errorMessage = '';
        this.response = '';
        this.$http.post('https://globo.ship.opencontent.io', {
          "name":"getPersonaREST",
          "parameters":{
            "codiceFiscale":id,
            "contesto":"GLOBO",
            "listaAut":"PGLOBO"},
          "account": id
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK')
            this.response = result.body.results;
          else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
