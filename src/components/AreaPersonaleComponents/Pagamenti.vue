<template>
    <div id="payments">
        <div class="row pt-md-5">
            <div class="col d-lg-inline-flex">
                <h2>{{$t('pagamenti')}}</h2>
                <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
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
                </div>
            </div>
        </div>
        <div class="py-4">
            <div class="row d-none d-sm-block">
                <div class="col">
                    <div v-if="payments.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{$t('caricamento')}}</span>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="errorMessage" class="alert alert-info" >{{errorMessage}}</div>
                        <div v-if="payments">
                            <div class="table-responsive my-5 shadow" id="payments_table">
                                <table class="table mb-0 bg-white">
                                    <thead>
                                    <tr>
                                        <th scope="col" @click="sort('TIPO DEBITO')">
                                            <span>{{$t('area_personale.pagamenti.tipo_debito')}}</span>
                                            <svg v-if="currentSort === 'TIPO DEBITO' && currentSortDir==='desc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                            </svg>
                                            <svg v-else-if="currentSort === 'TIPO DEBITO' && currentSortDir==='asc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                            <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                        </th>
                                        <th scope="col"><span>{{$t('area_personale.pagamenti.causale')}}</span></th>
                                        <th scope="col" @click="sort('SCADENZA')"><span>{{$t('area_personale.pagamenti.scadenza')}}</span></th>
                                        <th scope="col" @click="sort('IMPORTO')">
                                            <span>{{$t('area_personale.pagamenti.importo')}}</span>
                                            <svg v-if="currentSort === 'IMPORTO' && currentSortDir==='desc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                            </svg>
                                            <svg v-else-if="currentSort === 'IMPORTO' && currentSortDir==='asc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                            <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                        </th>
                                        <th scope="col" @click="sort('STATO PAGAMENTO')">
                                            <span>{{$t('area_personale.pagamenti.stato_pagamento')}}</span>
                                            <svg v-if="currentSort === 'STATO PAGAMENTO' && currentSortDir==='desc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                            </svg>
                                            <svg v-else-if="currentSort === 'STATO PAGAMENTO' && currentSortDir==='asc'" class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                            <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                        </th>
                                        <th scope="col">

                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(payment, index) in sortedPayments" v-bind:key="index">
                                        <td class="align-middle text-left">{{payment['TIPO DEBITO']}}</td>
                                        <td class="align-middle text-left">{{payment['CAUSALE']}}</td>
                                        <td class="align-middle text-left">{{payment['SCADENZA']}}</td>
                                        <td class="align-middle text-right">{{payment['IMPORTO']}}</td>
                                        <td class="align-middle text-center">
                                            <svg v-if="payment['STATO PAGAMENTO'] === 'PAGATO'" class="icon icon-success">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-check-circle"></use>
                                            </svg>
                                            <svg v-else-if="payment['STATO PAGAMENTO'] === 'INVIATO'" class="icon icon-warning">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-warning-circle"></use>
                                            </svg>
                                            <svg v-else class="icon icon-danger">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-close-circle"></use>
                                            </svg>
                                        </td>
                                        <td class="align-middle">
                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                               role="button" aria-disabled="true" @click="getAvviso(payment['IUV'], $event)">
                                                <svg class="icon icon-white">
                                                    <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-download"></use>
                                                </svg>
                                                <span>{{$t('area_personale.pagamenti.avviso')}}</span>
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
                                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                                    </svg>
                                                    <span class="sr-only">{{$t('pagina_precedente')}}</span>
                                                </a>
                                            </li>
                                            <li class="page-item"  v-for="(index) in getNumPages()" v-bind:key="index" @click="getPage(index, $event)">
                                                <a v-if="currentPage === index" class="page-link" href="#payments" aria-current="page">{{index}}</a>
                                                <a v-else class="page-link" href="#">{{index}}</a>
                                            </li>
                                            <li class="page-item" @click="nextPage($event)">
                                                <a class="page-link" href="#">
                                                    <span class="sr-only">{{$t('pagina_successiva')}}</span>
                                                    <svg class="icon icon-primary">
                                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
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
        pageSize:10,
        currentPage:1
      };
    },
    computed: {
      sortedPayments: function() {
        let sortedPayments = this.payments.slice(0);
        return sortedPayments.sort(this.compareValues(this.currentSort, this.currentSortDir)).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      },
    },
    methods: {
      getNumPages() {
        return Math.ceil(this.payments.length / this.pageSize);
      },
      nextPage:function(event) {
        event.preventDefault();
        document.getElementById("payments").scrollIntoView();
        if((this.currentPage*this.pageSize) < this.payments.length) this.currentPage++;
      },
      prevPage:function(event) {
        event.preventDefault();
        document.getElementById("payments").scrollIntoView();
        if(this.currentPage > 1) this.currentPage--;
      },
      getPage:function(page, event) {
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
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getDebitoLista',
          'parameters': {
            'codiceFiscale': 'ZNLNCL71S12L378T',
            'contesto': 'STANZA',
            'listaAut': 'PSTANZA',
          },
          'account': this.$store.state.user.codiceFiscale,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.data.status === 'KO') {
            return this.errorMessage = result.data.message;
          }
          result.data.results.DebitoLista.forEach((item) => {
            let tmp = {};
            item.chiave.split(',').forEach((pair) => {
              let splitted = pair.split(':');
              let key = splitted[0].replace(/"/g, '').trim();
              let value = splitted[1].replace(/"/g, '').trim();
              tmp[key] = value;
              tmp['IUV'] = item.valore;
              this.payments.push(tmp);
            })
          });

        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
      getAvviso(iuv, event) {
        event.preventDefault();
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getDebitoAvviso',
          'parameters': {
            'iuv': iuv,
            'contesto': 'STANZA',
            'listaAut': 'PSTANZA',
          },
          'account': this.$store.state.user.codiceFiscale,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.data.status === 'KO') {
            return this.errorMessage = result.data.message;
          }
          result.data.results.DebitoAvviso.forEach((item) => {
            let element = document.createElement('a');
            element.setAttribute('href', 'data:application/pdf;base64,' + item.chiave);
            element.setAttribute('download', item.valore +'.pdf');

            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          });
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      }
    },
    beforeMount() {
      if (!this.$store.state.user) {
        this.$router.push('/login');
      } else {
        this.fiscalCode = this.$store.state.user.codiceFiscale;
        this.getPaymentsLista();
      }
    },
  };
</script>

<style scoped>
 th {
     cursor: pointer;
     user-select: none;
 }
</style>
