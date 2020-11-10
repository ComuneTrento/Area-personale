<template>
    <footer class="it-footer">
        <div class="it-footer-main">
            <div class="container">
                <section>
                    <div class="row clearfix">
                        <div class="col-sm-12">
                            <div class="it-brand-wrapper">
                                <a href="#">
                                    <svg class="icon">
                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-pa"></use>
                                    </svg>
                                    <div class="it-brand-text">
                                        <h2 class="no_toc">{{$t('titolo')}}</h2>
                                        <h3 class="no_toc d-none d-md-block">
                                            {{$t('sottotitolo')}}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_amministrazione" v-bind:href="comune.links.sezione_amministrazione.url" v-bind:title="$t('vai_alla_pagina') + $t('amministrazione')"> {{$t('amministrazione')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li v-for="(item, index) in comune.links.sezione_amministrazione.items" v-bind:key="'amministrazione_' + index" class="list-item">
                                        <a v-bind:href="item.url" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.amministrazione.${item.name}`)" v-html="$t(`footer.sezioni.amministrazione.${item.name}`)"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_servizi" v-bind:href="comune.links.sezione_servizi.url" v-bind:title="$t('vai_alla_pagina') + $t('servizi')">{{$t('servizi')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li v-for="(item, index) in comune.links.sezione_servizi.items" v-bind:key="'servizi_' + index" class="list-item">
                                        <a v-bind:href="item.url" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.servizi.${item.name}`)" v-html="$t(`footer.sezioni.servizi.${item.name}`)"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_novita" v-bind:href="comune.links.sezione_novita.url" v-bind:title="$t('vai_alla_pagina') + $t('novita')">{{$t('novita')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li v-for="(item, index) in comune.links.sezione_novita.items" v-bind:key="'novita_' + index" class="list-item">
                                        <a v-bind:href="item.url" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.novita.${item.name}`)" v-html="$t(`footer.sezioni.novita.${item.name}`)"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <h4>
                                <a v-if="comune.links.sezione_documenti" v-bind:href="comune.links.sezione_documenti.url" v-bind:title="$t('vai_alla_pagina') + $t('documenti')">{{$t('documenti')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li v-for="(item, index) in comune.links.sezione_documenti.items" v-bind:key="'documenti_' + index" class="list-item">
                                        <a v-bind:href="item.url" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.documenti.${item.name}`)" v-html="$t(`footer.sezioni.documenti.${item.name}`)"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-4 border-white border-top">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 pb-2">
                            <h4><a>{{$t('footer.sezioni.informazioni.informazioni')}}</a></h4>
                            <div class="clearfix">
                                <p>{{$t('footer.sezioni.informazioni.testo')}}</p>
                                <p>
                                    <a v-bind:href="comune.links.sezione_informazioni.urp" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.informazioni.urp`)" v-html="$t(`footer.sezioni.informazioni.urp`)"></a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 pb-2">
                            <h4>
                                <a>{{$t('contatti')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li v-if="comune.indirizzo">
                                        <a class="list-item" v-bind:href="'http://maps.google.com/maps?q=' +  comune.indirizzo">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-pa"></use></svg>
                                            {{comune.indirizzo}}
                                        </a>
                                    </li>
                                    <li v-if="comune.telefono">
                                        <a class="list-item" v-bind:href="'tel:'+comune.telefono">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-telephone"></use></svg>
                                            {{comune.telefono}}
                                        </a>
                                    </li>
                                    <li v-if="comune.fax">
                                        <a class="list-item" v-bind:href="'tel:'+comune.fax">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-file"></use></svg>
                                            {{comune.fax}}
                                        </a>
                                    </li>
                                    <li v-if="comune.email">
                                        <a class="list-item" v-bind:href="'mailto:'+comune.email">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use></svg>
                                            {{comune.email}}
                                        </a>
                                    </li>
                                    <li v-if="comune.pec">
                                        <a class="list-item" v-bind:href="'mailto:'+comune.pec">
                                            <svg class="icon icon-sm icon-warning"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use></svg>
                                            {{comune.pec}}
                                        </a>
                                    </li>
                                    <li v-if="comune.sito">
                                        <a class="list-item" href="https://www.comune.trento.it">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-link"></use></svg>
                                            www.comune.trento.it
                                        </a>
                                    </li>
                                    <li v-if="comune.p_iva">
                                        <a class="list-item">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-card"></use></svg>
                                            {{comune.p_iva}}
                                        </a>
                                    </li>
                                    <li v-if="comune.cf">
                                        <a class="list-item">
                                            <svg class="icon icon-sm icon-white"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-card"></use></svg>
                                            {{comune.cf}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-4 pb-2">
                            <h4>
                                <a>{{$t('seguici_su')}}</a>
                            </h4>
                            <ul class="list-inline text-left social">
                                <li v-if="comune.links.sezione_seguici.designers_italia" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.designers_italia" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-designers-italia"></use>
                                        </svg>
                                        <span class="sr-only">Designers Italia</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.twitter" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.twitter" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-twitter"></use>
                                        </svg>
                                        <span class="sr-only">Twitter</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.facebook" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.facebook" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-facebook"></use>
                                        </svg>
                                        <span class="sr-only">Facebook</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.instagram" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.instagram" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-instagram"></use>
                                        </svg>
                                        <span class="sr-only">Instagram</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.linkedin" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.linkedin" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-linkedin"></use>
                                        </svg>
                                        <span class="sr-only">Linkedin</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.youtube" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.youtube" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-youtube"></use>
                                        </svg>
                                        <span class="sr-only">YouTube</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.medium" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.medium" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-medium"></use>
                                        </svg>
                                        <span class="sr-only">Medium</span></a>
                                </li>
                                <li v-if="comune.links.sezione_seguici.behance" class="list-inline-item">
                                    <a class="p-2 text-white" v-bind:href="comune.links.sezione_seguici.behance" target="_blank">
                                        <svg class="icon icon-sm icon-white align-top">
                                            <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-behance"></use>
                                        </svg>
                                        <span class="sr-only">Behance</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div v-if="comune.links.sezione_link_utili" class="it-footer-small-prints clearfix">
            <div class="container">
                <h3 class="sr-only">{{$t('link_utili')}}</h3>
                <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
                    <li v-for="(item, index) in comune.links.sezione_link_utili" v-bind:key="index" class="list-inline-item">
                        <a v-bind:href="item.url" v-bind:title="$t('vai_alla_pagina') + $t(`footer.sezioni.link_utili.${item.name}`)">{{$t(`footer.sezioni.link_utili.${item.name}`)}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>

  export default {
    name: 'Footer',
    data() {
      return {
        comune: this.$store.getters.comune,
      };
    },
  };
</script>

<style scoped>

</style>
