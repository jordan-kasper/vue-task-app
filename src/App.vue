<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <b-jumbotron
            header="Vue Todo App"
            lead="Bootstrap v4 Components for Vue.js 2"
          >
            <p>For more information visit our website</p>
            <add-task id="add" @taskAdded="addNewTask"></add-task>
          </b-jumbotron>
        </b-col>
        <b-col>
          <show-tasks v-bind:tasks="tasks"></show-tasks>
        </b-col>
      </b-row>
    </b-container>
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
};
</script>

<style>
.add {
  margin-left: none;
  padding-left: none;
}
</style>
