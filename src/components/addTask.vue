<template>
  <form @submit.prevent="submitTask">
    <div>
      <input
        required
        type="text"
        name="task-name"
        class="form-control spacing"
        v-model="newTask.value"
        placeholder="Add a Task"
      />
    </div>
    <select
      required
      class="custom-select d-block w-100 spacing"
      v-model="newTask.priority"
    >
      <option selected>Choose...</option>
      <option value="Life Changing">Life Changing</option>
      <option value="Important">Important</option>
      <option value="Meh">Meh</option>
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
        value: '',
        priority: '',
      },
    };
  },
  methods: {
    /**
     * Sends newly created task back to the parent component to be added to the tasks array
     */
    submitTask() {
      this.$emit('taskAdded', this.newTask);
      this.newTask = {
        value: '',
        priority: '',
      };
    },
  },
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
}
</style>
