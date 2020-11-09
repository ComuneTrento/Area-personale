import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate'


export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    paths: ['spidInfo'],
  })],
  state: {
    locales: [
      {"locale": "it", "nome": "ITA", "api": "ita-IT"},
      {"locale": "en", "nome": "ENG", "api": "eng-EN"}
    ],
    api_url: "https://servizi.comune.trento.it",
    account: null,
    completeName: null,
    spidInfo: null,
    comune: {
      indirizzo: "via Belenzani, 19 - 38122 Trento",
      telefono: "+39 0461 884111",
      fax:  "+39 0461 884457",
      email: "comurp@comune.trento.it",
      pec: "protocollo@pec.comune.trento.it",
      sito: "www.comune.trento.it",
      p_iva: "P.IVA 00355870221",
      cf: "C.F. 00355870221",
      links: {
        comune: "https://www.comune.trento.it/",
        provincia: "http://www.provincia.tn.it/home/",
        sezione_amministrazione: {
          url: "https://www.comune.trento.it/Comune/",
          items: []
        },
        sezione_servizi: {
          url: "https://servizi.comune.trento.it/Servizi",
          items: [
            {name: "agricoltura", url: "https://servizi.comune.trento.it/Servizi/(view)/Agricoltura"},
            {name: "ambiente", url: "https://servizi.comune.trento.it/Servizi/(view)/Ambiente"},
            {
              name: "anagrafe_e_stato_civile",
              url: "https://servizi.comune.trento.it/Servizi/(view)/Anagrafe%20e%20stato%20civile"
            },
            {name: "appalti_pubblici", url: "https://servizi.comune.trento.it/Servizi/(view)/Appalti%20pubblici"},
            {
              name: "attivita_produttive_e_commercio",
              url: "https://servizi.comune.trento.it/Servizi/(view)/Attivit%C3%A0%20produttive%20e%20commercio"
            },
            {name: "vedi_tutto", url: "https://servizi.comune.trento.it/Servizi"}
          ]
        },
        sezione_novita: {
          url: "https://www.comune.trento.it/Comunicazione/Il-Comune-informa",
          items: []
        },
        sezione_documenti: {
          url: "https://servizi.comune.trento.it/Documenti-e-dati",
          items: [
            {name: "modulistica", url: "https://servizi.comune.trento.it/Documenti-e-dati/Modulistica"},
            {name: "documenti_funzionamento_interno", url: "https://servizi.comune.trento.it/Documenti-e-dati/Documenti-funzionamento-interno"},
            {name: "normative", url: "https://servizi.comune.trento.it/Documenti-e-dati/Normative"},
            {name: "documenti_tecnici_supporto", url: "https://servizi.comune.trento.it/Documenti-e-dati/Documenti-tecnici-di-supporto"}
          ]
        },
        sezione_informazioni: {
          urp: "https://servizi.comune.trento.it/Amministrazione/Strutture/URP"
        },
        sezione_seguici: {
          designers_italia: "",
          twitter: "https://twitter.com/comunetn",
          medium: "",
          behance: "",
          facebook: "https://www.facebook.com/comuneditrento",
          instagram: "https://www.instagram.com/livetrento/",
          linkedin: "https://www.linkedin.com/company/progetto-trento-smart-city",
          youtube: "https://www.youtube.com/channel/UCOQDc17RT6D7oEGCLUwgPQw"
        },
        informazioni: {
          informazioni: ""
        },
        sezione_link_utili: [
          {name: "privacy", url: "https://www.comune.trento.it/Comunicazione/In-evidenza/Accesso-e-privacy/Privacy"},
          {name: "legal_notes", url: "https://www.comune.trento.it/Comunicazione/In-evidenza/Copyright"}
        ],
        main_nav: [
          // {name: "amministrazione", url: "https://www.comune.trento.it/Comune/"},
          // {name: "novita", url: "https://www.comune.trento.it/Comunicazione/Il-Comune-informa"},
          // {name: "documenti", url: "https://servizi.comune.trento.it/Documenti-e-dati"}
          {name: "servizi", url: "https://servizi.comune.trento.it/Servizi"},
          {name: "", url: "#"},
          {name: "", url: "#"},
          {name: "", url: "#"},

        ],
        secondary_nav: [
          {name: "abitazione", url: "https://servizi.comune.trento.it/Argomenti/Abitazione/"},
          {name: "istruzione", url: "https://servizi.comune.trento.it/Argomenti/Istruzione"},
          {
            name: "procedura_elettorale_e_voto",
            url: "https://servizi.comune.trento.it/Argomenti/Procedura-elettorale-e-voto"
          },
          {name: "tutti_gli_argomenti", url: "https://servizi.comune.trento.it/Argomenti"}
        ],
      }
    }
  },
  getters: {
    account: state => {
      return state.spidInfo.fiscal_code || null;
    },
    completeName: state => {
      return `${state.spidInfo.name || ''} ${state.spidInfo.surname || ''}`;
    },
    identity_card: state => {
      let ciString = state.spidInfo.id_card.split(" ")

      return {
        "numero": ciString[1],
        "comune_rilascio": ciString[2].replace("COMUNE", ""),
        "data_rilascio": ciString[3],
        "data_scadenza": ciString[4]
      }
    },
    spidInfo: state => {
      return state.spidInfo;
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
    SET_SPID_INFO: (state, spidInfo) => {
      state.spidInfo = spidInfo;
    },
  },
  actions: {},
});
