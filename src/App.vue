<template>
  
  <router-view/>
</template>

<style lang="scss">
@import "./scss/_variables.scss";
@import "./scss/_layout.scss";
@import "./scss/_components.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    border: 1px solid;
    width: 33.3%;
    padding: 50px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
