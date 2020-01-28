<template>
    <div class="it-header-wrapper">
        <div class="it-header-slim-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="it-header-slim-wrapper-content">
                            <a class="d-lg-block navbar-brand" href="#">Provincia Autonoma di Trento</a>
                            <div class="header-slim-right-zone">
                                <div class="nav-item dropdown">
                                    <a aria-expanded="false" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        <span>ITA</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="../assets/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li>
                                                            <a class="list-item" href="#"><span>ITA</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>ENG</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- logged -->
                                <div v-if="user" class="it-user-wrapper nav-item dropdown">
                                    <a aria-expanded="false" class="btn btn-primary btn-icon btn-full" data-toggle="dropdown" href="#">
                                        <span class="rounded-icon">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe-PSAektDgBsXLsdybQW6F1wGDdpw2mbm3SaReRPuQ0ec0ns&s" width="20 px" class="border rounded-circle icon-white" alt="Mario Rossi">
                                        </span>
                                        <span class="d-none d-lg-block">{{user.nome}} {{user.cognome}}</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="../assets/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-108px, 41px, 0px);">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li>
                                                            <a class="list-item" href="#"><span>Recenti</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>Le mie pratiche</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>Pagamenti</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>Documenti</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#"><span>Messaggi</span></a>
                                                        </li>
                                                        <li>
                                                            <span class="divider"></span>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'profile'"><span>Profilo</span></router-link>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#" @click="login()"><span>Logout
                                                                <svg class="icon icon-primary icon-sm left">
                                                                    <use xlink:href="../assets/dist/svg/sprite.svg#it-arrow-right"></use>
                                                                </svg></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- not logged -->
                                <a v-else class="btn btn-primary btn-icon btn-full" href="#" title="Accedi all'area personale" @click="login()">
                                        <span class="rounded-icon">
                                            <svg class="icon icon-primary"><use xlink:href="../assets/dist/svg/sprite.svg#it-user"></use></svg>
                                        </span>
                                    <span class="d-none d-lg-block">Accedi all'area personale</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        <div class="it-nav-wrapper">
            <div class="it-header-center-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="it-header-center-content-wrapper">
                                <div class="it-brand-wrapper">
                                    <a href="#">
                                        <svg class="icon">
                                            <use xlink:href="../assets/svg/sprite.svg#it-code-circle"></use>
                                        </svg>
                                        <div class="it-brand-text">
                                            <h2 class="no_toc">Comune di Trento</h2>
                                            <h3 class="no_toc d-none d-md-block">Area personale</h3>
                                        </div>
                                    </a>
                                </div>
                                <div class="it-right-zone">
                                    <div class="it-socials d-none d-md-flex">
                                        <span>Seguici su</span>
                                        <ul>
                                            <li>
                                                <a href="#" aria-label="Facebook" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-facebook"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Github" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-github"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Twitter" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="/../assets/svg/sprite.svg#it-twitter"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="it-search-wrapper">
                                        <span class="d-none d-md-block">Cerca</span>
                                        <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                                            <svg class="icon">
                                                <use xlink:href="../assets/svg/sprite.svg#it-search"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="it-header-navbar-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!--start nav-->
                            <nav class="navbar navbar-expand-lg has-megamenu">
                                <button class="custom-navbar-toggler" type="button" aria-controls="nav02"
                                        aria-expanded="false" aria-label="Toggle navigation" data-target="#nav02">
                                    <svg class="icon">
                                        <use xlink:href="../assets/svg/sprite.svg#it-burger"></use>
                                    </svg>
                                </button>
                                <div class="navbar-collapsable" id="nav02" style="display: none;">
                                    <div class="overlay" style="display: none;"></div>
                                    <div class="close-div sr-only">
                                        <button class="btn close-menu" type="button"><span class="it-close"></span>close
                                        </button>
                                    </div>
                                    <div class="menu-wrapper">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                                   aria-expanded="false">
                                                    <span>Anagrafica</span>
                                                    <svg class="icon icon-xs">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                                    </svg>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <div class="link-list-wrapper">
                                                        <ul class="link-list">
                                                            <li>
                                                                <h3 class="no_toc">Persone</h3>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/ZNLDLA14P53L378G" replace>
                                                                    <span>ADELE ZANELLA </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/BDARYN15E01L378M" replace>
                                                                    <span>RAYEN ABAIDI </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/RCCMRC01T13L378B" replace>
                                                                    <span>MIRCO RICCARDI </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/BBAKVN02D21L378N" replace>
                                                                    <span>KELVIN KYEI NIMARKO ABABIO </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/RCCCST72L09A952" replace>
                                                                    <span>Errore </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                                   aria-expanded="false">
                                                    <span>Famiglia</span>
                                                    <svg class="icon icon-xs">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                                    </svg>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <div class="link-list-wrapper">
                                                        <ul class="link-list">
                                                            <li>
                                                                <h3 class="no_toc">Persone</h3>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/2028363" replace><span>RAYEN ABAIDI </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/110995" replace><span>CRISTIAN RICCARDI </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/2013284" replace><span>KELVIN KYEI NIMARKO ABABIO </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/2023056" replace><span>KEVIN SNAJDER MEJIA ASTAIZA </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/123" replace>
                                                                    <span>Errore </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/domanda"><span>Domanda Attiva </span><span
                                                        class="sr-only">current</span></router-link>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/nidi">
                                                    <span>Nidi Disponibili </span><span class="sr-only">current</span>
                                                </router-link>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/icef"><span>Icef </span><span
                                                        class="sr-only">current</span></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import { app } from '../main.js';
  export default {
    name: 'Header',
    props: {
      items: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        user: this.user
      }
    },
    created() {
      // Using the server bus
      app.$on('loginEvent', (user) => {
        this.user = user;
      });
    },
    methods: {
      login: function() {
        if (this.user) this.user = null;
        else this.user = {
          "nome": "ADELE",
          "cognome": "ZANELLA",
          "datanascita": "13/09/2014",
          "sesso": "F",
          "nazione": "I",
          "nazionalita": "ITALIANA",
          "nazionalita_maschile": "ITALIANO",
          "stato": "ITALIA",
          "provincia": "TN",
          "citta": "TRENTO",
          "cap": "38100",
          "localita": "TRENTO",
          "codiceVia": "7775",
          "indirizzo": "VIA DELLE CESE LONGHE",
          "numeroCivico": "7",
          "barra": "",
          "email": "",
          "codiceFiscale": "ZNLDLA14P53L378G",
          "codiceFamiglia": "2001370",
          "numeroPersoneFamiglia": "4",
          "codiceComuneNascita": "22205",
          "comuneNascita": "TRENTO",
          "madre": "CERANELLI ALESSANDRA",
          "padre": "ZANELLA NICOLA",
          "grado": "3",
          "grado_descrizione": "FIGLIA",
          "matricola": "2059671"
        };
        app.$emit('loginEvent', this.user);
      }
    }
  };
</script>

<style scoped>
 .dropdown-menu a {
        width: 400%;
 }
</style>
