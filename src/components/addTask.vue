<template>
  <form @submit.prevent="submitTask">
    <div>
      <input
        required
        type="text"
        name="task-name"
        class="form-control spacing"
        v-model="newTask.taskValue"
        placeholder="Add a Task"
      />
    </div>
    <select
      required
      class="custom-select d-block w-100 spacing"
      v-model="newTask.taskPriority"
    >
      <option selected>Choose...</option>
      <option value="list-group-item-danger">Life Changing</option>
      <option value="list-group-item-warning">Important</option>
      <option value="list-group-item-success">Meh</option>
    </select>
    <div>
      <button class="btn btn-primary btn-block spacing">Add Task</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        taskValue: '',
        taskPriority: '',
      },
    };
  },
  methods: {
    /**
     * Sends newly created task back to the parent component to be added to the tasks array
     */
    submitTask() {
      this.$emit('taskAdded', this.newTask);
      this.newTask = {};
    },
  },
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
}
</style>
