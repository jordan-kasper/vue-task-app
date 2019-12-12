<template>
    <!-- eslint-disable max-len -->
    <form @submit.prevent="submitTask">
      <div>
            <div>
              <input type="text" class="form-control spacing" v-model="newTask.taskValue" placeholder="Add a Task">
            </div>
            <div>
              <select class="custom-select d-block w-100 spacing" v-model="newTask.taskPriority">
                  <option selected>Choose...</option>
                  <option value="list-group-item-danger">Life Changing</option>
                  <option value="list-group-item-warning">Important</option>
                  <option value="list-group-item-success">Meh</option>
              </select>
            </div>
            <div>
            <button class="btn btn-primary btn-block spacing">Add Task</button>
            </div>
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
