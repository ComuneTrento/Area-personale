<template>
    <main style="padding-top: 0px;">
        <section id="briciole" class="container px-4 my-4">
            <div class="row">
                <div class="col px-lg-4">
                    <nav aria-label="breadcrumb" class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a v-bind:href="$store.getters.comune.url">{{$t('comune')}}</a>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item">
                                <a v-bind:href="$store.getters.comune.links.sezione_servizi.servizi">{{$t('servizi')}}</a>
                                <span v-if="themeSelected" class="separator">/</span>
                            </li>
                            <li v-if="themeSelected" class="breadcrumb-item active">
                                {{themeSelected}}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <section id="intro" class="container px-4 my-4">
            <div class="row">
                <div class="col-lg-7 px-lg-4 py-lg-2">
                    <h1>{{$t('servizi')}}</h1>
                    <p>{{$t('descrizione_servizi_1')}} <b>{{$t('descrizione_servizi_2')}}</b>
                        {{$t('descrizione_servizi_3')}}
                    </p>
                    <div class="form-group mt-5">
                        <div class="form-group">
                            <input id="ricerca-servizio" v-model="search" type="search" @change="getServicesByName()">
                            <label for="ricerca-servizio" style="width: auto;">{{$t('cerca_contenuti_in')}}
                                "{{$t('servizi')}}"</label>
                            <span aria-hidden="true" class="autocomplete-icon">
                                <svg class="icon icon-sm">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 pt-5 pt-lg-2">
                    <div class="link-list-wrapper">
                        <ul v-for="(theme, index) in themes" v-bind:key="index">
                            <li v-if="index === 0">
                                <h3 id="heading-senza-link">{{$t('tutti_i_servizi')}}</h3>
                            </li>
                            <li v-if="index < maxThemes">
                                <a class="list-item" style="line-height: normal; margin-bottom: 1rem" href="#" @click="getServicesByTheme(theme)">
                                    <b v-if="theme === themeSelected">{{ theme }}</b>
                                    <span v-else>{{ theme }}</span>
                                </a>
                            </li>
                            <li v-if="index >= maxThemes">
                                <a v-if="index === maxThemes" style="line-height: normal; margin-bottom: 1rem" class="list-item large medium left-icon"
                                   href="#altri-servizi" data-toggle="collapse"
                                   aria-expanded="false" aria-controls="altri-servizi">
                                    <svg class="icon icon-primary right">
                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-more-items"></use>
                                    </svg>
                                </a>
                                <ul class="link-sublist collapse px-0" id="altri-servizi">
                                    <li>
                                        <a class="list-item" style="line-height: normal; margin-bottom: 1rem" href="#" @click="getServicesByTheme(theme)">
                                            <b v-if="theme === themeSelected">{{ theme }}</b>
                                            <span v-else>{{ theme }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li v-if="index === themes.length -1 && themeSelected">
                                <a class="list-item medium" style="line-height: normal; margin-bottom: 1rem" href="#" @click="getServicesByTheme()">{{$t('tutti_i_servizi')}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="publicServices">
            <div class="bg-100 py-5">
                <div class="container px-4">
                    <div class="row">
                        <div class="col">
                            <h3 class="mb-4 text-primary">{{$t('tutti_i_servizi')}}</h3>
                        </div>
                    </div>
                    <div v-if="loadingServices" class="progress-spinner progress-spinner-active">
                        <span class="sr-only">{{$t('caricamento')}}</span>
                    </div>
                    <div v-else-if="!loadingServices && services.length === 0">
                        <p>{{$t('no_risultati')}}</p>
                    </div>
                    <div v-else-if="!loadingServices">
                        <div class="row" id="services_list">
                            <div v-for="(service, index) in services" v-bind:key="index"
                                 class="col-12 col-sm-6 col-lg-4">
                                <!--start card-->
                                <article v-if="(index / 9) < currentPage && (index / 9) >= currentPage -1"
                                         class="card-wrapper card-space">
                                    <div class="card card-bg card-big rounded shadow ">
                                        <div v-if="index === 0" class="flag-icon"></div>
                                        <div v-else class="flag-icon invisible"></div>
                                        <div class="card-body">
                                            <h5 class="card-title">{{service.name}}</h5>
                                            <p class="card-text">{{service.abstract | striphtml }}</p>
                                            <a class="read-more" v-bind:href="service['link']">
                                                <span class="text">{{$t('leggi_di_piu')}}</span>
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
                            <nav class="pagination-wrapper justify-content-center" aria-label="Paginazione">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a id="prevPageLink" class="page-link" href="#" tabindex="-1"
                                           aria-hidden="true"
                                           @click="changePage(currentPage -1 , $event)">
                                            <span class="sr-only">{{$t('pagina_precedente')}}</span>
                                            <svg class="icon icon-primary">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li v-for="index in this.getPages()" :key="index" class="page-item">
                                        <a v-if="currentPage === index" class="page-link" href="#"
                                           aria-current="page"
                                           @click="changePage(index, $event)">
                                            <span>{{index}}</span>
                                        </a>
                                        <a v-else class="page-link" href="#"
                                           @click="changePage(index, $event)">{{index}}</a>
                                    </li>
                                    <li class="page-item">
                                        <a id="nextPageLink" class="page-link" href="#" tabindex="-1"
                                           aria-hidden="true"
                                           @click="changePage(currentPage +1 , $event)">
                                            <span class="sr-only">{{$t('pagina_successiva')}}</span>
                                            <svg class="icon icon-primary">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
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
        loadingServices: false,
        services: [],
        topics: [],
        currentPage: 1,
        maxThemes: 6,
        themeSelected: null,
        search: '',
        themes: [
          'Agricoltura',
          'Ambiente',
          'Anagrafe e stato civile',
          'Appalti pubblici',
          'Attività produttive e commercio',
          'Autorizzazioni',
          'Cultura e tempo libero',
          'Edilizia e urbanistica',
          'Edicazione e formazione',
          'Elezioni e partecipazione',
          'Giustizia e sicurezza pubblica',
          'Mobilità e trasporti',
          'Salute, benessere e assistenza',
          'Tributi e finanze',
          'Turismo',
          'Vita lavorativa'],
      };
    },
    beforeMount() {
      this.getServices(
        `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes+%27public_service%27%20sort%20%5Bmodified%3D%3Edesc%5D`);
      this.getTopics(
        `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes+%27topic%27%20sort%20%5Bname%3D%3Easc%5D`);
      //this.getThemes(`${this.$store.getters.api_url}/api/opendata/v2/tags_tree/985`);
    },
    watch: {
      '$i18n.locale': function () {
        this.services = [];
        if (this.themeSelected)
          this.getServicesByTheme(this.themeSelected);
        else
          this.getServices(
            `${this.$store.getters.api_url}/api/opendata/v2/tags_tree/985`);
      },
    },
    methods: {
      getServices(url) {
        this.loadingServices = true;
        let language = '';
        this.$store.getters.locales.forEach((locale) => {
          if (locale.locale === this.$i18n.locale) {
            language = locale.api;
          }
        });
        this.$http.get(url).then(result => {
          let nextPage = result.body.nextPageQuery;
          if (nextPage && !nextPage.startsWith('https')) nextPage = nextPage.replace('http', 'https');
          result.body.searchHits.forEach((item) => {
            if (!item.metadata.languages.includes(language)) {
              language = 'ita-IT';
            }
            let service = {
              name: item.data[language].name,
              abstract: item.data[language].abstract,
              link: `https://servizi.comune.trento.it/openpa/object/${item.metadata.id}`,
              topics: item.data[language].topics,
            };
            this.services.push(service);
          });
          if (nextPage) {
            // Request next page
            this.getServices(nextPage);
          } else {
            this.loadingServices = false;
          }
        }, () => {
            location.reload()
        });
      },
      getThemes(url) {
        this.loadingServices = true;
        let language = '';
        this.$store.getters.locales.forEach((locale) => {
          if (locale.locale === this.$i18n.locale) {
            language = locale.api;
          }
        });
        this.$http.get(url).then(result => {
          result.body.children.forEach((item) => {
            if (!item['languageNameArray'][language]) {
              language = 'ita-IT';
            }
            this.themes.push(item['keywordTranslations'][language]);
          });
        }, () => {
            location.reload()
        });
      },

      getTopics(url) {
        this.loadingServices = true;
        let language = '';
        this.$store.getters.locales.forEach((locale) => {
          if (locale.locale === this.$i18n.locale) {
            language = locale.api;
          }
        });
        this.$http.get(url).then(result => {
          let nextPage = result.body.nextPageQuery;
          if (nextPage && !nextPage.startsWith('https')) nextPage = nextPage.replace('http', 'https');
          result.body.searchHits.forEach((item) => {
            if (!item.metadata.languages.includes(language)) {
              language = 'ita-IT';
            }
            this.topics.push(item.data[language].name);
          });
          if (nextPage) {
            // Request next page
            this.getTopics(nextPage);
          }
        }, () => {
            location.reload()
        });
      },
      getPages() {
        return Math.ceil(this.services.length / 9);
      },
      changePage(pageNumber, event) {
        event.preventDefault();
        document.getElementById("publicServices").scrollIntoView();
        if (pageNumber > 0 && pageNumber < this.getPages() + 1) {
          this.currentPage = pageNumber;
        }
      },
      getServicesByTheme(theme) {
        this.services = [];
        let url = '';
        if (theme) {
          this.themeSelected = theme;
          url = `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes%20%5Bpublic_service%5D%20and%20type%20in%20%5B%22${theme}%22%5D`;
        } else {
          this.themeSelected = null;
          url = `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes+%27public_service%27%20sort%20%5Bmodified%3D%3Edesc%5D`;
        }
        this.getServices(url);
      },
      getServicesByName() {
        this.services = [];
        let url = '';
        if (this.search) {
          url = `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes%20%5Bpublic_service%5D%20and%20raw%5Battr_name_t%5D%20%3D%20%5B%22${this.search}%22%5D`;
        } else {
          url = `${this.$store.getters.api_url}/api/opendata/v2/content/search/classes+%27public_service%27%20sort%20%5Bmodified%3D%3Edesc%5D`;
        }
        this.getServices(url);
      },
    },
  };
</script>

<style scoped>

</style>
