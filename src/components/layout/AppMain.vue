<template>
  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Main',
})
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  padding: 25px;
}
</style>
