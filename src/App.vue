<template>
  <Header />
  <Main />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from '@/components/layout/AppHeader.vue';

import AppFooter from '@/components/layout/AppFooter.vue';
import AppMain from '@/components/layout/AppMain.vue';

@Options({
  components: {
    Header: AppHeader,
    Main: AppMain,
    Footer: AppFooter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
