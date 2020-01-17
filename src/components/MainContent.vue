<template>
    <main style="padding-top: 0px;">
        <section id="area-riservata">
            <div class="section  section-user-header py-5">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2 position-static">
                            <h1 class="section-background-header">Lista Famiglia</h1>
                            <Globo></Globo>
                        </div>
                    </div>

                    <div class="row">

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
  import Globo from './Globo';

  export default {
    name: 'Main',
    components: {
      Globo,
    },
  };
</script>

<style scoped>

</style>
