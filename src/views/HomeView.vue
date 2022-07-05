<template>
  <h1>This is an home page</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'HomePage',
})
export default class HomeView extends Vue {}
</script>
