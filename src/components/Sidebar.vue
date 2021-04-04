<template>
  <aside class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <a class="sidebar__link" href="#">TODOリスト</a>
      </li>
      <li class="sidebar__item">
        <a class="sidebar__link" href="#">このサイトについて</a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  .sidebar {
    position: sticky;
    top: 5rem;
    height: 100%;
    min-height: calc(100vh - 5rem);
    background: #9c9c9c71;
    flex-basis: 17rem;
    width: 17rem;
    &__list {
      padding: 2rem;
      list-style-type: none;
    }
    &__item:not(:first-child) {
      margin-top: 2rem;
    }
    &__link {
      font-size: 1.25rem;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
  }
</style>