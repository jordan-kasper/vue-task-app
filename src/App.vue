<template>
  <div id="app">
    <div class="container">

    <img alt="Vue logo" src="./assets/logo.png">
    <app-header></app-header>
    <app-add-task @taskAdded="addNewTask"></app-add-task>
    <app-task-list v-bind:tasks="tasks"></app-task-list>
    <div @click.prevent="deleteAll()"> Delete All </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import addTask from './components/addTask.vue'
import TaskList from './components/taskList.vue'

export default {
  name: 'app',
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addNewTask(task) {
      this.tasks.push(task);
    },
    deleteAll(){
      this.tasks = []
    }
  },
  components: {
    appHeader: Header,
    appAddTask: addTask,
    appTaskList: TaskList
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
