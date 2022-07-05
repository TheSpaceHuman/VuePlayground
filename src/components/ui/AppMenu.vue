<template>
  <a-menu mode="horizontal">
    <a-menu-item v-for="item in items" :key="item.title">
      <router-link :to="item.url">{{ item.title }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export interface IMenuItem {
  url: string;
  title: string;
}

@Options({
  name: 'Menu',
  computed: {
    items(): IMenuItem[] {
      return this.$store.getters['navigations/menu'];
    },
  },
})
export default class AppMenu extends Vue {}
</script>
