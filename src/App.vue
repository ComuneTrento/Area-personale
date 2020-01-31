<template>
    <div id="app">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
        <CookieBar></CookieBar>
    </div>
</template>

<script>
  import CookieBar from './components/CookieBar';
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
  };
</script>

<style>
</style>
