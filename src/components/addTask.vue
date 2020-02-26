<template>
        <b-form inline @submit="submitTask">
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Clean Room"
            v-model="newTask.task"
          ></b-input>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            :value="null"
            :options="{
              'Life Changing': 'Life Changing',
              Important: 'Important',
              Meh: 'Meh',
            }"
            id="inline-form-custom-select-pref"
            v-model="newTask.priority"
          >
          </b-form-select>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        task: '',
        priority: '',
        selected: '',
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
        task: '',
        priority: '',
        selected: '',
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
