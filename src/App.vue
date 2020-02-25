<template>
  <div id="app">
    <add-task @taskAdded="addNewTask"></add-task>
    <show-tasks v-bind:tasks="tasks"></show-tasks>
  </div>
</template>

<script>
import ShowTasks from './components/ShowTasks.vue';
import AddTask from './components/AddTask.vue';

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
    ShowTasks,
    AddTask,
  },
};
</script>

<style>
</style>
