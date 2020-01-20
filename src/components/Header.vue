<template>
    <div class="it-header-wrapper">
        <div class="it-header-slim-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="it-header-slim-wrapper-content">
                            <a class="d-none d-lg-block navbar-brand" href="#">Provincia autonoma di Trento</a>
                            <div class="nav-mobile">
                                <nav>
                                    <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu4" role="button"
                                       aria-expanded="false" aria-controls="menu4">
                                        <span>Provincia autonoma di Trento</span>
                                        <svg class="icon">
                                            <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="link-list-wrapper collapse" id="menu4">
                                        <ul class="link-list">
                                            <li><a class="list-item" href="#">Link 1</a></li>
                                            <li><a class="list-item active" href="#">Link 2 Active</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="it-header-slim-right-zone">
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                       aria-expanded="false">
                                        <span>ITA</span>
                                        <svg class="icon d-none d-lg-block">
                                            <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="link-list-wrapper">
                                                    <ul class="link-list">
                                                        <li><a class="list-item" href="#"><span>ITA</span></a></li>
                                                        <li><a class="list-item" href="#"><span>ENG</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="it-access-top-wrapper">
                                    <a class="btn btn-primary btn-sm" href="#">Accedi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="it-nav-wrapper">
            <div class="it-header-center-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="it-header-center-content-wrapper">
                                <div class="it-brand-wrapper">
                                    <a href="#">
                                        <svg class="icon">
                                            <use xlink:href="../assets/svg/sprite.svg#it-code-circle"></use>
                                        </svg>
                                        <div class="it-brand-text">
                                            <h2 class="no_toc">Comune di Trento</h2>
                                            <h3 class="no_toc d-none d-md-block">Area personale</h3>
                                        </div>
                                    </a>
                                </div>
                                <div class="it-right-zone">
                                    <div class="it-socials d-none d-md-flex">
                                        <span>Seguici su</span>
                                        <ul>
                                            <li>
                                                <a href="#" aria-label="Facebook" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-facebook"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Github" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-github"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="Twitter" target="_blank">
                                                    <svg class="icon">
                                                        <use xlink:href="/../assets/svg/sprite.svg#it-twitter"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="it-search-wrapper">
                                        <span class="d-none d-md-block">Cerca</span>
                                        <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                                            <svg class="icon">
                                                <use xlink:href="../assets/svg/sprite.svg#it-search"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="it-header-navbar-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!--start nav-->
                            <nav class="navbar navbar-expand-lg has-megamenu">
                                <button class="custom-navbar-toggler" type="button" aria-controls="nav02"
                                        aria-expanded="false" aria-label="Toggle navigation" data-target="#nav02">
                                    <svg class="icon">
                                        <use xlink:href="../assets/svg/sprite.svg#it-burger"></use>
                                    </svg>
                                </button>
                                <div class="navbar-collapsable" id="nav02" style="display: none;">
                                    <div class="overlay" style="display: none;"></div>
                                    <div class="close-div sr-only">
                                        <button class="btn close-menu" type="button"><span class="it-close"></span>close
                                        </button>
                                    </div>
                                    <div class="menu-wrapper">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                                   aria-expanded="false">
                                                    <span>Anagrafica</span>
                                                    <svg class="icon icon-xs">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                                    </svg>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <div class="link-list-wrapper">
                                                        <ul class="link-list">
                                                            <li>
                                                                <h3 class="no_toc">Persone</h3>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/anagrafica/ZNLDLA14P53L378G" replace><span>ADELE ZANELLA </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li><router-link class="list-item"
                                                                             to="/anagrafica/BDARYN15E01L378M" replace><span>RAYEN ABAIDI </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/anagrafica/RCCMRC01T13L378B" replace><span>MIRCO RICCARDI </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/anagrafica/BBAKVN02D21L378N" replace><span>KELVIN KYEI NIMARKO ABABIO </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/anagrafica/RCCCST72L09A952" replace><span>Errore </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                                   aria-expanded="false">
                                                    <span>Famiglia</span>
                                                    <svg class="icon icon-xs">
                                                        <use xlink:href="../assets/svg/sprite.svg#it-expand"></use>
                                                    </svg>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <div class="link-list-wrapper">
                                                        <ul class="link-list">
                                                            <li>
                                                                <h3 class="no_toc">Persone</h3>
                                                            </li>
                                                            <li>
                                                                <router-link class="list-item"
                                                                             to="/famiglia/2028363" replace><span>RAYEN ABAIDI </span><span
                                                                        class="sr-only">current</span></router-link>
                                                            </li>
                                                            <li><router-link class="list-item"
                                                                             to="/famiglia/110995" replace><span>CRISTIAN RICCARDI </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/famiglia/2013284" replace><span>KELVIN KYEI NIMARKO ABABIO </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/famiglia/2023056" replace><span>KEVIN SNAJDER MEJIA ASTAIZA </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                            <li><router-link class="list-item"
                                                                             to="/famiglia/123" replace><span>Errore </span><span
                                                                    class="sr-only">current</span></router-link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/domanda"><span>Domanda Attiva </span><span
                                                        class="sr-only">current</span></router-link>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/nidi">
                                                    <span>Nidi Disponibili </span><span class="sr-only">current</span>
                                                </router-link>
                                            </li>
                                            <li class="nav-item active">
                                                <router-link class="nav-link" to="/icef"><span>Icef </span><span
                                                        class="sr-only">current</span></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>

</style>
