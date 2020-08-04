<template>
    <div>
        <div class="container px-4 my-4">
            <div class="row">
                <div class="col px-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/' }">{{ $t('home') }}</router-link>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/personal/pratiche' }">{{
                                        $t('area_personale.titolo')
                                    }}
                                </router-link>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                {{ $t('profilo') }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 px-lg-4 py-lg-2">
                    <h1>{{ $t('area_personale.profilo.titolo') }}</h1>
                </div>
            </div>
            <div class="bd-example-tabs mt-5">
                <div class="row">
                    <div class="col-0 col-md-4 col-lg-3">
                        <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab-ico" role="tablist"
                             aria-orientation="vertical">
                            <a class="nav-link active" id="nav-vertical-tab-ico1-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico1" role="tab" aria-controls="nav-vertical-tab-ico1"
                               aria-selected="true">{{ $t('area_personale.profilo.i_miei_dati') }}
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                </svg>
                            </a>
                            <a class="nav-link" id="nav-vertical-tab-ico2-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico2"
                               role="tab" aria-controls="nav-vertical-tab-ico2"
                               aria-selected="false">{{ $t('area_personale.profilo.la_mia_famiglia') }}
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-list"></use>
                                </svg>
                            </a>
                            <a class="nav-link" id="nav-vertical-tab-ico3-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico3"
                               role="tab" aria-controls="nav-vertical-tab-ico3"
                               aria-selected="false">{{ $t('area_personale.profilo.icef') }}
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chart-line"></use>
                                </svg>
                            </a>
                            <a class="nav-link" id="nav-vertical-tab-ico4-tab" data-toggle="tab"
                               href="#nav-vertical-tab-ico4"
                               role="tab" aria-controls="nav-vertical-tab-ico4"
                               aria-selected="false">{{ $t('area_personale.profilo.iscrizione_alle_liste') }}
                                <svg class="icon icon-primary">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
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
                                        <span class="sr-only">{{ $t('caricamento') }}</span>
                                    </div>
                                </div>
                                <div v-if="errorMessage" class="col-auto">
                                    <div class="alert alert-warning">
                                        {{ errorMessage }}
                                    </div>
                                </div>
                                <div v-if="userData">
                                    <h4>{{ userData.nome }} {{ userData.cognome }}</h4>
                                    <div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.data_di_nascita')
                                                }}</b></span><span
                                            class="col-6">{{ userData.datanascita }}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.luogo_di_nascita')
                                                }}</b></span><span
                                            class="col-6">{{ userData.comuneNascita }}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.codice_fiscale')
                                                }}</b></span><span
                                            class="col-6">{{ userData.codiceFiscale }}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.residenza')
                                                }}</b></span><span
                                            class="col-6">{{ userData.indirizzo }} {{
                                                userData.numeroCivico
                                            }}{{ userData.barra }}<br>{{ userData.cap }} - {{
                                                userData.citta
                                            }} ({{ userData.provincia }})</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.nazionalita')
                                                }}</b></span>
                                            <span v-if="userData.sesso === 'M'"
                                                  class="col-6">{{ userData.nazionalita_maschile }}</span>
                                            <span v-else class="col-6">{{ userData.nazionalita }}</span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{ $t('area_personale.profilo.email') }}</b></span>
                                            <span v-if="userData.email" class="col-6">{{ userData.email }}</span>
                                            <span v-else-if="this.$store.getters.spidInfo.email_address" class="col-6"> {{ this.$store.getters.spidInfo.email_address }} </span>
                                            <span v-else class="col-6"> -- </span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.telefono')
                                                }}</b></span>
                                            <span v-if="this.$store.getters.spidInfo.phone_number"
                                                  class="col-6"> {{ this.$store.getters.spidInfo.phone_number }} </span>
                                            <span v-else class="col-6"> -- </span>
                                        </div>
                                        <div class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.cellulare')
                                                }}</b></span>
                                            <span v-if="this.$store.getters.spidInfo.cell_number"
                                                  class="col-6"> {{ this.$store.getters.spidInfo.cell_number }} </span>
                                            <span v-else class="col-6"> -- </span>
                                        </div>
                                        <div v-if="this.$store.getters.spidInfo.id_card" class="row">
                                            <span class="d-block col-6"><b>{{
                                                    $t('area_personale.profilo.carta_identita')
                                                }}</b></span>
                                            <span v-else class="col-6">{{ this.$store.getters.spidInfo.id_card }}</span>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico2" role="tabpanel"
                                 aria-labelledby="nav-vertical-tab-ico2-tab">
                                <!--h4>{{ $t('area_personale.profilo.nucleo_familiare') }}</h4-->
                                <div v-if="!familyMessage && familyList.length === 0" class="col-6 col-lg-3">
                                    <div class="progress-spinner progress-spinner-active">
                                        <span class="sr-only">{{ $t('caricamento') }}</span>
                                    </div>
                                </div>
                                <div v-else-if="familyMessage">
                                    <div class="alert alert-warning">
                                        {{ familyMessage }}
                                    </div>
                                </div>
                                <div v-else>
                                    <div
                                        class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-1">
                                        <div v-for="(familyMember, index) in familyList" v-bind:key="index"
                                             class="card card-teaser no-after rounded shadow">
                                            <div class="card-body pb-5">
                                                <div class="category-top">
                                                    <svg class="icon">
                                                        <use
                                                            xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-user"></use>
                                                    </svg>
                                                    <span class="category">{{
                                                            familyMember.nome
                                                        }} {{ familyMember.cognome }}</span>
                                                </div>
                                                <div class="card-text">
                                                    <div><p>{{ $t('area_personale.profilo.nato_il') }}
                                                        {{ familyMember.datanascita }}
                                                        {{ $t('area_personale.profilo.nato_a') }}
                                                        {{ familyMember.comuneNascita }}</p>
                                                        <p>{{ $t('area_personale.profilo.codice_fiscale') }}:
                                                            {{ familyMember.codiceFiscale }}</p>
                                                        <p>{{
                                                                $t('area_personale.profilo.residenza')
                                                            }}{{ familyMember.indirizzo }}
                                                            {{ familyMember.numeroCivico }}{{ familyMember.barra }}</p>
                                                        <p>{{ familyMember.cap }} {{ familyMember.citta }}
                                                            ({{ familyMember.provincia }})</p>
                                                        <p v-if="familyMember.sesso === 'M'">
                                                            {{ $t('area_personale.profilo.nazionalita') }}:
                                                            {{ familyMember.nazionalita_maschile }}</p>
                                                        <p v-else>{{ $t('area_personale.profilo.nazionalita') }}:
                                                            {{ familyMember.nazionalita }}</p>
                                                        <p v-if="familyMember.email">
                                                            {{ $t('area_personale.profilo.email') }}:
                                                            {{ familyMember.email }}</p></div>
                                                </div>
                                                <a class="read-more" href="#">
                                                    <div class="float-right">
                                                        <svg class="icon">
                                                            <use
                                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-flag"></use>
                                                        </svg>
                                                        <span class="text">{{ familyMember.grado_descrizione }}</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico3" role="tabpanel"
                                 aria-labelledby="nav-vertical-tab-ico3-tab">
                                <div v-if="!icefData && !icefMessage">
                                    <div class="progress-spinner progress-spinner-active">
                                        <span class="sr-only">{{ $t('caricamento') }}</span>
                                    </div>
                                </div>
                                <div v-else>
                                    <!--h4>{{ $t('area_personale.profilo.dichiarazione_icef') }}</h4-->
                                    <div v-if="icefMessage" class="alert alert-info">{{ icefMessage }}</div>
                                    <div v-if="icefData">
                                        <div>
                                            <div class="row">
                        <span
                            class="d-block col-6"><b>{{ $t('area-perosonale.profilo.codice_fiscale_richiedente') }}</b></span><span
                                                class="col-6">{{ icefData.codiceFiscaleRichiedente }}</span>
                                            </div>
                                            <div class="row">
                                                <span class="d-block col-6"><b>{{
                                                        $t('area-perosonale.profilo.dichiarazione_icef')
                                                    }}</b></span><span
                                                class="col-6">{{
                                                    icefData.nomeRichiedente
                                                }} {{ icefData.cognomeRichiedente }}</span>
                                            </div>
                                            <div class="row">
                                                <span class="d-block col-6"><b>{{
                                                        $t('area-perosonale.profilo.richiedente')
                                                    }}</b></span><span
                                                class="col-6">{{ icefData.coefficienteIcef }}</span>
                                            </div>
                                            <div class="row">
                                                <span class="d-block col-6"><b>{{
                                                        $t('area-perosonale.profilo.calcolato_il')
                                                    }}</b></span>
                                                <span class="col-6">{{ icefData.dataCalcolo }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico4" role="tabpanel"
                                 aria-labelledby="nav-vertical-tab-ico4-tab">
                                <!--h4>{{ $t('area_personale.profilo.iscrizione_alle_liste_seggi_elettorali') }}</h4-->
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
            userData: null,
            errorMessage: null,
            familyList: [],
            icefData: '',
            familyMessage: '',
            icefMessage: '',
        };
    },
    methods: {
        getPersonaREST(fiscalCode, user) {
            this.$http.post('https://area-personale.comune.trento.it/secure/globo/ComuneServices/rest/SrvGlobo/globoUrl', {
                'name': 'getPersonaREST',
                'parameters': {
                    'codiceFiscale': fiscalCode,
                    'contesto': 'GLOBO',
                    'listaAut': 'PGLOBO',
                },
                'account': this.$store.getters.account,
            }).then(result => {
                if (result.body.status === 'OK') {
                    if (user) {
                        this.userData = result.body.results;
                        this.getListaFamigliaREST();
                    } else {
                        this.familyList.push(result.body.results);
                    }
                } else {
                    this.errorMessage = result.body.message
                    this.familyMessage = this.$t('no_info')
                }
            }, () => {
                location.reload()
            });
        },
        getIcef(fiscalCode) {
            this.$http.post('https://area-personale.comune.trento.it/secure/globo/ComuneServices/rest/SrvGlobo/globoUrl', {
                'name': 'getIcef',
                'parameters': {
                    'codiceFiscale': fiscalCode,
                },
                'account': this.$store.getters.account,
            }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
                var parsedResult = JSON.parse(result.bodyText.replace(`"{`, "{").replace(`}"`, "}"));
                if (parsedResult.status === 'OK') {
                    this.icefData = parsedResult.results;
                } else
                    this.icefMessage = parsedResult.message.message;
            }, () => {
                location.reload()
            });
        },
        getListaFamigliaREST() {
            this.$http.post('https://area-personale.comune.trento.it/secure/globo/ComuneServices/rest/SrvGlobo/globoUrl', {
                'name': 'getListaFamigliaREST',
                'parameters': {
                    'codiceFamiglia': this.userData.codiceFamiglia,
                },
                'account': this.$store.getters.account,
            }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
                if (result.body.status === 'OK') {
                    Object.keys(result.body.results.listaCodiceFiscale).forEach((familyMember) => {
                        this.getPersonaREST(familyMember, false);
                    });
                } else {
                    this.familyMessage = result.body.message;
                }
            }, () => {
                location.reload()
            });
        },
    },
    beforeMount() {
        this.getPersonaREST(this.$store.getters.account, true);
        this.getIcef(this.$store.getters.account);
    },
};
</script>

<style scoped>

</style>
