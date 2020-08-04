<template>
    <div id="app">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
        <CookieBar></CookieBar>
    </div>
</template>

<script>
  import CookieBar from './components/MainComponents/CookieBar';
  import Header from './components/MainComponents/Header';
  import MainContent from './components/MainComponents/MainContent';
  import Footer from './components/MainComponents/Footer';

  export default {
    name: 'app',
    components: {
      CookieBar,
      Footer,
      MainContent,
      Header,
    },
    methods: {
    },
    mounted() {
      this.$http.get('https://area-personale.comune.trento.it/secure/globo/auth').then(result => {
          this.$store.commit('SET_SPID_INFO', result.body);
      }, () => {
          location.reload()
      });
    }
  };
</script>

<style>
    .progress-spinner.progress-spinner-active {
        margin-left: calc(50% - 24px);
    }
</style>


