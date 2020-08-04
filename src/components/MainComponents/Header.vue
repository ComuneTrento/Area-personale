<template>
    <header class="it-header-wrapper it-header-sticky">
        <div class="it-header-slim-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="it-header-slim-wrapper-content">
                            <a class="d-lg-block navbar-brand" v-bind:href="comune.links.provincia">{{$t('provincia')}}</a>
                            <div class="header-slim-right-zone">
                                <div class="nav-item dropdown">
                                    <a aria-expanded="false" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                       href="#">
                                        <span v-if="$i18n.locale === 'it'">ITA</span>
                                        <span v-else-if="$i18n.locale === 'en'">ENG</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul v-for="(locale, index) in locales" v-bind:key="index"
                                                        class="link-list">
                                                        <li>
                                                            <a class="list-item" href="#" @click="$i18n.locale=locale.locale"><span>{{locale.nome}}</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- logged -->
                                <div v-if="$store.getters.account" class="it-user-wrapper nav-item dropdown">
                                    <a aria-expanded="false" class="btn btn-primary btn-icon btn-full"
                                       data-toggle="dropdown" href="#">
                                        <span class="rounded-icon">
                                            <svg class="icon icon-danger m-0">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                            </svg>
                                        </span>
                                        <span class="d-none d-lg-block">{{ $store.getters.completeName}}</span>
                                        <svg class="icon icon-white d-none d-lg-block">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu" x-placement="bottom-start"
                                         style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-108px, 41px, 0px);">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li>
                                                            <router-link v-bind:to="'/personal/pratiche'" class="list-item">
                                                                <span>{{$t('le_mie_pratiche')}}</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'/personal/payments'" class="list-item">
                                                                <span>{{$t('pagamenti')}}</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'/personal/documents'" class="list-item">
                                                                <span>{{$t('documenti')}}</span></router-link>
                                                        </li>
                                                        <!--
                                                        <li>
                                                            <router-link v-bind:to="'/personal/messages'" class="list-item">
                                                                <span>{{$t('messaggi')}}</span></router-link>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'/personal/deadlines'" class="list-item">
                                                                <span>{{$t('scadenze')}}</span></router-link>
                                                        </li>
                                                        -->
                                                        <li>
                                                            <span class="divider"></span>
                                                        </li>
                                                        <li>
                                                            <router-link v-bind:to="'/profile'">
                                                                <span>{{$t('profilo')}}</span>
                                                            </router-link>
                                                        </li>
                                                        <li>
                                                            <a class="list-item" href="#" @click="logout()"><span>{{$t('logout')}}
                                                                <svg class="icon icon-primary icon-sm left">
                                                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                                                                </svg></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- not logged -->
                                <router-link v-else v-bind:to="'/login'" class="btn btn-primary btn-icon btn-full"><span
                                        class="rounded-icon">
                                            <svg class="icon icon-primary"><use
                                                    xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                            </svg>
                                        </span>
                                    <span class="d-none d-lg-block">{{$t('accedi_area_personale')}}</span></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="it-nav-wrapper">
            <div class="it-header-center-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="it-header-center-content-wrapper">
                                <div class="it-brand-wrapper">
                                    <a v-bind:href="comune.links.comune">
                                        <img class="icon" src="Comune-di-Trento_header_logo.png">
                                        <div class="it-brand-text">
                                            <h2 class="no_toc">{{$t('comune')}}</h2>
                                            <h3 class="no_toc d-none d-md-block">{{$t('area_personale.titolo')}}</h3>
                                        </div>
                                    </a>
                                </div>
                                <div class="it-right-zone">
                                    <div class="it-socials d-none d-md-flex">
                                        <span>{{$t('seguici_su')}}</span>
                                        <ul>
                                            <li v-if="comune.links.sezione_seguici.designers_italia">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.designers_italia"
                                                   target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-designers-italia"></use>
                                                    </svg>
                                                    <span class="sr-only">Designers Italia</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.twitter">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.twitter" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-twitter"></use>
                                                    </svg>
                                                    <span class="sr-only">Twitter</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.facebook">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.facebook" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-facebook"></use>
                                                    </svg>
                                                    <span class="sr-only">Facebook</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.instagram">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.instagram" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-instagram"></use>
                                                    </svg>
                                                    <span class="sr-only">Instagram</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.linkedin">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.linkedin" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-linkedin"></use>
                                                    </svg>
                                                    <span class="sr-only">Linkedin</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.youtube">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.youtube" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-youtube"></use>
                                                    </svg>
                                                    <span class="sr-only">YouTube</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.medium">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.medium" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-medium"></use>
                                                    </svg>
                                                    <span class="sr-only">Medium</span></a>
                                            </li>
                                            <li v-if="comune.links.sezione_seguici.behance">
                                                <a class="p-2 text-white"
                                                   v-bind:href="comune.links.sezione_seguici.behance" target="_blank">
                                                    <svg class="icon icon-sm icon-white align-top">
                                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-behance"></use>
                                                    </svg>
                                                    <span class="sr-only">Behance</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="it-search-wrapper">
                                        <span class="d-none d-md-block">{{$t('cerca')}}</span>
                                        <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                                            <svg class="icon">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
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
                            <nav class="navbar navbar-expand-lg has-megamenu">
                                <button aria-controls="nav10" aria-expanded="false" aria-label="Toggle navigation"
                                        class="custom-navbar-toggler" data-target="#nav10" type="button">
                                    <svg class="icon">
                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-burger"></use>
                                    </svg>
                                </button>
                                <div class="navbar-collapsable" id="nav10">
                                    <div class="overlay"></div>
                                    <div class="close-div sr-only">
                                        <button class="btn close-menu" type="button">
                                            <span class="it-close"></span>close
                                        </button>
                                    </div>
                                    <div class="menu-wrapper">
                                        <ul class="navbar-nav">
                                            <li class="nav-item ">
                                                <a class="nav-link" v-bind:href="comune.links.sezione_amministrazione.amministrazione">
                                                    <span>{{$t('amministrazione')}}</span></a>
                                            </li>
                                            <li class="nav-item ">
                                                <a class="nav-link"
                                                   v-bind:href="comune.links.sezione_novita.novita"><span>{{$t('novita')}}</span>
                                                </a>
                                            </li>
                                            <li class="nav-item ">
                                                <a class="nav-link"
                                                   v-bind:href="comune.links.sezione_servizi.servizi"><span>{{$t('servizi')}}</span>
                                                </a>
                                            </li>
                                            <li class="nav-item active">
                                                <a class="nav-link"
                                                   v-bind:href="comune.links.sezione_documenti.documenti"><span>{{$t('documenti')}}</span></a>
                                            </li>
                                        </ul>
                                        <ul class="navbar-nav navbar-secondary">
                                            <li class="nav-item ">
                                                <a class="nav-link "
                                                   v-bind:href="comune.links.abitazione">
                                                    {{$t('abitazione')}}</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"
                                                   v-bind:href="comune.links.istruzione">
                                                    {{$t('istruzione')}}</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link"
                                                   v-bind:href="comune.links.procedure_elettorali_e_voto">
                                                    {{$t('procedura_elettorale_e_voto')}}</a>
                                            </li>
                                            <li class="nav-item ">
                                                <a class="nav-link" v-bind:href="comune.links.tutti_gli_argomenti">
                                                    <span class="font-weight-bold">{{$t('tutti_gli_argomenti')}}</span>
                                                </a>
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
    </header>

</template>


<script>
  import {app} from '../../main.js';

  export default {
    name: 'Header',
    data() {
      return {
        comune: this.$store.getters.comune,
        locales: this.$store.getters.locales,
      };
    },
    methods: {
      setLocale: function (locale) {
        this.$i18n = locale;
      },
        logout() {
            window.location.href = "https://area-personale.comune.trento.it/spid-auth/Logout";
        },
    },
    created() {
      // Using the server bus
      app.$on('loginEvent', (user) => {
        this.user = user;
      });
    },
  };
</script>

<style scoped>
    .dropdown-menu a {
        width: 400%;
    }
</style>
