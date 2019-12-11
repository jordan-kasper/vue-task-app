<template>
    <div class="container">
        <form @submit.prevent="submitTask" class="col s6 offset-s3">
          <div class="input-field form-group">
            <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="taskValue">
          </div>
          <div class="form-group">
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value="1">Urgent</option>
                <option value="2">High</option>
                <option value="3">Normal</option>
                <option value="4">Low</option>

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
                taskValue : '',
            };
        },
        methods: {
            submitTask() {
                this.$emit('taskAdded', this.taskValue)
                this.taskValue = '';
            }
    }
}
</script>

<style scoped>
  .container-fluid {
      align-items: center;
  }
</style>
