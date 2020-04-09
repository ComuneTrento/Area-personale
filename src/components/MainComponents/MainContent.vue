<template>
    <main style="padding-top: 0px;">
        <router-view></router-view>
        <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top back-to-top-small shadow">
            <svg class="icon icon-light"><use xlink:href="bootstrap-italia/dist/svg/sprite.svg#it-arrow-up"></use></svg>
        </a>
    </main>
</template>

<script>
  export default {
    name: 'MainComponent',
  };
</script>

<style scoped>

</style>
