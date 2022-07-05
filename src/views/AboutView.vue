<template>
  <h1>This is an about page</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'AboutPage',
})
export default class AboutView extends Vue {}
</script>
