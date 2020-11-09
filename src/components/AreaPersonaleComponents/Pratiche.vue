<template>
    <div id="applications">
        <div class="row pt-md-5">
            <div class="col d-lg-inline-flex">
                <h2>{{ $t('le_mie_pratiche') }}</h2>
                <!--div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton-pratiche" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        {{ filters[currentFilter].name }}
                        <span class="badge badge-light">{{ applications.length }}</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-pratiche">
                        <a class="dropdown-item d-flex justify-content-between align-items-center" href="#"
                           @click="updateApplications('Tutti', $event)">
                            <span>{{ filters.Tutti.name }}</span>
                            <span class="badge badge-light">{{ filters.Tutti.num }}</span>
                        </a>
                        <a class="dropdown-item d-flex justify-content-between align-items-center" href="#"
                           @click="updateApplications('Propri', $event)">
                            <span>{{ filters.Propri.name }}</span>
                            <span class="badge badge-light">{{ filters.Propri.num }}</span>
                        </a>
                        <a class="dropdown-item d-flex justify-content-between align-items-center" href="#"
                           @click="updateApplications('DaAltri', $event)">
                            <span>{{ filters.DaAltri.name }}</span>
                            <span class="badge badge-light">{{ filters.DaAltri.num }}</span>
                        </a>
                        <a class="dropdown-item d-flex justify-content-between align-items-center" href="#"
                           @click="updateApplications('PerContoDiAltri', $event)">
                            <span>{{ filters.PerContoDiAltri.name }}</span>
                            <span class="badge badge-light">{{ filters.PerContoDiAltri.num }}</span>
                        </a>
                    </div>
                </div-->
            </div>
        </div>
        <div class="py-4">
            <div class="mb-5">
                <ul class="nav nav-tabs auto no-border no-background">
                    <li class="nav-item">
                        <a v-bind:class="[currentFilter === 'Tutti' ? 'active' : '', 'nav-link']" href="#"
                           @click="updateApplications('Tutti', $event)">
                            <span class="mr-2">{{ filters.Tutti.name }}</span>
                            <span class="badge badge-light">{{ filters.Tutti.num }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a v-bind:class="[currentFilter === 'Propri' ? 'active' : '', 'nav-link']" href="#"
                           @click="updateApplications('Propri', $event)">
                            <span class="mr-2">{{ filters.Propri.name }}</span>
                            <span class="badge badge-light">{{ filters.Propri.num }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a v-bind:class="[currentFilter === 'DaAltri' ? 'active' : '', 'nav-link']" href="#"
                           @click="updateApplications('DaAltri', $event)">
                            <span class="mr-2">{{ filters.DaAltri.name }}</span>
                            <span class="badge badge-light">{{ filters.DaAltri.num }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a v-bind:class="[currentFilter === 'PerContoDiAltri' ? 'active' : '', 'nav-link']" href="#"
                           @click="updateApplications('PerContoDiAltri', $event)">
                            <span class="mr-2">{{ filters.PerContoDiAltri.name }}</span>
                            <span class="badge badge-light">{{ filters.PerContoDiAltri.num }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="row d-none d-sm-block">
                <div class="col">
                    <div v-if="applications.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{ $t('caricamento') }}</span>
                        </div>
                    </div>
                    <div v-else-if="errorMessage" class="alert alert-info bg-white" role="alert">{{ errorMessage }}</div>
                    <div v-else-if="applications">
                        <div class="table-responsive mb-5 shadow">
                            <table class="table mb-0 bg-white">
                                <thead>
                                <tr>
                                    <th scope="col" @click="sort('oggettoIstanza')">
                                        <span>{{ $t('area_personale.pratiche.oggetto_istanza') }}</span>
                                        <svg v-if="currentSort === 'oggettoIstanza' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'tipoServizio' && currentSortDir==='asc'"
                                             class="icon icon-xs">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                        <span v-else>
                                        <svg class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                    <th scope="col" @click="sort('protocollo')">
                                        <span>{{ $t('area_personale.pratiche.protocollo') }}</span>
                                        <svg v-if="currentSort === 'protocollo' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'protocollo' && currentSortDir==='asc'"
                                             class="icon icon-xs">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                        <span v-else>
                                        <svg class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                    </th>
                                    <th scope="col">
                                        <span>{{ $t('area_personale.pratiche.data_protocollo') }}</span>
                                    </th>
                                    <th scope="col" @click="sort('statoAvanzamento')">
                                        <span>{{ $t('area_personale.pratiche.stato_avanzamento') }}</span>
                                        <svg v-if="currentSort === 'statoAvanzamento' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'statoAvanzamento' && currentSortDir==='asc'"
                                             class="icon icon-xs">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                        <span v-else>
                                        <svg class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                    </th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-if="applications.length === 0">
                                    <td colspan="4">
                                        <div class="text-center">{{ $t('no_data') }}</div>
                                    </td>
                                </tr>
                                <tr v-for="(application, index) in sortedApplications" v-bind:key="index">
                                    <td class="align-middle">{{ application['oggettoIstanza'] }}</td>
                                    <td class="align-middle" v-html="parseProtocol(application['protocollo'])"></td>
                                    <td class="align-middle">{{ application['dataProtocollo'] }}</td>
                                    <td class="align-middle">{{ application['statoAvanzamento'] }}</td>
                                    <td class="align-middle">
                                        <a v-bind:href="application['accesso']" target="_blank"
                                           class="btn btn-secondary btn-xs btn-icon"
                                           role="button" aria-disabled="true">
                                            <svg class="icon icon-white">
                                                <use
                                                    xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                            </svg>
                                            <span>{{ $t('area_personale.pratiche.accedi') }}</span>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col">
                                <nav class="pagination-wrapper justify-content-center"
                                     aria-label="Esempio di navigazione della pagina">
                                    <ul class="pagination">
                                        <li class="page-item" @click="prevPage($event)">
                                            <a class="page-link" href="#">
                                                <svg class="icon icon-primary">
                                                    <use
                                                        xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                                </svg>
                                                <span class="sr-only">{{ $t('pagina_precedente') }}</span>
                                            </a>
                                        </li>
                                        <li class="page-item" v-for="(index) in getNumPages()" v-bind:key="index"
                                            @click="getPage(index, $event)">
                                            <a v-if="currentPage === index" class="page-link" href="#"
                                               aria-current="page">{{ index }}</a>
                                            <a v-else class="page-link" href="#">{{ index }}</a>
                                        </li>
                                        <li class="page-item" @click="nextPage($event)">
                                            <a class="page-link" href="#applications">
                                                <span class="sr-only">{{ $t('pagina_successiva') }}</span>
                                                <svg class="icon icon-primary">
                                                    <use
                                                        xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-none">
                <div>
                    <div v-if="applications.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{ $t('caricamento') }}</span>
                        </div>
                    </div>
                    <div v-else-if="errorMessage" class="alert alert-info bg-white" role="alert">{{ errorMessage }}</div>
                    <div v-else-if="applications.length !== 0">
                        <div class="mb-4 float-right bootstrap-select-wrapper">
                            <label>{{ $t('order_by') }}</label>
                            <select title="Ordina risultati" @change="sort($event.target.value)">
                                <option value="tipoServizio">
                                    {{ $t('area_personale.pratiche.tipo_servizio') }}
                                </option>
                                <option value="protocollo">{{ $t('area_personale.pratiche.protocollo') }}</option>
                                <option value="statoAvanzamento">{{
                                        $t('area_personale.pratiche.stato_avanzamento')
                                    }}
                                </option>
                                <option value="tipoAttivazione">{{
                                        $t('area_personale.pratiche.tipo_attivazione')
                                    }}
                                </option>
                            </select>
                        </div>
                        <table id="applications_table" class="table border-bottom table-white shadow">
                            <tbody>
                            <div v-for="(application, index) in sortedApplications" v-bind:key="index">
                                <tr>
                                    <td class="align-middle">
                                        <svg class="icon">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                        </svg>
                                    </td>
                                    <td class="align-middle">
                                        <span class="text-wrap">{{ application['oggettoIstanza'] }}</span>
                                    </td>
                                    <td class="d-none d-none d-lg-table-cell">
                                    </td>
                                    <td class="align-middle">
                                        <div class="float-right">
                                            <a data-toggle="collapse" :href="'#application' + index" role="button"
                                               aria-expanded="false">
                                                <svg class="icon icon-primary">
                                                    <use
                                                        xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-more-items"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="row collapse px-4" :id="'application' + index">
                                    <table id="folders_table" class="table">
                                        <tbody>
                                        <tr>
                                            <td><strong>{{ $t('area_personale.pratiche.tipo_servizio') }}</strong>
                                            </td>
                                            <td>{{ application['tipoServizio'] }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.protocollo')
                                                    }}</strong>
                                            </td>
                                            <td v-html="parseProtocol(application['protocollo'])"></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.data_protocollo')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['dataProtocollo'] }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.fascicolo')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['fascicolo'] }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.stato_avanzamento')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['statoAvanzamento'] }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.tipo_attivazione')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['tipoAttivazione'] }}</td>
                                        </tr>
                                        <tr v-if="application['tipoAttivazione'] === 'Da altri'">
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.nominativoAltro')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['nominativoAltro'] }}</td>
                                        </tr>
                                        <tr v-if="application['tipoAttivazione'] === 'Da altri'">
                                            <td>
                                                <strong>{{
                                                        $t('area_personale.pratiche.cfAltro')
                                                    }}</strong>
                                            </td>
                                            <td>{{ application['cfAltro'] }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="text-center">
                                                <a v-bind:href="application['accesso']" target="_blank"
                                                   class="btn btn-secondary btn-xs btn-icon"
                                                   role="button" aria-disabled="true">
                                                    <svg class="icon icon-white">
                                                        <use
                                                            xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                    </svg>
                                                    <span>{{ $t('area_personale.pratiche.accedi') }}</span>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </tr>
                            </div>
                            </tbody>
                        </table>
                        
                        <div class="text-center mt-4">
                            <div v-if="pageSize < applications.length" class="page-item" @click="showMore($event)">
                                <a href="#">
                                    <span>{{
                                            $t('area_personale.pratiche.show_more', {
                                                num_results: this.pageSize,
                                                tot_results: this.applications.length
                                            })
                                        }}</span>
                                </a>
                            </div>
                            <div v-else class="page-item" @click="showLess($event)">
                                <a href="#">
                                    <span>{{
                                            $t('area_personale.pratiche.show_less')
                                        }}</span>
                                </a>
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
    name: 'Pratiche',
    data() {
        return {
            applications: [],
            currentSort: 'id',
            currentSortDir: 'asc',
            errorMessage: null,
            pageSize: 10,
            currentPage: 1,
            pageIncrement: 10,
            filters: {
                "Propri": {
                    num: 0,
                    name: "Diretta",
                },
                "DaAltri": {
                    num: 0,
                    name: "Da altri"
                },
                "PerContoDiAltri": {
                    num: 0,
                    name: "Per conto di altri"
                },
                "Tutti": {
                    num: 0,
                    name: "Tutti",
                }
            },
            currentFilter: "Tutti"
        };
    },
    computed: {
        sortedApplications: function () {
            let sortedDocs = this.applications.slice(0);
            return sortedDocs.sort(this.compareValues(this.currentSort, this.currentSortDir)).filter((row, index) => {
                let start = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                if (index >= start && index < end) return true;
            });
        },
    },
    methods: {
        parseProtocol(protocol) {
            let values = protocol.split('|');
            return `${values[0]} - ${values[1]}</br>${values[2]}`
        },
        getFilter(name) {
            switch (name) {
                case "Diretta":
                    return "Propri"
                case "Da altri":
                    return "DaAltri"
                case "Per conto di altri":
                    return "PerContoDiAltri"
                default:
                    return "Tutti"
            }
        },
        showMore: function (event) {
            event.preventDefault();
            this.pageSize += Math.min(this.pageIncrement, this.applications.length - this.pageSize);
        },
        showLess: function (event) {
            event.preventDefault();
            this.pageSize = this.pageIncrement
        },
        getNumPages() {
            return Math.ceil(this.applications.length / this.pageSize);
        },
        nextPage: function (event) {
            event.preventDefault();
            document.getElementById("applications").scrollIntoView();
            if ((this.currentPage * this.pageSize) < this.applications.length) this.currentPage++;
        },
        prevPage: function (event) {
            event.preventDefault();
            document.getElementById("applications").scrollIntoView();
            if (this.currentPage > 1) this.currentPage--;
        },
        getPage: function (page, event) {
            event.preventDefault();
            document.getElementById("applications").scrollIntoView();
            this.currentPage = page;
        },
        sort(key) {
            if (key === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.currentSortDir = 'asc';
            }
            this.currentSort = key;
        },
        compareValues(key, order = 'asc') {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }
                
                const varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];
                
                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        },
        updateApplications(filter, event) {
            event.preventDefault();
            this.errorMessage = null,
            this.applications = [];
            this.currentFilter = filter
            this.getSelfApplications(false)
        },
        getSelfApplications(update) {
            this.$http.post('https://area-personale.comune.trento.it/secure/sdc/stanzaCittadinoServices/rest/SrvStanza/stanzaUrl',
                {
                    "name": "getStatoServiziAttivati",
                    "parameters": {
                        "codiceFiscale": this.$store.getters.account,
                        "tipo": this.currentFilter,
                        "contesto": "STANZA",
                        "listaAut": "PSTANZA"
                    },
                    'account': this.$store.getters.account,
                }
            ).then(result => {
                if (result.data.status === 'KO') {
                    return this.errorMessage = result.data.message;
                }
                if (result.data.results.StatoServiziAttivati.length === 1 && result.data.results.StatoServiziAttivati[0].oggettoIstanza.endsWith("non esistono servizi attivati in archivio")) {
                    
                    this.errorMessage = result.data.results.StatoServiziAttivati[0].oggettoIstanza;
                    return this.errorMessage
                }
                result.data.results.StatoServiziAttivati.forEach((item) => {
                    let type = this.getFilter(item["tipoAttivazione"])
                    if (update) {
                        this.filters[type].num += 1;
                        this.filters["Tutti"].num += 1;
                    }
                    this.applications.push(item);
                });
            }, () => {
                location.reload()
            });
            
        },
    },
    beforeMount() {
        this.applications = [];
        this.errorMessage = null;
        if (!this.$store.getters.account) {
            window.location.href = this.$store.state.comune.links.sezione_servizi.servizi;
        } else {
            this.getSelfApplications(true);
        }
    },
};
</script>

<style scoped>

</style>
