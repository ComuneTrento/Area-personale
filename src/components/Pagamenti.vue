<template>
    <div>
        <div class="py-4">

            <div class="row d-none d-sm-block">
                <div class="col">
                    <div class="table-responsive my-5 shadow">
                        <table class="table mb-0 bg-white">
                            <thead>
                            <tr>
                                <th scope="col" @click="sort('TIPO DEBITO')">
                                    <span>Tipo debito</span>
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
                                <th scope="col"><span>Causale</span></th>
                                <th scope="col" @click="sort('SCADENZA')">
                                    <span>Scadenza</span>
                                    <svg v-if="currentSort === 'SCADENZA' && currentSortDir==='desc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                    </svg>
                                    <svg v-else-if="currentSort === 'SCADENZA' && currentSortDir==='asc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                    </svg>
                                    <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                </th>
                                <th scope="col" @click="sort('IMPORTO')">
                                    <span>Importo</span>
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
                                    <span>Stato pagamento</span>
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
                                       role="button" aria-disabled="true">
                                        <svg class="icon icon-white">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                        </svg>
                                        <span>Avviso</span>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row d-block d-xs-none">

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
                                    <span class="sr-only">Pagina precedente</span>
                                </a>
                            </li>
                            <li class="page-item"  v-for="(index) in getNumPages()" v-bind:key="index" @click="getPage(index)">
                                <a class="page-link" href="#" aria-current="page">{{index}}</a>
                            </li>
                            <li class="page-item" @click="nextPage($event)">
                                <a class="page-link" href="#">
                                    <span class="sr-only">Pagina successiva</span>
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
        pageSize:5,
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
        if((this.currentPage*this.pageSize) < this.payments.length) this.currentPage++;
      },
      prevPage:function(event) {
        event.preventDefault();
        if(this.currentPage > 1) this.currentPage--;
      },
      getPage:function(page) {
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
          'name': 'getDocumentiLista',
          'parameters': {
            'codiceFiscale': 'ZNLNCL71S12L378T',
            'contesto': 'STANZA',
            'listaAut': 'PSTANZA',
          },
          'account': this.$store.state.user.codiceFiscale,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          var parsedResult = JSON.parse(result.bodyText.replace(`"{`, '{').replace(`}"`, '}'));
          if (parsedResult.status === 'OK') {

            Object.keys(parsedResult.results.DocumentiLista).forEach((document) => {
              let tmp = {'id': null, data: []};
              tmp['id'] = document;
              // eslint-disable-next-line no-console
              console.log(parsedResult.results.DocumentiLista[document]);
              tmp['data'] = parsedResult.results.DocumentiLista[document];
              this.documents.push(tmp);
            });
          } else {
            this.errorMessage = parsedResult.message;
          }

        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
    },
    beforeMount() {
      if (!this.$store.state.user) {
        this.$router.push('login');
      } else {
        this.fiscalCode = this.$store.state.user.codiceFiscale;
        //this.getPaymentsLista();
        this.payments =[
          {
            id: '02940000002363421',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 01',
            'SCADENZA': '31/05/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002419120',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 02',
            'SCADENZA': '28/06/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002553057',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 03',
            'SCADENZA': '31/07/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002631909',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 04',
            'SCADENZA': '30/08/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002715609',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 05',
            'SCADENZA': '30/09/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002775247',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 06',
            'SCADENZA': '31/10/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002851667',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 07',
            'SCADENZA': '29/11/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000002904033',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 08',
            'SCADENZA': '31/12/19',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000003048482',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 09',
            'SCADENZA': '31/01/20',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'PAGATO',
          },
          {
            id: '02940000003118943',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 10',
            'SCADENZA': '28/02/20',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'INVIATO',
          },
          {
            id: '02940000003194151',
            'TIPO DEBITO': 'SERVIZI_SOCIALI ',
            'CAUSALE': 'Servizi erogati anno 2019 mese 11',
            'SCADENZA': '31/03/20',
            'IMPORTO': '50.00',
            'STATO PAGAMENTO': 'INVIATO',
          },
        ];
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
