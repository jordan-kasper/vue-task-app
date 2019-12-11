<template>
    <div class="container">
        <form @submit.prevent="submitTask" class="col s6 offset-s3">
          <div class="input-field form-group">
            <input class="form-control" v-model="newTask.taskValue" placeholder="Add a Task">
          </div>
          <div class="form-group">
            <select class="custom-select my-1 mr-sm-2" v-model="newTask.taskPriority">
                <option selected>Choose...</option>
                <option value="list-group-item-danger">Urgent</option>
                <option value="list-group-item-warning">High</option>
                <option value="list-group-item-success">Normal</option>
                <option value="list-group-item-info">Low</option>
            </select>
          </div>
          <div class="form-group">
          <button class="btn btn-primary btn-lg btn-block">Add Task</button>
          </div>
        </form>
      </div>


</template>

<script>
    export default {
        data() {
            return {
                newTask:{
                    taskValue : '',
                    taskPriority: '',
                }
            };
        },
        methods: {
            submitTask() {
                this.$emit('taskAdded', this.newTask)
                this.newTask = {};
            }
    }
}
</script>

<style scoped>
  .container-fluid {
      align-items: center;
  }
</style>
