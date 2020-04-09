<template>
    <div id="documents">
        <div class="row pt-md-5">
            <div class="col d-lg-inline-flex">
                <h2>{{$t('documenti')}}</h2>
                <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton-documenti" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        {{$t('area_personale.documenti.filtro_documenti')}}
                        <span class="badge badge-light">4</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-documenti">
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
                    <div v-if="documents.length===0 && !errorMessage">
                        <div class="progress-spinner progress-spinner-active">
                            <span class="sr-only">{{$t('caricamento')}}</span>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="errorMessage" class="alert alert-info">{{errorMessage}}</div>
                        <div v-if="documents">
                            <div class="table-responsive my-5 shadow">
                                <table class="table mb-0 bg-white">
                                    <thead>
                                    <tr>
                                        <th scope="col" @click="sort('N. comunicazione')">
                                            <span>{{$t('area_personale.documenti.numero_comunicazione')}}</span>
                                            <svg v-if="currentSort === 'N. comunicazione' && currentSortDir==='desc'"
                                                 class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                            </svg>
                                            <svg v-else-if="currentSort === 'N. comunicazione' && currentSortDir==='asc'"
                                                 class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                            <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                        </th>
                                        <th scope="col" @click="sort('Anno')">
                                            <span>{{$t('area_personale.documenti.anno')}}</span>
                                            <svg v-if="currentSort === 'Anno' && currentSortDir==='desc'"
                                                 class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-collapse"></use>
                                            </svg>
                                            <svg v-else-if="currentSort === 'Anno' && currentSortDir==='asc'"
                                                 class="icon icon-xs">
                                                <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                            <span v-else>
                                        <svg class="icon icon-xs">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                        </svg>
                                    </span>
                                        </th>
                                        <th scope="col"><span>{{$t('area_personale.documenti.descrizione')}}</span></th>
                                        <th scope="col">
                                            <span>{{$t('area_personale.documenti.data_comunicazione')}}</span>
                                        </th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-if="documents.length === 0">
                                        <td colspan="4">
                                            <div class="text-center">{{$t('no_data')}}</div>
                                        </td>
                                    </tr>
                                    <tr v-for="(document, index) in sortedDocuments" v-bind:key="index">
                                        <td class="align-middle">{{document['N. comunicazione']}}</td>
                                        <td class="align-middle">{{document['Anno']}}</td>
                                        <td class="align-middle">{{document['Descrizione']}}</td>
                                        <td class="align-middle">{{document['Data comunicazione']}}</td>
                                        <td class="align-middle">
                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                               role="button" aria-disabled="true"
                                               @click="getDocument(document['ID'], $event)">
                                                <svg class="icon icon-white">
                                                    <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                                </svg>
                                                <span>{{$t('area_personale.documenti.visualizza')}}</span>
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
                                            <li class="page-item" v-for="(index) in getNumPages()" v-bind:key="index"
                                                @click="getPage(index, $event)">
                                                <a v-if="currentPage === index" class="page-link" href="#"
                                                   aria-current="page">{{index}}</a>
                                                <a v-else class="page-link" href="#">{{index}}</a>
                                            </li>
                                            <li class="page-item" @click="nextPage($event)">
                                                <a class="page-link" href="#documents">
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
    name: 'Documenti',
    data() {
      return {
        documents: [],
        currentSort: 'id',
        currentSortDir: 'asc',
        errorMessage: null,
        pageSize: 10,
        currentPage: 1,
      };
    },
    computed: {
      sortedDocuments: function() {
        let sortedDocs = this.documents.slice(0);
        return sortedDocs.sort(this.compareValues(this.currentSort, this.currentSortDir)).filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
      },
    },
    methods: {
      getNumPages() {
        return Math.ceil(this.documents.length / this.pageSize);
      },
      nextPage: function(event) {
        event.preventDefault();
        document.getElementById("documents").scrollIntoView();
        if ((this.currentPage * this.pageSize) < this.documents.length) this.currentPage++;
      },
      prevPage: function(event) {
        event.preventDefault();
        document.getElementById("documents").scrollIntoView();
        if (this.currentPage > 1) this.currentPage--;
      },
      getPage: function(page, event) {
        event.preventDefault();
        document.getElementById("documents").scrollIntoView();
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
          if (result.data.status === 'KO') {
            return this.errorMessage = result.data.message;
          }

          result.data.results.DocumentiLista.forEach((item) => {
            let tmp = {};
            item.chiave.split(',').forEach((pair) => {
              let splitted = pair.split(':');
              tmp[splitted[0].replace(/"/g, '').trim()] = splitted[1].replace(/"/g, '').trim();
              tmp['ID'] = item.valore;
              this.documents.push(tmp);
            });
          });
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });

      },
      getDocument(documentId, event) {
        event.preventDefault();
        this.$http.post('https://globo.ship.opencontent.io', {
          'name': 'getDocumento',
          'parameters': {
            'idDocumento': documentId,
            'contesto': 'STANZA',
            'listaAut': 'PSTANZA',
          },
          'account': this.$store.state.user.codiceFiscale,
        }, {headers: {'authorization': 'Basic dnVlOldLVGtjSmtQNHJyNA=='}}).then(result => {
          if (result.data.status === 'KO') {
            return this.errorMessage = result.data.message;
          }
          result.data.results.Documento.forEach((item) => {
            let pdfWindow = window.open('', '_blank');
            let content = `<title>${item.valore}.pdf</title><iframe width='100%' height='100%' src='data:application/pdf;base64, ${item.chiave}'</iframe>`;
            pdfWindow.document.write(content);
          });
        }, error => {
          this.errorMessage = 'Richiesta non valida:' + error;
        });
      },
    },
    beforeMount() {
      if (!this.$store.state.user) {
        this.$router.push('/login');
      } else {
        this.fiscalCode = this.$store.getters.user.codiceFiscale;
        this.getDocumentiLista();
      }
    },
  };
</script>

<style scoped>

</style>
