<template>
  <div id="app">
    <CustomProposal />
  </div>
</template>

<script>
import CustomProposal from '@/components/CustomProposal'

export default {
  name: 'App',
  components: {
    CustomProposal
  }
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  @import "../scss/_layout.scss";
  @import "../scss/_components.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
