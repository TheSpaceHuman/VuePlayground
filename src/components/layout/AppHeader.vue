<template>
  <header class="header">
    <AppMenu />
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppMenu from '@/components/ui/AppMenu.vue';

@Options({
  name: 'Header',
  components: {
    AppMenu,
  },
})
export default class AppHeader extends Vue {}
</script>
