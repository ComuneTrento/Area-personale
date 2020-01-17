<template>
    <div id="app">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
  window.__PUBLIC_PATH__ = '';
  import Header from './components/Header';
  import MainContent from './components/MainContent';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      Footer,
      MainContent,
      Header,
    },
  };
</script>

<style>
  @import 'assets/css/bootstrap-italia.min.css';
  @import 'assets/css/fonts.css';

</style>
