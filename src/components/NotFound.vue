<template>
    <main style="padding-top: 0px;">
        <section id="briciole" class="container px-4 my-4">
            <div class="row">
                <div class="col px-lg-4">
                    <nav aria-label="breadcrumb" class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/">{{$t('home')}}</router-link>
                                <span class="separator">/</span>
                            </li>
                            <li class="breadcrumb-item active">
                                {{$t('pagina_non_trovata')}}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <section id="intro" class="container px-4 my-4">
            <div class="row">
                <div class="col-lg-7 px-lg-4 py-lg-2">
                    <h1>{{$t('pagina_non_trovata')}}</h1>
                    <p>{{$t('pagina_non_trovata_descrizione')}}</p>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
  export default {
    name: 'Not Found',
  };
</script>

<style scoped>

</style>
