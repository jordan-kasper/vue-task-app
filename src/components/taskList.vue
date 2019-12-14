<template>
  <div>
    <h1>Task List</h1>
    <ul class="list-group" v-for="task in sortArrays(tasks)" :key="task.name">
      <li
        class="list-group-item d-flex justify-content-between"
        v-bind:class="[
          taskColor(task.taskPriority),
          { 'strike-through': task.isActive },
        ]"
        @click="finishTask(task)"
      >
        {{ task.taskValue }}

        <span>
          <i @click.prevent="deleteTask(task)"
            ><img alt="Vue logo" class="button-space" src="../assets/edit.png"
          /></i>
          <i @click.prevent="deleteTask(task)"
            ><img alt="Vue logo" src="../assets/delete.png"
          /></i>
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
