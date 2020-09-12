<template>
  <div id="app">
    <CustomProposal />
  </div>
</template>

<script>
import CustomProposal from './components/CustomProposal'

export default {
  name: 'App',
  components: {
    CustomProposal
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
