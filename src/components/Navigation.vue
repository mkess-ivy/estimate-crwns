<template>
    <div id="nav">
    <div class="wrapper">
        <div class="project_title">Project Estimator</div>
        <div class="project_desc">This tool allows us to see all options of services available and creates an estimate proposal at completion.  Please select a set of packages to begin the proposal process.</div>
        <div class="frow justify-start">
            <router-link to="/">Home</router-link>
            <router-link to="/custom-proposal">Custom Proposals</router-link>
            <router-link to="/tier1">Tier 1 Packages</router-link>
            <router-link to="/tier2">Tier 2 Packages</router-link>
            <router-link to="/brand-foundation">Brand Foundation</router-link>
            <router-link to="/brand-mgmt">Brand Management</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation', 
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";
@import "@/scss/_components.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;
    display: block;
    width: 33.3%;
    padding: 75px;
    text-align: center;
    font-family: $alt_font;
    font-size: 42px;
    line-height: 45px;
    border:0;

    &.router-link-exact-active {
      color: $green;
    }
    &.router-link-exact-hover {
      color: $green;
      text-decoration: none;
    }

    &:hover {
        text-decoration: none;
        color: $green;
    }
  }
}

.project_title {
    font-size: 32px;
    padding-bottom: 25px;

    @include tablet {
        font-size: 44px;
    }
}
.project_desc {
    width: 75%;
    padding-bottom: 75px;
    font-size: 18px;

    @include tablet {
        font-size: 22px;
        width: 55%;
    }
}
</style>