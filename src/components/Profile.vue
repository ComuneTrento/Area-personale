<template>
    <div class="bd-example-tabs mt-5">
        <div class="row">
            <div class="col-0 col-md-4 col-lg-3">
                <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab-ico" role="tablist"
                     aria-orientation="vertical">
                    <a class="nav-link active" id="nav-vertical-tab-ico1-tab" data-toggle="tab"
                       href="#nav-vertical-tab-ico1" role="tab" aria-controls="nav-vertical-tab-ico1"
                       aria-selected="true">I tuoi dati
                        <svg class="icon icon-primary">
                            <use xlink:href="../assets/dist/svg/sprite.svg#it-user"></use>
                        </svg>
                    </a>
                    <a class="nav-link" id="nav-vertical-tab-ico2-tab" data-toggle="tab" href="#nav-vertical-tab-ico2"
                       role="tab" aria-controls="nav-vertical-tab-ico2" aria-selected="false">La tua famiglia
                        <svg class="icon icon-primary">
                            <use xlink:href="../assets/dist/svg/sprite.svg#it-list"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9">
                <div class="tab-content" id="nav-vertical-tab-icoContent">
                    <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-ico1" role="tabpanel"
                         aria-labelledby="nav-vertical-tab-ico1-tab">
                        <div v-if="!errorMessage && !userData" class="col-6 col-lg-3">
                            <div class="progress-spinner progress-spinner-active">
                                <span class="sr-only">Caricamento...</span>
                            </div>
                        </div>
                        <div v-if="userData">
                            <h4>{{userData.nome}} {{userData.cognome}}</h4>
                            <p class="mt-3">Nato/a il {{userData.datanascita}} a {{userData.comuneNascita}}</p>
                            <p class="mt-3">Codice Fiscale: {{userData.codiceFiscale}}</p>
                            <p class="mt-3">Residente in {{userData.indirizzo}} {{userData.numeroCivico}}{{userData.barra}}</p>
                            <p class="mt-3">{{userData.cap}} {{userData.citta}} ({{userData.provincia}})</p>
                            <p class="mt-3" v-if="userData.sesso === 'M'">Nazionalità: {{userData.nazionalita_maschile}}</p>
                            <p class="mt-3" v-else>Nazionalità: {{userData.nazionalita}}</p>
                            <p class="mt-3" v-if="userData.email">Indirizzo email: {{userData.email}}</p>
                        </div>
                    </div>
                    <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico2" role="tabpanel"
                         aria-labelledby="nav-vertical-tab-ico2-tab">
                        <div v-if="!errorMessage && familyList.length === 0" class="col-6 col-lg-3">
                            <div class="progress-spinner progress-spinner-active">
                                <span class="sr-only">Caricamento...</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
                                <div v-for="(familyMember, index) in familyList" v-bind:key="index" class="card card-teaser no-after rounded shadow">
                                    <div class="card-body pb-5">
                                        <div class="category-top">
                                            <svg class="icon">
                                                <use xlink:href="../assets/dist/svg/sprite.svg#it-user"></use>
                                            </svg>
                                            <span class="category">{{familyMember.nome}} {{familyMember.cognome}}</span>
                                        </div>
                                        <div class="card-text">
                                            <p>Nato/a il {{familyMember.datanascita}} a {{familyMember.comuneNascita}}</p>
                                            <p>Codice Fiscale: {{familyMember.codiceFiscale}}</p>
                                            <p>Residente in {{familyMember.indirizzo}} {{familyMember.numeroCivico}}{{familyMember.barra}}</p>
                                            <p>{{familyMember.cap}} {{familyMember.citta}} ({{familyMember.provincia}})</p>
                                            <p v-if="familyMember.sesso === 'M'">Nazionalità: {{familyMember.nazionalita_maschile}}</p>
                                            <p v-else>Nazionalità: {{familyMember.nazionalita}}</p>
                                            <p v-if="familyMember.email">Indirizzo email: {{familyMember.email}}</p>
                                        </div>
                                        <a class="read-more" href="#">
                                            <div class="float-right">
                                                <svg class="icon">
                                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-flag"></use>
                                                </svg>
                                                <span class="text">{{familyMember.grado_descrizione}}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        fiscalCode: 'ZNLDLA14P53L378G',
        userData: null,
        errorMessage: null,
        familyList: [],
      };
    },
    methods: {
      getPersonaREST(fiscalCode, user) {
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getPersonaREST',
          'parameters': {
            'codiceFiscale': fiscalCode,
            'contesto': 'GLOBO',
            'listaAut': 'PGLOBO',
          },
          'account': this.fiscalCode,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK') {
            if (user) {
              this.userData = result.body.results;
              this.getListaFamigliaREST();
            } else {
              this.familyList.push(result.body.results)
            }

          } else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
      getListaFamigliaREST() {
        // eslint-disable-next-line no-console
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaFamigliaREST',
          'parameters': {
            'codiceFamiglia': this.userData.codiceFamiglia,
          },
          'account': this.fiscalCode,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK') {
            Object.keys(result.body.results.listaCodiceFiscale).forEach((familyMember) => {
              // eslint-disable-next-line no-console
              this.getPersonaREST(familyMember, false);
            });
          } else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida' + error;
        });
      },
    },
    beforeMount() {
      this.getPersonaREST(this.fiscalCode, true);
    }
  };
</script>

<style scoped>

</style>
