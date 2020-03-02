<template>
    <section id="area-riservata">
        <div v-if="user" class="section section-background-header section-user-header py-5">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 position-static">
                        <h4 v-if="user.sesso === 'M'" class="text-center">Bentornato {{user.nome}}
                            {{user.cognome}}!</h4>
                        <h4 v-else class="text-center">Bentornata {{user.nome | camelcase}} {{user.cognome |
                            camelcase}}!</h4>
                        <div class="row mr-xl-2 user-settings d-none d-sm-block">
                            <div class="col-12 col-sm-6 offset-sm-3 col-md-12 offset-md-0">
                                <div class="d-flex justify-content-center">
                                    <div class="pr-4">
                                        <router-link v-bind:to="'profile'" class="d-none d-lg-block">
                                            <span>Profilo</span>
                                            <svg class="icon icon-primary icon-xs right">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-settings"></use>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="pl-4">
                                        <a href="#" @click="logout">
                                            <span>Logout</span>
                                            <svg class="icon icon-primary icon-xs right">
                                                <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- d-none d-sm-block d-md-none -->
                        <div class="nav-tabs-hidescroll mt-4 mt-md-5 d-none d-sm-block">
                            <ul class="nav nav-tabs auto no-border no-background" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link text-primary active" id="pratiche-tab" data-toggle="tab"
                                       href="#pratiche"
                                       role="tab" aria-controls="tab1" aria-selected="true">Le mie pratiche</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" id="pagamenti-tab" data-toggle="tab"
                                       href="#pagamenti"
                                       role="tab" aria-controls="tab2" aria-selected="false">Pagamenti</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" id="documenti-tab" data-toggle="tab"
                                       href="#documenti"
                                       role="tab" aria-controls="tab3" aria-selected="false">Documenti</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" id="messaggi-tab" data-toggle="tab"
                                       href="#messaggi"
                                       role="tab" aria-controls="tab4" aria-selected="false">Messaggi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" id="scadenze-tab" data-toggle="tab"
                                       href="#scadenze"
                                       role="tab" aria-controls="tab5" aria-selected="false">Scadenze</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <router-view></router-view>
                <div class="row d-none d-sm-block">
                    <div class="col">
                        <!-- prettier-ignore -->
                        <div class="tab-content mt-5 mt-md-3" id="myTabContent">
                            <div class="tab-pane fade show active" id="pratiche" role="tabpanel"
                                 aria-labelledby="pratiche-tab">
                                <div class="row pt-md-5">
                                    <div class="col d-lg-inline-flex">
                                        <h2>Le mie pratiche</h2>
                                        <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton-pratiche" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                Stato della pratica
                                                <span class="badge badge-light">4</span>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-pratiche">
                                                <a class="dropdown-item d-flex justify-content-between align-items-center"
                                                   href="#">
                                                    <span>in bozza</span>
                                                    <span class="badge badge-light">4</span>
                                                </a>
                                                <a class="dropdown-item" href="#">inviate</a>
                                                <a class="dropdown-item" href="#">in elaborazione</a>
                                                <a class="dropdown-item" href="#">accettate</a>
                                                <a class="dropdown-item" href="#">rifiutate</a>
                                                <a class="dropdown-item" href="#">da integrare</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="table-responsive my-5 shadow">
                                                <table class="table mb-0 bg-white">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            <span>Servizio</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col">
                                                            <span>Categoria</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col"><span>Protocollo</span></th>
                                                        <th scope="col"><span>Data</span></th>
                                                        <th scope="col">&nbsp;</th>
                                                        <th scope="col"><span>Cancella</span></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td class="align-middle">certificato di nascita</td>
                                                        <td class="align-middle">Anagrafe</td>
                                                        <td class="align-middle">hi6j2j5h6jrs9485d</td>
                                                        <td class="align-middle">10/02/2019</td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento TARI</td>
                                                        <td class="align-middle">Riscossione tasse</td>
                                                        <td class="align-middle">h34kr3j4h3jh3k4tr</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento contravvenzione</td>
                                                        <td class="align-middle">Attività amministrativa</td>
                                                        <td class="align-middle">lk34kl3k309dmk4sd</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <nav class="pagination-wrapper justify-content-center"
                                                 aria-label="Esempio di navigazione della pagina">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                                            </svg>
                                                            <span class="sr-only">Pagina precedente</span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-current="page">1</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link focus--mouse" href="#">3</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <span class="sr-only">Pagina successiva</span>
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pagamenti" role="tabpanel" aria-labelledby="pagamenti-tab">

                                <Pagamenti></Pagamenti>
                            </div>

                            <div class="tab-pane fade" id="documenti" role="tabpanel" aria-labelledby="documenti-tab">
                                <Documenti></Documenti>
                            </div>

                            <div class="tab-pane fade" id="messaggi" role="tabpanel" aria-labelledby="messaggi-tab">
                                <div class="row pt-md-5">
                                    <div class="col d-lg-inline-flex">
                                        <h2>Messaggi</h2>
                                        <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton-messaggi" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                Stato dei messaggi
                                                <span class="badge badge-light">4</span>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-messaggi">
                                                <a class="dropdown-item d-flex justify-content-between align-items-center"
                                                   href="#">
                                                    <span>in bozza</span>
                                                    <span class="badge badge-light">4</span>
                                                </a>
                                                <a class="dropdown-item" href="#">inviate</a>
                                                <a class="dropdown-item" href="#">in elaborazione</a>
                                                <a class="dropdown-item" href="#">accettate</a>
                                                <a class="dropdown-item" href="#">rifiutate</a>
                                                <a class="dropdown-item" href="#">da integrare</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="table-responsive my-5 shadow">
                                                <table class="table mb-0 bg-white">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            <span>Servizio</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col">
                                                            <span>Categoria</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col"><span>Protocollo</span></th>
                                                        <th scope="col"><span>Data</span></th>
                                                        <th scope="col">&nbsp;</th>
                                                        <th scope="col"><span>Cancella</span></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td class="align-middle">certificato di nascita</td>
                                                        <td class="align-middle">Anagrafe</td>
                                                        <td class="align-middle">hi6j2j5h6jrs9485d</td>
                                                        <td class="align-middle">10/02/2019</td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento TARI</td>
                                                        <td class="align-middle">Riscossione tasse</td>
                                                        <td class="align-middle">h34kr3j4h3jh3k4tr</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento contravvenzione</td>
                                                        <td class="align-middle">Attività amministrativa</td>
                                                        <td class="align-middle">lk34kl3k309dmk4sd</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <nav class="pagination-wrapper justify-content-center"
                                                 aria-label="Esempio di navigazione della pagina">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                                            </svg>
                                                            <span class="sr-only">Pagina precedente</span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-current="page">1</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link focus--mouse" href="#">3</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <span class="sr-only">Pagina successiva</span>
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="scadenze" role="tabpanel" aria-labelledby="scadenze-tab">
                                <div class="row pt-md-5">
                                    <div class="col d-lg-inline-flex">
                                        <h2>Scadenze</h2>
                                        <div class="dropdown ml-lg-5 mt-4 mt-lg-0">
                                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton-scadenze" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                Stato delle scadenze
                                                <span class="badge badge-light">4</span>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-scadenze">
                                                <a class="dropdown-item d-flex justify-content-between align-items-center"
                                                   href="#">
                                                    <span>in bozza</span>
                                                    <span class="badge badge-light">4</span>
                                                </a>
                                                <a class="dropdown-item" href="#">inviate</a>
                                                <a class="dropdown-item" href="#">in elaborazione</a>
                                                <a class="dropdown-item" href="#">accettate</a>
                                                <a class="dropdown-item" href="#">rifiutate</a>
                                                <a class="dropdown-item" href="#">da integrare</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="table-responsive my-5 shadow">
                                                <table class="table mb-0 bg-white">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            <span>Servizio</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col">
                                                            <span>Categoria</span>
                                                            <svg class="icon icon-xs">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                                            </svg>
                                                        </th>
                                                        <th scope="col"><span>Protocollo</span></th>
                                                        <th scope="col"><span>Data</span></th>
                                                        <th scope="col">&nbsp;</th>
                                                        <th scope="col"><span>Cancella</span></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td class="align-middle">certificato di nascita</td>
                                                        <td class="align-middle">Anagrafe</td>
                                                        <td class="align-middle">hi6j2j5h6jrs9485d</td>
                                                        <td class="align-middle">10/02/2019</td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento TARI</td>
                                                        <td class="align-middle">Riscossione tasse</td>
                                                        <td class="align-middle">h34kr3j4h3jh3k4tr</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="align-middle">pagamento contravvenzione</td>
                                                        <td class="align-middle">Attività amministrativa</td>
                                                        <td class="align-middle">lk34kl3k309dmk4sd</td>
                                                        <td class="align-middle"></td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-secondary btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                                                                </svg>
                                                                <span>Dettagli</span>
                                                            </a>
                                                        </td>
                                                        <td class="align-middle">
                                                            <a href="#" class="btn btn-danger btn-xs btn-icon"
                                                               role="button" aria-disabled="true">
                                                                <svg class="icon icon-white">
                                                                    <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-close-big"></use>
                                                                </svg>
                                                                <span>Elimina</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <nav class="pagination-wrapper justify-content-center"
                                                 aria-label="Esempio di navigazione della pagina">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
                                                            </svg>
                                                            <span class="sr-only">Pagina precedente</span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-current="page">1</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link focus--mouse" href="#">3</a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <span class="sr-only">Pagina successiva</span>
                                                            <svg class="icon icon-primary">
                                                                <use xlink:href="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row d-block d-xs-none">
                    <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4 d-block d-sm-none mt-4 mt-md-5">
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-mail"></use>
                                </svg>
                                <h4 class="card-title">
                                    Messaggi
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>
                                        Messaggi e notifiche dal Comune sullo stato delle tue pratiche
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-horn"></use>
                                </svg>
                                <h4 class="card-title">Scadenze</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>date da ricordare e scadenze relative ai servizi comunali</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-folder"></use>
                                </svg>
                                <h4 class="card-title">Le mie pratiche</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>tutti i servizi che hai richiesto o attivato presso questo Ente</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-file"></use>
                                </svg>
                                <h4 class="card-title">I miei documenti</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>certificati e documenti rilasciati dall'Ente raccolti in modo comodo e facilmente
                                        consultabile</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-teaser card-column shadow my-3 rounded">
                            <div class="card-header pl-0">
                                <svg class="icon">
                                    <use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-card"></use>
                                </svg>
                                <h4 class="card-title">I miei pagamenti</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>tutti i pagamenti su pagoPa verso questo Ente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import Documenti from './Documenti';
  import Pagamenti from './Pagamenti';

  export default {
    name: 'PersonalArea',
    components: {Documenti, Pagamenti},
    data() {
      return {
        user: null,
      };
    },
    beforeMount() {
      this.user = this.$store.state.user;
      if (!this.user) {
        this.$router.push('login');
      }
    },
    methods: {
      logout() {
        this.user = null;
        this.$store.commit('SET_USER', null);
        this.$router.push('');
      },
    },
  };
</script>

<style scoped>

</style>
