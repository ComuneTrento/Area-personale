<template>
    <div class="cookiebar">
        <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br>Proseguendo nella navigazione accetti
            l’utilizzo dei cookie.</p>
        <div class="cookiebar-buttons" id="ciao">
            <a href="https://servizi.comune.trento.it/openpa/cookie" class="cookiebar-btn">Informazioni<span class="sr-only">cookies</span></a>
            <button data-accept="cookiebar" class="cookiebar-btn cookiebar-confirm">Accetto<span class="sr-only"> i cookies</span>
            </button>
        </div>
        <img data-occookieconsent="accepted" src="">
    </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'CookieBar',
    data() {
      return {
        whiteListCookies: [],
      };
    },
    mounted() {
      if (!this.getCookies().includes('cookies_consent')){
        this.clearCookies();
      } else {
        this.enableJs()
      }
    },
    methods: {
      getCookies() {
        return this.$cookies.keys()
      },
      clearCookies() {
        this.$cookies.keys().forEach(cookie => {
            this.$cookies.remove(cookie, '*', 'localhost');
            this.$cookies.remove(cookie, '/', 'localhost');
        })
      },
      enableJs() {
        $('img[data-occookieconsent="accepted"]').each(function () {
          $(this).attr('src', $(this).attr('data-src'))
        });
        $('script[type="text/plain"][data-occookieconsent="accepted"]').each(function () {
          // eslint-disable-next-line no-console
          console.log($(this).attr('src'))
          if ($(this).attr('src')) {
            // eslint-disable-next-line no-useless-escape
            $(this).after('<script type="text/javascript" src="' + $(this).attr('src') + '"><\/script>')
          } else {
            // eslint-disable-next-line no-useless-escape
            $(this).after('<script type="text/javascript">' + $(this).html() + '<\/script>')
          }
          $(this).empty()
        });
        $('iframe[data-occookieconsent="accepted"]').each(function () {
          $(this).attr('src', $(this).attr('data-src'))
        });
        $('embed[data-occookieconsent="accepted"]').each(function () {
          $(this).replaceWith($(this).attr('src', $(this).attr('data-src'))[0].outerHTML)
        });
        $('object[data-occookieconsent="accepted"]').each(function () {
          $(this).replaceWith($(this).attr('data', $(this).attr('data-data'))[0].outerHTML)
        });
        $('link[data-occookieconsent="accepted"]').each(function () {
          $(this).attr('href', $(this).attr('data-href'))
        })
      }
    }
  };
</script>

<style scoped>

</style>
