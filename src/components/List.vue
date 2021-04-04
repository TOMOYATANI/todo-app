<template>
  <div class="tasks">
    <ul class="tasks__list">
      <li class="tasks__item" v-for="task in $store.getters.tasks" :key="task.key">
        <input type="checkbox" :id="task.key" :value="task.id" v-model="doneTaskIds" />
        {{ task.name }}
      </li>
    </ul>
    <div class="form">
      <form class="form__body" @submit.prevent="addTask">
        <input type="text" v-model="newTaskName" plabceholder="新しいタスク" class="form__input" />
        <input type="submit" class="form__submit" />
      </form>
      <input type="button" class="form__done" value="タスクを完了にする" @click.prevent="doneTasks" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskName: "",
      doneTaskIds: []
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTaskName);
      this.newTaskName = "";
    },
    doneTasks() {
      this.$store.dispatch("doneTasks", this.doneTaskIds);
      this.doneTaskIds.length = 0;
    }
  }
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

.tasks {
  margin-top: 3rem;
  &__list {
    font-weight: bold;
    list-style: none;
  }
  &__item {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #dedede;
  }
  &__item:not(:first-child) {
    margin-top: 1.25rem;
  }
}
.form {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  &__body {
    display: flex;
    width: 80%;
    border: 1px solid #dedede;
  }
  &__input {
    flex: 1;
    padding: 0 0.5rem;
    border: none;
    outline: none;
  }
  &__submit {
    width: 180px;
    background-color: #000000c7;
    color: #fff;
    padding: 0.5rem 0;
  }
  &__done {
    width: 180px;
    background-color: #000000c7;
    color: #fff;
    padding: 0.5rem 0;
    border: 1px solid #fff;
    margin-left: 3rem;
  }
}
</style>