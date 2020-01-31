<template>
    <div>
        <div class="container px-4 my-4">
            <div class="row">
                <div class="col px-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/' }">Home</router-link>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: 'personal' }">Area Personale</router-link>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Profilo
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 px-lg-4 py-lg-2">
                    <h1>Profilo personale</h1>
                </div>
            </div>
            <div class="bd-example-tabs mt-5">
                <div class="row">
                    <div class="col-0 col-md-4 col-lg-3">
                        <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab-ico" role="tablist"
                             aria-orientation="vertical">
                            <a class="nav-link active" id="nav-vertical-tab-ico1-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico1" role="tab" aria-controls="nav-vertical-tab-ico1"
                               aria-selected="true">I miei dati
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                </svg>
                            </a>
                            <a class="nav-link" id="nav-vertical-tab-ico2-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico2"
                               role="tab" aria-controls="nav-vertical-tab-ico2" aria-selected="false">La mia famiglia
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-list"></use>
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
                                    <div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Data di nascita</b></span><span
                                                class="col-6">{{userData.datanascita}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Luogo di nascita</b></span><span
                                                class="col-6">{{userData.comuneNascita}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Codice fiscale</b></span><span class="col-6">{{userData.codiceFiscale}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Indirizzo di residenza</b></span><span
                                                class="col-6">{{userData.indirizzo}} {{userData.numeroCivico}}{{userData.barra}}<br>{{userData.cap}} - {{userData.citta}} ({{userData.provincia}})</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Nazionalità</b></span>
                                            <span v-if="userData.sesso === 'M'" class="col-6">{{userData.nazionalita_maschile}}</span>
                                            <span v-else class="col-6">{{userData.nazionalita}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>Indirizzo email</b></span>
                                            <span v-if="userData.email" class="col-6">{{userData.email}}</span>
                                            <span v-else class="col-6"> -- </span>
                                        </div>
                                    </div>

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
                                    <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-1">
                                        <div v-for="(familyMember, index) in familyList" v-bind:key="index"
                                             class="card card-teaser no-after rounded shadow">
                                            <div class="card-body pb-5">
                                                <div class="category-top">
                                                    <svg class="icon">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                                    </svg>
                                                    <span class="category">{{familyMember.nome}} {{familyMember.cognome}}</span>
                                                </div>
                                                <div class="card-text">
                                                    <div><p>Nato/a il {{familyMember.datanascita}} a
                                                        {{familyMember.comuneNascita}}</p>
                                                        <p>Codice Fiscale: {{familyMember.codiceFiscale}}</p>
                                                        <p>Residente in {{familyMember.indirizzo}}
                                                            {{familyMember.numeroCivico}}{{familyMember.barra}}</p>
                                                        <p>{{familyMember.cap}} {{familyMember.citta}}
                                                            ({{familyMember.provincia}})</p>
                                                        <p v-if="familyMember.sesso === 'M'">Nazionalità:
                                                            {{familyMember.nazionalita_maschile}}</p>
                                                        <p v-else>Nazionalità: {{familyMember.nazionalita}}</p>
                                                        <p v-if="familyMember.email">Indirizzo email:
                                                            {{familyMember.email}}</p></div>

                                                </div>
                                                <a class="read-more" href="#">
                                                    <div class="float-right">
                                                        <svg class="icon">
                                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-flag"></use>
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
        </div>
        <div class="section section-muted section-inset-shadow">
            <div class="section-content">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h3 class="text-center">Contenuti correlati</h3>
                        </div>
                    </div>
                    <div class="row mt-lg-4">
                        <div class="col">
                            <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4">
                                <div class="card card-teaser card-column shadow my-3 rounded">
                                    <div class="card-header">
                                        <svg class="icon">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use>
                                        </svg>
                                        <h5 class="card-title">
                                            Messaggi
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">
                                            <p>Messaggi e notifiche dal Comune sullo stato delle tue pratiche</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-teaser card-column shadow my-3 rounded">
                                    <div class="card-header">
                                        <svg class="icon">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-horn"></use>
                                        </svg>
                                        <h5 class="card-title">
                                            Scadenze
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">
                                            <p>Date da ricordare e scadenze relative ai servizi comunali</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-teaser card-column shadow my-3 rounded">
                                    <div class="card-header">
                                        <svg class="icon">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-folder"></use>
                                        </svg>
                                        <h5 class="card-title">Le mie pratiche</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">
                                            <p>tutti i servizi che hai richiesto o attivato presso questo Ente</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-teaser card-column shadow my-3 rounded">
                                    <div class="card-header">
                                        <svg class="icon">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                        </svg>
                                        <h5 class="card-title">I miei documenti</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">
                                            <p>certificati e documenti rilasciati dall'Ente raccolti in modo comodo e
                                                facilmente
                                                consultabile</p>
                                        </div>
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
        user: null,
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
          'account': this.user.fiscalCode,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK') {
            if (user) {
              this.userData = result.body.results;
              this.getListaFamigliaREST();
            } else {
              this.familyList.push(result.body.results);
            }
          } else
            this.errorMessage = result.body.message;
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
      getListaFamigliaREST() {
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getListaFamigliaREST',
          'parameters': {
            'codiceFamiglia': this.userData.codiceFamiglia,
          },
          'account': this.user.fiscalCode,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.body.status === 'OK') {
            Object.keys(result.body.results.listaCodiceFiscale).forEach((familyMember) => {
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
      this.user = this.$store.state.user;
      if (!this.user) {
        this.$router.push('login');
      } else {
        this.getPersonaREST(this.user.fiscalCode, true);
      }
    },
  };
</script>

<style scoped>
    .card-header {
        border-bottom: none;
    }
</style>
