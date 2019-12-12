<template>
    <div>
        <ul v-for="task in tasks" :key="task">
          <li type="checkbox" v-bind:class="task.taskPriority">
                {{task.taskValue}}{{task.taskPriority}}
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
}
</style>
