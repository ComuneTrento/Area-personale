<template>
    <main style="padding-top: 0px;">
        <section id="briciole" class="container px-4 my-4">
            <div class="row">
                <div class="col px-lg-4">
                    <nav aria-label="breadcrumb" class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/' }">Home</router-link><span
                                    class="separator">/</span>
                            </li>
                            <li aria-current="page" class="breadcrumb-item active">
                                Servizi
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <section id="intro" class="container px-4 my-4">
            <div class="row">
                <div class="col-lg-7 px-lg-4 py-lg-2">
                    <h1>Servizi</h1>
                    <p>Scopri tutti i servizi offerti dal Comune di Trento e <b>fruibili in modalità online</b>, senza bisogno di recarsi agli uffici comunali</p>
                    <!--div class="form-group mt-5">
                        <form>
                            <input id="ricerca-amministrazione" type="search">
                            <label for="ricerca-amministrazione" style="width: auto;">Cerca contenuti in
                                "Servizi"</label>
                            <span aria-hidden="true" class="autocomplete-icon">
              <svg class="icon icon-sm"><use
                      xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use></svg>
            </span>
                        </form>
                    </div-->
                    <!--div id="filtri-ricerca-amministrazione">
                        <h6 class="small">Filtri</h6>
                        <div class="chip chip-lg">
                            <span class="chip-label">Tutto</span>
                            <button>
                                <svg class="icon">
                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close"></use>
                                </svg>
                                <span class="sr-only">Elimina label</span>
                            </button>
                        </div>
                        <div class="ml-2 d-inline">
                            <button class="btn btn-icon btn-outline-primary btn-sm align-top">
                                <svg class="icon icon-primary">
                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-plus"></use>
                                </svg>
                                <span>Aggiungi filtro</span>
                            </button>
                        </div>
                    </div-->
                </div>
                <!--div class="col-lg-4 offset-lg-1 pt-5 pt-lg-2">
                    <div class="link-list-wrapper">
                        <ul class="link-list">
                            <li>
                                <h3 id="heading-senza-link">Tutti i servizi</h3>
                            </li>
                            <li>
                                <a class="list-item" href="#">Anagrafe e stato civile</a>
                            </li>
                            <li>
                                <a class="list-item" href="#">Cultura e tempo libero</a>
                            </li>
                            <li>
                                <a class="list-item" href="#">Vita lavorativa</a>
                            </li>
                            <li>
                                <a class="list-item" href="#">Attività produttiva e commercio</a>
                            </li>
                            <li>
                                <a class="list-item" href="#">Appalti pubblici</a>
                            </li>
                            <li>
                                <a class="list-item" href="#">Catasto e urbanistica</a>
                            </li>
                            <li>
                                <a class="list-item large medium left-icon" href="#altri-servizi" data-toggle="collapse"
                                   aria-expanded="false" aria-controls="altri-servizi">
                                    <svg class="icon icon-primary right">
                                        <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-more-items"></use>
                                    </svg>
                                </a>
                                <ul class="link-sublist collapse px-0" id="altri-servizi">
                                    <li>
                                        <a class="list-item" href="#">Turismo</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Mobilità e trasporti</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Educazione e formazione</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Giustizia e sicurezza pubblica</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Tributi e finanze</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Ambiente</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Salute, benessere e assistenza</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Autorizzazioni</a>
                                    </li>
                                    <li>
                                        <a class="list-item" href="#">Agricoltura</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="list-item medium" href="#tutti-i-servizi">Tutti i servizi</a>
                            </li>
                        </ul>
                    </div>
                </div-->
            </div>
        </section>
        <section id="Tutti i servizi">
            <div class="bg-100 py-5">
                <div class="container px-4">
                    <div class="row">
                        <div class="col">
                            <h3 class="mb-4 text-primary">Tutti i servizi</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="(service, index) in services" v-bind:key="index" class="col-12 col-sm-6 col-lg-4">
                            <!--start card-->
                            <article v-if="(index / 6) < currentPage && (index / 6) >= currentPage -1"
                                     class="card-wrapper card-space">
                                <div class="card card-bg card-big rounded shadow">
                                    <div v-if="index === 0" class="flag-icon"></div>
                                    <div v-else class="flag-icon invisible"></div>
                                    <div class="row px-5 d-flex flex-row-reverse">
                                        <div v-for="(topic, topicindex) in service.topics" v-bind:key="topicindex">
                                            <div class="chip chip-simple">
                                                <span class="chip-label">{{ topic.name['ita-IT'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{{service.name}}</h5>
                                        <p class="card-text">{{service.abstract | striphtml }}</p>
                                        <a class="read-more" v-bind:href="service['link']">
                                            <span class="text">Leggi di più</span>
                                            <svg class="icon">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <!--end card-->
                        </div>
                    </div>
                    <div class="mt-2">
                        <nav class="pagination-wrapper justify-content-center" aria-label="Esempio di paginazione">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" tabindex="-1" aria-hidden="true"
                                       @click="changePage(currentPage -1 , $event)">
                                        <svg class="icon icon-primary">
                                            <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li v-for="index in this.getPages()" :key="index" class="page-item">
                                    <a v-if="currentPage === index" class="page-link" href="#" aria-current="page"
                                       @click="changePage(index, $event)">
                                        <span>{{index}}</span>
                                    </a>
                                    <a v-else class="page-link" href="#"
                                       @click="changePage(index, $event)">{{index}}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" tabindex="-1" aria-hidden="true"
                                       @click="changePage(currentPage +1 , $event)">
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
        </section>
    </main>
</template>

<script>
  export default {
    name: 'Homepage',
    data() {
      return {
        services: [],
        currentPage: 1,
      };
    },
    mounted() {
      this.getServices(
          'https://servizi.comune.trento.it/api/opendata/v2/content/search/classes+%27public_service%27%20sort%20%5Bmodified%3D%3Edesc%5D');
    },
    methods: {
      getServices(url) {
        this.$http.get(url).then(result => {
          let nextPage = result.body.nextPageQuery;
          result.body.searchHits.forEach((item) => {
            let service = {
              name: item.data['ita-IT'].name,
              abstract: item.data['ita-IT'].abstract,
              link: `https://servizi.comune.trento.it/openpa/object/${item.metadata.id}`,
              topics: item.data['ita-IT'].topics,
            };
            this.services.push(service);
          });

          if (nextPage) {
            // Request next page
            this.getServices(nextPage);
          }
        }, error => {
          this.errorMessage = 'Richiesta non valida' + error;
        });
      },
      getPages() {
        return Math.ceil(this.services.length / 6);
      },
      changePage(pageNumber, event) {
        if (pageNumber > 0 && pageNumber < (this.services.length / 6) + 1) {
          event.preventDefault();
          this.currentPage = pageNumber;
        }
      },
    },
  };
</script>

<style scoped>

</style>
