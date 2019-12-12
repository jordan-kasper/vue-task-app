<template>
    <div>
      <h1>Task List</h1>
        <ul class="list-group" v-for="task in tasks" :key="task.name">
          <li class="list-group-item d-flex justify-content-between" type="checkbox" v-bind:class="task.taskPriority">
                {{task.taskValue}}
                <span>
                <i @click.prevent="deleteTask(task)"><img alt="Vue logo" class="button-space" src="../assets/edit.png"></i>
                <i @click.prevent="deleteTask(task)"><img alt="Vue logo" src="../assets/delete.png"></i>
                </span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  props: ['tasks'],


  methods: {
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
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
</style>
