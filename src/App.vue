<template>
  <div id="app" class="flex-center">
    <Header></Header>
    <div class="inner flex-center">
      <Main>
        <router-view />
      </Main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  components: {
    Header,
    Main
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.inner {
  width: 70%;
  background-color: rgba(211, 211, 211, 0.24);
}
</style>

<style lang="scss">
/* リセット css */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input[type="submit"],
input[type="button"] {
  border-radius: 0;
  -webkit-box-sizing: content-box;
  -webkit-appearance: button;
  appearance: button;
  border: none;
  box-sizing: border-box;
  &::-webkit-search-decoration {
    display: none;
  }
  &::focus {
    outline-offset: -2px;
  }
}

.flex {
  display: flex;
  align-items: flex-start;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>