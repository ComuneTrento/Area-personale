<template>
    <div id="app">
        <Header :user="user"></Header>
        <MainContent :user="user"></MainContent>
        <Footer></Footer>
        <CookieBar></CookieBar>
    </div>
</template>

<script>
  import CookieBar from './components/CookieBar';

  window.__PUBLIC_PATH__ = '';
  import Header from './components/Header';
  import MainContent from './components/MainContent';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      CookieBar,
      Footer,
      MainContent,
      Header,
    },
    data() {
      return {
        user: true,
      };
    }
  };

</script>

<style>
    @import 'assets/css/bootstrap-italia.min.css';
    @import 'assets/css/fonts.css.scss';
</style>
