<template>
    <div class="row">
        <form @submit.prevent="submitTask" class="col s6 offset-s3">
          <div class="input-field">
            <input v-model="taskValue">
          </div>
          <button>Add</button>
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
