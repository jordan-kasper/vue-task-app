<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
      <b-row>
        <b-col>
          <b-jumbotron
            header="Vue Todo App"
            lead="A todo app built with Bootstrap v4 and Vue.js"
          >
            <p>Add a task with a priority below</p>
            <app-add-task id="add" @taskAdded="addNewTask"></app-add-task>
          </b-jumbotron>
        </b-col>
        <b-col>
          <app-show-tasks v-bind:tasks="tasks"></app-show-tasks>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import addTask from './components/addTask.vue';
import showTasks from './components/showTasks.vue';
import header from './components/header.vue';


export default {
  name: 'App',
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    /**
     * Adds task to tasks array
     *
     * @param {String} task the task passed from addTask component
     */
    addNewTask(task) {
      this.tasks.push(task);
    },
  },
  components: {
    appShowTasks: showTasks,
    appAddTask: addTask,
    appHeader: header,
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  },
};
</script>

<style>
.add {
  margin-left: none;
  padding-left: none;
}
</style>
