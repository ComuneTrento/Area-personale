<template>
    <section id="area-riservata">
        <div v-if="this.$store.getters.account" class="section section-background-header section-user-header py-5">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 position-static">
                        <div class="row mr-xl-2 user-settings d-none d-sm-block">
                            <div class="col-12 col-sm-6 offset-sm-3 col-md-12 offset-md-0">
                                <div class="d-flex justify-content-center">
                                    <div class="pr-4">
                                        <router-link v-bind:to="'/profile'" class="d-none d-lg-block">
                                            <span>{{$t('profilo')}}</span>
                                            <svg class="icon icon-primary icon-xs right">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-settings"></use>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="pl-4">
                                        <a href="#" @click="logout">
                                            <span>{{$t('logout')}}</span>
                                            <svg class="icon icon-primary icon-xs right">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- d-none d-sm-block d-md-none -->
                        <div class="nav-tabs-hidescroll mt-4 mt-md-5 d-none d-sm-block">
                            <ul class="nav nav-tabs auto no-border no-background" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <router-link
                                            to="pratiche" :class="currentPage.includes('/personal/pratiche') ? 'nav-link text-primary active' : 'nav-link text-primary'"
                                            id="pratiche-tab" data-toggle="tab"
                                            role="tab" aria-controls="tab1" aria-selected="true">
                                        {{$t('le_mie_pratiche')}}
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :class="currentPage.includes('/personal/payments') ? 'nav-link text-primary active' : 'nav-link text-primary'"
                                       id="pagamenti-tab" data-toggle="tab"
                                       to="payments"
                                       role="tab" aria-controls="tab2" aria-selected="false">{{$t('pagamenti')}}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :class="currentPage.includes('/personal/documents') ? 'nav-link text-primary active' : 'nav-link text-primary'"
                                       id="documenti-tab" data-toggle="tab"
                                       to="documents"
                                       role="tab" aria-controls="tab3" aria-selected="false">{{$t('documenti')}}</router-link>
                                </li>
                                <!--
                                <li class="nav-item">
                                    <router-link :class="currentPage.includes('/personal/messages') ? 'nav-link text-primary active' : 'nav-link text-primary'"
                                       to="messages"
                                       role="tab" aria-controls="tab4" aria-selected="false">{{$t('messaggi')}}</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :class="currentPage.includes('/personal/deadlines') ? 'nav-link text-primary active' : 'nav-link text-primary'"
                                       id="scadenze-tab" data-toggle="tab"
                                       to="deadlines"
                                       role="tab" aria-controls="tab5" aria-selected="false">{{$t('scadenze')}}</router-link>
                                </li>
                                -->
                            </ul>
                        </div>
                    </div>
                </div>
                <router-view></router-view>

                <div class="row d-none">
                    <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4 d-block d-sm-none mt-4 mt-md-5">
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use>
                                </svg>
                                <h4 class="card-title">
                                    {{$t('messaggi')}}
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{$t('area_personale.descrizione_messaggi')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-horn"></use>
                                </svg>
                                <h4 class="card-title">{{$t('scadenze')}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{$t('area_personale.descrizione_scadenze')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-folder"></use>
                                </svg>
                                <h4 class="card-title">{{$t('le_mie_pratiche')}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{$t('area_personale.descrizione_pratiche')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                </svg>
                                <h4 class="card-title">{{$t('area_personale.i_miei_documenti')}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{$t('area_personale.descrizione_documenti')}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-card"></use>
                                </svg>
                                <h4 class="card-title">{{$t('area_personale.i_miei_pagamenti')}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{$t('area_personale.descrizione_pagamenti')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'PersonalArea',
    data() {
      return {
        account: null,
        activeClass: 'active'
      };
    },
    computed: {
      currentPage() {
        return this.$route.path;
      }
    },
    beforeMount() {
      if (!this.$store.getters.account) {
        this.$router.push('/login');
      }
    },
    methods: {
      logout() {
          window.location.href = "https://area-personale.comune.trento.it/spid-auth/Logout";
      },
    },
  };
</script>

<style scoped>
</style>
