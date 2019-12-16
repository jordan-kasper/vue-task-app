<template>
  <div>
    <h1>Task List</h1>
    <ul class="list-group" v-for="task in sortArrays(tasks)" :key="task.name">
      <li
        class="list-group-item d-flex justify-content-between"
        v-bind:class="taskColor(task.taskPriority)"
        @click="finishTask(task)"
      >
        <span v-bind:class="{ 'strike-through': task.isActive }">{{
          task.taskValue
        }}</span>
        <span>
          <a @click.prevent="deleteTask(task)">Delete</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],

  methods: {
    /**
     * Removes a task from the tasks
     *
     * @param {String} task the task from the ul that is to be removed
     */
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    sortArrays(arrays) {
      return _.orderBy(arrays, 'taskPriority', 'asc');
    },
    /**
     * Changes the color of the task li based on priority
     *
     * @param {int} priority the value used to determine the color of the li
     */
    taskColor(priority) {
      let classColor;
      if (priority === '1') {
        classColor = 'list-group-item-danger';
      } else if (priority === '2') {
        classColor = 'list-group-item-warning';
      } else {
        classColor = 'list-group-item-success';
      }
      return classColor;
    },
    /**
     * Sets the userTask value to true or false to toggle the class value strike-through
     * @param {String} task the task where we are checking the isActive value
     */
    finishTask(task) {
      const userTask = task;
      userTask.isActive = !userTask.isActive;
    },
  },
};
</script>

<style scoped>
.list-group-item {
  float: left;
  padding: 10px;
  margin-top: 10px;
}
.button-space {
  margin-right: 10px;
}
.strike-through {
  text-decoration: line-through;
}
</style>
