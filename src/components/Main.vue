<template>
  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.main {
  flex-basis: calc(100% - 17rem);
  width: 100%;
  height: 90vh;
  padding: 5rem;
}
</style>