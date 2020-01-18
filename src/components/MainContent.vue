<template>
    <main style="padding-top: 0px;">
        <section id="area-riservata">
            <div class="section  section-user-header py-5">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2 position-static">
                            <router-view></router-view>
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
  export default {
    name: 'MainComponent',
  };
</script>

<style scoped>

</style>
