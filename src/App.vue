<template>
  <div id="app">
    <add-task @taskAdded="addNewTask"></add-task>
    <show-tasks v-bind:tasks="tasks"></show-tasks>
        <div @click.prevent="deleteAll()">
      <button>Delete All</button>
    </div>
  </div>
</template>

<script>

import AddTask from './components/addTask.vue';
import showTasks from './components/showTasks.vue';

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
    /**
     * Removes all tasks from the tasks array
     */
    deleteAll() {
      this.tasks = [];
    },
  },
  components: {
    showTasks,
    AddTask,
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
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
</style>
