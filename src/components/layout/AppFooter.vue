<template>
  <footer class="footer">
    <a href="https://github.com/TheSpaceHuman" target="_blank">TheSpaceHuman</a>
  </footer>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Footer',
})
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 25px;
  text-align: center;
}
</style>
