<template>
  <div class="container" id="app">
      <app-header></app-header>
      <div class="text-center"><img alt="Vue logo" src="./assets/logo.png"></div>
      <div class="text-center"><h1>Vue Task List</h1></div>
      <app-add-task @taskAdded="addNewTask"></app-add-task>
      <app-task-list class="list-spacing" v-bind:tasks="tasks"></app-task-list>
      <div class="starter-template" @click.prevent="deleteAll()"> <button class="btn btn-danger">Delete All</button></div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import addTask from './components/addTask.vue';
import TaskList from './components/taskList.vue';

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
    deleteAll() {
      this.tasks = [];
    },
  },
  components: {
    appHeader: Header,
    appAddTask: addTask,
    appTaskList: TaskList,
  },
  mounted() {
    if (localStorage.getItem('tasks')) { this.tasks = JSON.parse(localStorage.getItem('tasks')); }
  },
  watch: {
    tasks: {
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      deep: true,
    },
  },
};

</script>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
  body {
    padding-top: 5rem;
  }
  .starter-template {
    padding: 3rem 1.5rem;
    text-align: center;
  }
  .list-spacing { 
    margin-top: 100px;
    }
</style>
