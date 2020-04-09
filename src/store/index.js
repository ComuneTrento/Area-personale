import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locales: [
      {"locale": "it", "nome":"ITA", "api":"ita-IT"},
      {"locale": "en", "nome":"ENG", "api":"eng-EN"}
    ],
    api_url:"https://servizi.comune.trento.it",
    user: null,
    comune: {
      indirizzo: "Via Belenzani, 19 - 38122 Trento",
      links: {
        comune: "https://www.comune.trento.it/",
        provincia:"http://www.provincia.tn.it/home/",
        sezione_amministrazione: {
          amministrazione: "https://www.comune.trento.it/Comune/",
          giunta_e_consiglio:"https://www.comune.trento.it/Sezioni-politiche/Giunta/Giunta-Comunale",
          aree_di_competenza: "https://www.comune.trento.it/Comune/Organizzazione-comunale/Organigramma",
          dipendenti:"https://www.comune.trento.it/Comune/Organizzazione-comunale/Personale",
          luoghi:"https://www.comune.trento.it/Aree-tematiche/Cartografia",
          associazioni_e_societa_partecipate:"https://www.comune.trento.it/Aree-tematiche/Aziende-e-societa-partecipate"
        },
        sezione_servizi: {
          servizi: "https://servizi.comune.trento.it/Servizi",
          pagamenti:"https://www.comune.trento.it/Comunicazione/In-evidenza/Modalita-di-pagamento",
          supporto:"https://www.google.com/",
          domande_e_iscrizioni: "https://www.google.com/",
          segnalazioni:"https://www.google.com/",
          autorizzazioni_e_concessioni:"https://www.google.com/",
          certificati_e_dichiarazioni:"https://www.google.com/"
        },
        sezione_novita: {
          novita: "https://www.comune.trento.it/Comunicazione/Il-Comune-informa",
          notizie:"https://www.google.com/",
          eventi:"https://www.google.com/",
          comunicati_stampa:"https://www.google.com/"
        },
        sezione_documenti: {
          documenti: "https://servizi.comune.trento.it/Documenti-e-dati",
          progetti_e_attivita:"https://www.google.com/",
          determine_delibere_e_ordinanze:"https://www.google.com/",
          bandi:"https://www.google.com/",
          concorsi:"https://www.google.com/",
          albo_pretorio:"https://www.google.com/"
        },
        sezione_amministrazione_trasparente: {
          amministrazione_trasparente: "https://www.google.com/"
        },
        sezione_contatti: {
          contatti:"https://www.google.com/",
          pec:"https://www.google.com/",
          urp:"https://www.google.com/"
        },
        sezione_newsletter: {
          newsletter: "https://www.google.com/",
          newsletter_subscribe: "https://www.google.com/"
        },
        sezione_seguici: {
          seguici:"https://www.google.com/",
          designers_italia:"",
          twitter:"https://twitter.com/comunetn",
          medium:"",
          behance:"",
          facebook:"https://www.facebook.com/comuneditrento",
          instagram:"https://www.instagram.com/livetrento/",
          linkedin:"https://www.linkedin.com/company/progetto-trento-smart-city",
          youtube: "https://www.youtube.com/channel/UCOQDc17RT6D7oEGCLUwgPQw"
        },
        sezione_link_utili: {
          media_policy:"https://www.google.com/",
          legal_notes:"https://www.google.com/",
          privacy_policy:"https://www.google.com/",
          mappa_del_sito:"https://www.google.com/"
        },
        abitazione: "https://servizi.comune.trento.it/Argomenti/Abitazione",
        istruzione:"https://servizi.comune.trento.it/Argomenti/Istruzione",
        procedure_elettorali_e_voto:"https://servizi.comune.trento.it/Argomenti/Procedura-elettorale-e-voto",
        tutti_gli_argomenti:"https://servizi.comune.trento.it/Argomenti"
      }
    }
  },
  getters: {
    user: state => {
      return state.user;
    },
    fiscalCode: state => {
      return state.user.codiceFiscale;
    },
    comune: state => {
      return state.comune;
    },
    locales: state => {
      return state.locales;
    },
    api_url: state => {
      return state.api_url;
    },
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    setUser: ({commit, state}, newUser) => {
      commit('SET_USER', newUser);
      return state.user;
    },
  },
});
