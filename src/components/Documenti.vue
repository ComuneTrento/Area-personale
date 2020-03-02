<template>
    <div>
        <div class="row pt-md-5">
            <div class="col d-lg-inline-flex">
                <h2>Documenti</h2>
                <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton-documenti" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Filtro documenti
                        <span class="badge badge-light">4</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-documenti">
                        <a class="dropdown-item d-flex justify-content-between align-items-center"
                           href="#">
                            <span>in bozza</span>
                            <span class="badge badge-light">4</span>
                        </a>
                        <a class="dropdown-item" href="#">inviate</a>
                        <a class="dropdown-item" href="#">in elaborazione</a>
                        <a class="dropdown-item" href="#">accettate</a>
                        <a class="dropdown-item" href="#">rifiutate</a>
                        <a class="dropdown-item" href="#">da integrare</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div class="row d-none d-sm-block">
                <div class="col">
                    <div class="table-responsive my-5 shadow">
                        <table class="table mb-0 bg-white">
                            <thead>
                            <tr>
                                <th scope="col" @click="sort('N. comunicazione')">
                                    <span>Numero comunicazione</span>
                                    <svg v-if="currentSort === 'N. comunicazione' && currentSortDir==='desc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                    </svg>
                                    <svg v-else-if="currentSort === 'N. comunicazione' && currentSortDir==='asc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                    </svg>
                                    <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                </th>
                                <th scope="col" @click="sort('Anno')">
                                    <span>Anno</span>
                                    <svg v-if="currentSort === 'Anno' && currentSortDir==='desc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                    </svg>
                                    <svg v-else-if="currentSort === 'Anno' && currentSortDir==='asc'" class="icon icon-xs">
                                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                    </svg>
                                    <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                </th>
                                <th scope="col"><span>Descrizione</span></th>
                                <th scope="col">
                                    <span>Data comunicazione</span>
                                </th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(document, index) in sortedDocuments" v-bind:key="index">
                                <td class="align-middle">{{document['N. comunicazione']}}</td>
                                <td class="align-middle">{{document['Anno']}}</td>
                                <td class="align-middle">{{document['Descrizione']}}</td>
                                <td class="align-middle">{{document['Data comunicazione']}}</td>
                                <td class="align-middle">
                                    <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                       role="button" aria-disabled="true">
                                        <svg class="icon icon-white">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                        </svg>
                                        <span>Visualizza</span>
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
    name: 'Documenti',
    data() {
      return {
        documents: [],
        currentSort:'id',
        currentSortDir:'asc',
        errorMessage: null,
        pageSize:5,
        currentPage:1
      };
    },
    computed:{
      sortedDocuments:function() {
        let sortedDocs = this.documents.slice(0);
        return sortedDocs.sort(this.compareValues(this.currentSort, this.currentSortDir)).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      }
    },
    methods: {
      getNumPages() {
        return Math.ceil(this.documents.length / this.pageSize);
      },
      nextPage:function(event) {
        event.preventDefault();
        if((this.currentPage*this.pageSize) < this.documents.length) this.currentPage++;
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
      getDocumentiLista() {
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
        //this.getDocumentiLista();
        this.documents = [

          {
            id: '121919',
            'N. comunicazione': '121919',
            'Anno': '2015',
            'Descrizione': 'IMIS 2015 CAINELLI LORENZO',
            'Data comunicazione': '28/05/15',
          },
          {
            id: '47200',
            'N. comunicazione': '47200',
            'Anno': '2016',
            'Descrizione': 'IMIS 2016 CAINELLI LORENZO',
            'Data comunicazione': '05/05/16',
          },
          {
            id: '243986',
            'N. comunicazione': '243986',
            'Anno': '2017',
            'Descrizione': 'IMIS 2017 CAINELLI LORENZO',
            'Data comunicazione': '01/06/17',
          },
          {
            id: '298931',
            'N. comunicazione': '298931',
            'Anno': '2018',
            'Descrizione': 'IMIS 2018 CAINELLI LORENZO',
            'Data comunicazione': '21/05/18',
          },
          {
            id: '354988',
            'N. comunicazione': '354988',
            'Anno': '2019',
            'Descrizione': 'IMIS 2019 CAINELLI LORENZO',
            'Data comunicazione': '22/05/19',
          },
        ];

      }
    },
  };
</script>

<style scoped>

</style>
