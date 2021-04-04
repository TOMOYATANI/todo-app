import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    nextTaskId: 0,
  },
  mutations: {
    addTask(state, name) {
      state.tasks.push({
        id: state.nextTaskId,
        name: name,
        isDone: false,
      });
      state.nextTaskId++;
    },
    doneTasks(state, ids) {
      ids.forEach((id) => {
        state.tasks[id].isDone = true;
      });
    },
  },
  actions: {
    addTask({ commit }, name) {
      commit("addTask", name);
    },
    doneTasks({ commit }, ids) {
      commit("doneTasks", ids);
    },
  },
  modules: {},
  getters: {
    tasks(state) {
      return state.tasks.filter((task) => {
        return task.isDone == false;
      });
    },
  },
});
