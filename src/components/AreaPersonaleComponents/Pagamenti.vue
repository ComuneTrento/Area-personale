<template>
    <div id="payments">
        <div class="row pt-md-5">
            <div class="col d-lg-inline-flex">
                <h2>{{ $t('pagamenti') }}</h2>
                <!--<div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton-pagamenti" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        {{$t('area_personale.pagamenti.filtro_pagamenti')}}
                        <span class="badge badge-light">4</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-pagamenti">
                        <a class="dropdown-item d-flex justify-content-between align-items-center"
                           href="#">
                            <span>filtro</span>
                            <span class="badge badge-light">4</span>
                        </a>
                        <a class="dropdown-item" href="#">filtro</a>
                    </div>
                </div>-->
            </div>
        </div>
        <div class="py-4">
            <div class="row d-none d-sm-block">
                <div class="col">
                    <div v-if="payments.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{ $t('caricamento') }}</span>
                        </div>
                    </div>
                    <div v-else-if="errorMessage" class="alert alert-info">{{ errorMessage }}</div>
                    <div v-else-if="payments.length !== 0">
                        <div class="table-responsive my-5 shadow" id="payments_table">
                            <table class="table mb-0 bg-white">
                                <thead>
                                <tr>
                                    <th scope="col" @click="sort('TIPO DEBITO')">
                                        <span>{{ $t('area_personale.pagamenti.tipo_debito') }}</span>
                                        <svg v-if="currentSort === 'TIPO DEBITO' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'TIPO DEBITO' && currentSortDir==='asc'"
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
                                    <th scope="col"><span>{{ $t('area_personale.pagamenti.causale') }}</span></th>
                                    <th scope="col" @click="sort('SCADENZA')">
                                        <span>{{ $t('area_personale.pagamenti.scadenza') }}</span>
                                    </th>
                                    <th scope="col" @click="sort('IMPORTO')">
                                        <span>{{ $t('area_personale.pagamenti.importo') }}</span>
                                        <svg v-if="currentSort === 'IMPORTO' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'IMPORTO' && currentSortDir==='asc'"
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
                                    <th scope="col" @click="sort('STATO PAGAMENTO')">
                                        <span>{{ $t('area_personale.pagamenti.stato_pagamento') }}</span>
                                        <svg v-if="currentSort === 'STATO PAGAMENTO' && currentSortDir==='desc'"
                                             class="icon icon-xs">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                        </svg>
                                        <svg v-else-if="currentSort === 'STATO PAGAMENTO' && currentSortDir==='asc'"
                                             class="icon icon-xs">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                        <span v-else>
                                               <svg class="icon icon-xs"><use
                                                   xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                               </svg>
                                            </span>
                                    </th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(payment, index) in sortedPayments" v-bind:key="index">
                                    <td class="align-middle text-left">{{ payment['TIPO DEBITO'] }}</td>
                                    <td class="align-middle text-left">{{ payment['CAUSALE'] }}</td>
                                    <td class="align-middle text-left">{{ payment['SCADENZA'] }}</td>
                                    <td class="align-middle text-right">{{ payment['IMPORTO'] }}</td>
                                    <td class="align-middle text-center">
                                        <svg v-if="payment['STATO PAGAMENTO'] === 'PAGATO'"
                                             class="icon icon-success">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-check-circle"></use>
                                        </svg>
                                        <svg v-else-if="payment['STATO PAGAMENTO'] === 'INVIATO'"
                                             class="icon icon-warning">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-warning-circle"></use>
                                        </svg>
                                        <svg v-else class="icon icon-danger">
                                            <use
                                                xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-close-circle"></use>
                                        </svg>
                                    </td>
                                    <td class="align-middle">
                                        <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                           role="button" aria-disabled="true"
                                           @click="getAvviso(payment['IUV'], $event)">
                                            <svg class="icon icon-white">
                                                <use
                                                    xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-download"></use>
                                            </svg>
                                            <span>{{ $t('area_personale.pagamenti.download') }}</span>
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
                                            <a v-if="currentPage === index" class="page-link" href="#payments"
                                               aria-current="page">{{ index }}</a>
                                            <a v-else class="page-link" href="#">{{ index }}</a>
                                        </li>
                                        <li class="page-item" @click="nextPage($event)">
                                            <a class="page-link" href="#">
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
                    <div v-if="payments.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{ $t('caricamento') }}</span>
                        </div>
                    </div>
                    <div v-else-if="errorMessage" class="alert alert-info">{{ errorMessage }}</div>
                    <div v-else>
                        <div class="mb-4 float-right bootstrap-select-wrapper">
                            <label>{{ $t('order_by') }}</label>
                            <select title="Ordina risultati" @change="sort($event.target.value)"
                                    class="p-1 mt-2 border-0 shadow">
                                <option value="STATO PAGAMENTO">{{
                                        $t('area_personale.pagamenti.stato_pagamento')
                                    }}
                                </option>
                                <option value="IMPORTO">{{ $t('area_personale.pagamenti.importo') }}</option>
                                <option value="TIPO DEBITO">{{ $t('area_personale.pagamenti.tipo_debito') }}</option>
                            </select>
                        </div>
                        <table id="payments_table_mobile" class="table border-bottom table-white shadow">
                            <tbody>
                            <div v-for="(payment, index) in sortedPayments" v-bind:key="index">
                                <tr>
                                    <td class="align-middle">
                                        <svg class="icon">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-card"></use>
                                        </svg>
                                    </td>
                                    <td class="align-middle">
                                        <span class="text-wrap">{{ payment['CAUSALE'] }}</span>
                                    </td>
                                    <td class="d-none d-none d-lg-table-cell">
                                    </td>
                                    <td class="align-middle">
                                        <div class="float-right">
                                            <a data-toggle="collapse" :href="'#payment' + index" role="button"
                                               aria-expanded="false">
                                                <svg class="icon icon-primary">
                                                    <use
                                                        xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-more-items"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="row collapse px-4" :id="'payment' + index">
                                    <table id="folders_table" class="table">
                                        <tbody>
                                        <tr>
                                            <td><strong>{{ $t('area_personale.pagamenti.tipo_debito') }}</strong></td>
                                            <td>{{ payment['TIPO DEBITO'] }}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>{{ $t('area_personale.pagamenti.importo') }}</strong></td>
                                            <td>{{ payment['IMPORTO'] }}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>{{ $t('area_personale.pagamenti.stato_pagamento') }}</strong>
                                            </td>
                                            <td>{{ payment['STATO PAGAMENTO'] }}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>{{ $t('area_personale.pagamenti.scadenza') }}</strong></td>
                                            <td>{{ payment['SCADENZA'] }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="text-center">
                                                <a href="#" class="btn btn-secondary btn-icon"
                                                   role="button" aria-disabled="true"
                                                   @click="getAvviso(payment['IUV'], $event)">
                                                    <svg class="icon icon-white">
                                                        <use
                                                            xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-download"></use>
                                                    </svg>
                                                    <span>{{ $t('area_personale.pagamenti.download') }}</span>
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
                            <div class="page-item" @click="showMore($event)">
                                <a href="#">
                  <span>{{
                          $t('area_personale.pagamenti.show_more', {
                              num_results: this.pageSize,
                              tot_results: this.payments.length
                          })
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
    name: 'Pagamenti',
    data() {
        return {
            payments: [],
            currentSort: 'id',
            currentSortDir: 'asc',
            errorMessage: null,
            pageSize: 10,
            currentPage: 1,
            pageIncrement: 10
        };
    },
    computed: {
        sortedPayments: function () {
            let sortedPayments = this.payments.slice(0);
            return sortedPayments.sort(this.compareValues(this.currentSort, this.currentSortDir)).filter((row, index) => {
                let start = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                if (index >= start && index < end) return true;
            });
        },
    },
    methods: {
        showMore: function (event) {
            event.preventDefault();
            this.pageSize += this.pageIncrement;
        },
        getNumPages() {
            return Math.ceil(this.payments.length / this.pageSize);
        },
        nextPage: function (event) {
            event.preventDefault();
            document.getElementById("payments").scrollIntoView();
            if ((this.currentPage * this.pageSize) < this.payments.length) this.currentPage++;
        },
        prevPage: function (event) {
            event.preventDefault();
            document.getElementById("payments").scrollIntoView();
            if (this.currentPage > 1) this.currentPage--;
        },
        getPage: function (page, event) {
            event.preventDefault();
            document.getElementById("payments").scrollIntoView();
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
        getPaymentsLista() {
            this.$http.post('https://area-personale.comune.trento.it/secure/globo/ComuneServices/rest/SrvGlobo/globoUrl', {
                'name': 'getDebitoLista',
                'parameters': {
                    'codiceFiscale': this.$store.getters.account,
                    'contesto': 'STANZA',
                    'listaAut': 'PSTANZA',
                },
                'account': this.$store.getters.account,
            }).then(result => {
                if (result.data.status === 'KO') {
                    return this.errorMessage = result.data.message;
                }
                if (result.data.results.DebitoLista.length === 1 && result.data.results.DebitoLista[0].chiave.endsWith("non esistono debiti in archivio")) {
                    return this.errorMessage = result.data.results.DebitoLista[0].chiave;
                }
                result.data.results.DebitoLista.forEach((item) => {
                    let tmp = {};
                    item.chiave.split(',').forEach((pair) => {
                        let splitted = pair.split(':');
                        let key = splitted[0].replace(/"/g, '').trim();
                        tmp[key] = splitted[1].replace(/"/g, '').trim();
                        tmp['IUV'] = item.valore;
                        this.payments.push(tmp);
                    })
                });
                
            }, () => {
                location.reload()
            });
        },
        getAvviso(iuv, event) {
            event.preventDefault();
            this.$http.post('https://area-personale.comune.trento.it/secure/globo/ComuneServices/rest/SrvGlobo/globoUrl', {
                'name': 'getDebitoAvviso',
                'parameters': {
                    'iuv': iuv,
                    'contesto': 'STANZA',
                    'listaAut': 'PSTANZA',
                },
                'account': this.$store.getters.account,
            }).then(result => {
                if (result.data.status === 'KO') {
                    return this.errorMessage = result.data.message;
                }
                result.data.results.DebitoAvviso.forEach((item) => {
                    let element = document.createElement('a');
                    element.setAttribute('href', 'data:application/pdf;base64,' + item.chiave);
                    element.setAttribute('download', item.valore + '.pdf');
                    
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                });
            }, () => {
                location.reload()
            });
        }
    },
    beforeMount() {
        this.getPaymentsLista();
    },
};
</script>

<style scoped>
th {
    cursor: pointer;
    user-select: none;
}
</style>
