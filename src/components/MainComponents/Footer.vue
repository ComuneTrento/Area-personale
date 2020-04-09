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
                                        <h2 class="no_toc">{{$t('comune')}}</h2>
                                        <h3 class="no_toc d-none d-md-block">
                                            {{$t('descrizione_comune')}}
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
                                <a v-if="comune.links.sezione_amministrazione.amministrazione" v-bind:href="comune.links.sezione_amministrazione.amministrazione" v-bind:title="$t('vai_alla_pagina') + $t('amministrazione')"> {{$t('amministrazione')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li>
                                        <a v-if="comune.links.sezione_amministrazione.giunta_e_consiglio" class="list-item" v-bind:href="comune.links.sezione_amministrazione.giunta_e_consiglio" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.amministrazione.giunta_e_consiglio')">{{$t('footer.sezioni.amministrazione.giunta_e_consiglio')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_amministrazione.aree_di_competenza" class="list-item" v-bind:href="comune.links.sezione_amministrazione.aree_di_competenza" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.amministrazione.aree_competenza')">{{$t('footer.sezioni.amministrazione.aree_competenza')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_amministrazione.dipendenti" class="list-item" v-bind:href="comune.links.sezione_amministrazione.dipendenti" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.amministrazione.dipendenti')">{{$t('footer.sezioni.amministrazione.dipendenti')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_amministrazione.luoghi" class="list-item" v-bind:href="comune.links.sezione_amministrazione.luoghi" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.amministrazione.luoghi')">{{$t('footer.sezioni.amministrazione.luoghi')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_amministrazione.associazioni_e_societa_partecipate" class="list-item" v-bind:href="comune.links.sezione_amministrazione.associazioni_e_societa_partecipate" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.amministrazione.associazioni_e_società_partecipate')">{{$t('footer.sezioni.amministrazione.associazioni_e_società_partecipate')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_servizi.servizi" v-bind:href="comune.links.sezione_servizi.servizi" v-bind:title="$t('vai_alla_pagina') + $t('servizi')">{{$t('servizi')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.pagamenti" class="list-item" v-bind:href="comune.links.sezione_servizi.pagamenti" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.pagamenti')">{{$t('footer.sezioni.servizi.pagamenti')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.supporto" class="list-item" v-bind:href="comune.links.sezione_servizi.supporto" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.sostegno')">{{$t('footer.sezioni.servizi.sostegno')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.domande_e_iscrizioni" class="list-item" v-bind:href="comune.links.sezione_servizi.domande_e_iscrizioni" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.domande_e_iscrizioni')">{{$t('footer.sezioni.servizi.domande_e_iscrizioni')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.segnalazioni" class="list-item" v-bind:href="comune.links.sezione_servizi.segnalazioni"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.segnalazioni')">{{$t('footer.sezioni.servizi.segnalazioni')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.autorizzazioni_e_concessioni" class="list-item" v-bind:href="comune.links.sezione_servizi.autorizzazioni_e_concessioni"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.autorizzazioni_e_concessioni')">{{$t('footer.sezioni.servizi.autorizzazioni_e_concessioni')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_servizi.certificati_e_dichiarazioni" class="list-item" v-bind:href="comune.links.sezione_servizi.certificati_e_dichiarazioni"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.servizi.certificati_e_dichiarazioni')">{{$t('footer.sezioni.servizi.certificati_e_dichiarazioni')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_novita.novita" v-bind:href="comune.links.sezione_novita.novita" v-bind:title="$t('vai_alla_pagina') + $t('novita')">{{$t('novita')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li>
                                        <a v-if="comune.links.sezione_novita.notizie" class="list-item" v-bind:href="comune.links.sezione_novita.notizie" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.novita.notizie')">{{$t('footer.sezioni.novita.notizie')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_novita.eventi" class="list-item" v-bind:href="comune.links.sezione_novita.eventi" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.novita.eventi')">{{$t('footer.sezioni.novita.eventi')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_novita.comunicati_stampa" class="list-item" v-bind:href="comune.links.sezione_novita.comunicati_stampa" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.novita.comunicati_stampa')">{{$t('footer.sezioni.novita.comunicati_stampa')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <h4>
                                <a v-if="comune.links.sezione_documenti.documenti" v-bind:href="comune.links.sezione_documenti.documenti" v-bind:title="$t('vai_alla_pagina') + $t('documenti')">{{$t('documenti')}}</a>
                            </h4>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li>
                                        <a v-if="comune.links.sezione_documenti.progetti_e_attivita" class="list-item" v-bind:href="comune.links.sezione_documenti.progetti_e_attivita" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.documenti.progetti_e_attivita')">{{$t('footer.sezioni.documenti.progetti_e_attivita')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_documenti.determine_delibere_e_ordinanze" class="list-item" v-bind:href="comune.links.sezione_documenti.determine_delibere_e_ordinanze"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.documenti.determine_delibere_e_ordinanze')">{{$t('footer.sezioni.documenti.determine_delibere_e_ordinanze')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_documenti.bandi" class="list-item" v-bind:href="comune.links.sezione_documenti.bandi" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.documenti.bandi')">{{$t('footer.sezioni.documenti.bandi')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_documenti.concorsi" class="list-item" v-bind:href="comune.links.sezione_documenti.concorsi" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.documenti.consorsi')">{{$t('footer.sezioni.documenti.consorsi')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_documenti.albo_pretorio" class="list-item" v-bind:href="comune.links.sezione_documenti.albo_pretorio" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.documenti.albo_pretorio')">{{$t('footer.sezioni.documenti.albo_pretorio')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-4 border-white border-top">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_amministrazione_trasparente.amministrazione_trasparente"  v-bind:href="comune.links.sezione_amministrazione_trasparente.amministrazione_trasparente" v-bind:title="$t('vai_alla_pagina') + $t('amministrazione_trasparente')">{{$t('amministrazione_trasparente')}}</a>
                            </h4>
                            <p>{{$t('footer.sezioni.amministrazione_trasparente.testo')}}</p>
                        </div>
                        <div class="col-lg-3 col-md-3 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_contatti.contatti"  v-bind:href="comune.links.sezione_contatti.contatti" v-bind:title="$t('vai_alla_pagina') + $t('contatti')">{{$t('contatti')}}</a>
                            </h4>
                            <p>
                                <strong>{{$t('comune')}}</strong><br>
                                {{comune.indirizzo}}
                            </p>
                            <div class="link-list-wrapper">
                                <ul class="footer-list link-list clearfix">
                                    <li>
                                        <a v-if="comune.links.sezione_contatti.pec"  class="list-item" v-bind:href="'mailto:' + comune.links.sezione_contatti.pec"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.contatti.pec')">{{$t('footer.sezioni.contatti.pec')}}</a>
                                    </li>
                                    <li>
                                        <a v-if="comune.links.sezione_contatti.urp"  class="list-item" v-bind:href="'mailto:' + comune.links.sezione_contatti.urp"
                                           v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.contatti.urp')">{{$t('footer.sezioni.contatti.urp')}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_newsletter.newsletter" v-bind:href="comune.links.sezione_newsletter.newsletter" v-bind:title="$t('vai_alla_pagina') + $t('newsletter')">{{$t('newsletter')}}</a>
                            </h4>
                            <form v-if="comune.links.sezione_newsletter.newsletter_subscribe" v-bind:action="comune.links.sezione_newsletter.newsletter_subscribe" class="form-newsletter" method="post">
                                <label class="text-white font-weight-semibold active" for="input-newsletter"
                                       style="transition: none 0s ease 0s;">{{$t('footer.sezioni.newsletter.iscriviti_per_ricevere')}}</label>
                                <input class="form-control" id="input-newsletter" name="input-newsletter"
                                       placeholder="mail@example.com" type="email">
                                <button class="btn btn-primary btn-icon" type="submit">
                                    <svg class="icon icon-white">
                                        <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use>
                                    </svg>
                                    <span>{{$t('footer.sezioni.newsletter.iscriviti')}}</span>
                                </button>
                            </form>
                        </div>
                        <div class="col-lg-3 col-md-3 pb-2">
                            <h4>
                                <a v-if="comune.links.sezione_seguici.seguici" v-bind:href="comune.links.sezione_seguici.seguici" v-bind:title="$t('vai_alla_pagina') + $t('seguici_su')">{{$t('seguici_su')}}</a>
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
        <div class="it-footer-small-prints clearfix">
            <div class="container">
                <h3 class="sr-only">{{$t('link_utili')}}</h3>
                <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
                    <li class="list-inline-item">
                        <a href="#" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.link_utili.media_policy')">{{$t('footer.sezioni.link_utili.media_policy')}}</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.link_utili.legal_notes')">{{$t('footer.sezioni.link_utili.legal_notes')}}</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.link_utili.privacy_policy')">{{$t('footer.sezioni.link_utili.privacy_policy')}}</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" v-bind:title="$t('vai_alla_pagina') + $t('footer.sezioni.link_utili.mappa_del_sito')">{{$t('footer.sezioni.link_utili.mappa_del_sito')}}</a>
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
