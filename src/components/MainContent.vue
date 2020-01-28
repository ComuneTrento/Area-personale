<template>
    <main style="padding-top: 0px;">
        <section v-if="user" id="area-riservata">
            <div class="section section-background-header section-user-header py-5">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2 position-static">
                            <h4 v-if="user.sesso === 'M'" class="text-center">Bentornato {{user.nome}}
                                {{user.cognome}}!</h4>
                            <h4 v-else class="text-center">Bentornata {{user.nome | camelcase}} {{user.cognome | camelcase}}!</h4>
                            <div class="row mr-xl-2 user-settings">
                                <div class="col-12 col-sm-6 offset-sm-3 col-md-12 offset-md-0 d-none d-sm-block">
                                    <div class="d-flex justify-content-center">
                                        <div class="pr-4">
                                            <router-link v-bind:to="'profile'"><span>Profilo</span>
                                                <svg class="icon icon-primary icon-xs right">
                                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-settings"></use>
                                                </svg>
                                            </router-link>
                                        </div>
                                        <div class="pl-4">
                                            <a href="#" @click="login()">
                                                <span>Logout</span>
                                                <svg class="icon icon-primary icon-xs right">
                                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-tabs-hidescroll mt-4 mt-md-5 d-none d-sm-block">
                                <ul class="nav nav-tabs auto no-border no-background" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link text-primary active" id="tab1-tab" data-toggle="tab" href="#"
                                           role="tab" aria-controls="tab1" aria-selected="true">Le mie pratiche</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" id="tab2-tab" data-toggle="tab" href="#"
                                           role="tab" aria-controls="tab2" aria-selected="false">Pagamenti</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" id="tab3-tab" data-toggle="tab" href="#"
                                           role="tab" aria-controls="tab3" aria-selected="false">Documenti</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" id="tab4-tab" data-toggle="tab" href="#"
                                           role="tab" aria-controls="tab4" aria-selected="false">Messaggi</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" id="tab5-tab" data-toggle="tab" href="#"
                                           role="tab" aria-controls="tab5" aria-selected="false">Scadenze</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <router-view></router-view>
                    <!-- Desktop content -->
                    <div class="mt-4 mt-md-5 d-none d-sm-block"></div>
                    <!-- Mobile cards -->
                    <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4 d-block d-sm-none mt-4 mt-md-5">
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-mail"></use>
                                </svg>
                                <h4 class="card-title">
                                    Messaggi
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>
                                        Messaggi e notifiche dal Comune sullo stato delle tue pratiche
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-horn"></use>
                                </svg>
                                <h4 class="card-title">Scadenze</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>date da ricordare e scadenze relative ai servizi comunali</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-folder"></use>
                                </svg>
                                <h4 class="card-title">Le mie pratiche</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>tutti i servizi che hai richiesto o attivato presso questo Ente</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-file"></use>
                                </svg>
                                <h4 class="card-title">I miei documenti</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>certificati e documenti rilasciati dall'Ente raccolti in modo comodo e facilmente
                                        consultabile</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-card"></use>
                                </svg>
                                <h4 class="card-title">I miei pagamenti</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>tutti i pagamenti su pagoPa verso questo Ente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Ulteriori informazioni -->
                <article id="ulteriori-informazioni" class="it-page-section anchor-offset mt-4 mt-md-5">
                    <h4>Ulteriori informazioni</h4>
                    <div class="callout">
                        <div class="callout-title">
                            <svg class="icon">
                                <use xlink:href="../assets/dist/svg/sprite.svg#it-info-circle"></use>
                            </svg>
                        </div>
                        <p>
                            La pubblicazione dell'avviso riguardante le nuove iscrizioni per
                            l'anno scolastico 2019/2020 è prevista per il mese di aprile 2019.
                        </p>
                        <p>
                            Contatta il Comune per avere ulteriori informazioni attraverso il
                            servizio di assistenza telefonica.
                        </p>
                        <h6>Numero Verde: 800 800 800</h6>
                        <h6><a href="#">Ufficio Relazioni con il Pubblico</a></h6>
                    </div>
                </article>
            </div>
        </section>
        <section v-else>
            <Homepage></Homepage>
        </section>
    </main>
</template>

<script>
  import {app} from '../main';
  import Homepage from './Homepage';

  export default {
    name: 'MainComponent',
    components: {Homepage},
    props: {
      items: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        user: this.user,
      };
    },
    created() {
      // Using the server bus
      app.$on('loginEvent', (user) => {
        this.user = user;
      });
    },
    methods: {
      login: function() {
        this.user = null;
        app.$emit('loginEvent', this.user);
      },
    },
  };
</script>

<style scoped>
    .card-header {
        border-bottom: none;
    }

    .section.section-background-header.section-user-header {
        background-color: white;
    }
</style>
