<template>
    <div v-if="response">
        <h6>Anagrafica:</h6>
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

        <h6>Famiglia</h6>
        <ul>
            <li>Dimensione nucleo familiare: {{response.numeroPersoneFamiglia}}</li>
            <li v-if="response.grado_descrizione === 'FIGLIO'">Padre: {{response.padre}}</li>
            <li v-if="response.grado_descrizione === 'FIGLIO'">Madre: {{response.madre}}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Globo',
    data() {
      return {
        response: null,
      };
    },
    methods: {
      getPersona() {
        // eslint-disable-next-line no-console
        console.log('SEND');
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getPersonaREST',
          'parameters': {
            'codiceFiscale': 'BDARYN15E01L378M',
            'contesto': 'GLOBO',
            'listaAut': 'PGLOBO',
          },
          'account': 'BDARYN15E01L378M',
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA==' }}).then(result => {
          this.response = result.body.results;
        }, error => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
      },
    },
    beforeMount() {
      this.getPersona();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
