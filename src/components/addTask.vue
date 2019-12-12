<template>
    <div>
        <form @submit.prevent="submitTask">
          <div>
            <input v-model="newTask.taskValue" placeholder="Add a Task">
          </div>
          <div>
            <select v-model="newTask.taskPriority">
                <option selected>Choose...</option>
                <option value="1">Life Changing</option>
                <option value="2">Important</option>
                <option value="3">Meh</option>
            </select>
          </div>
          <div>
          <button>Add Task</button>
          </div>
        </form>
      </div>


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
    submitTask() {
      this.$emit('taskAdded', this.newTask);
      this.newTask = {};
    },
  },
};
</script>

<style scoped>
</style>
