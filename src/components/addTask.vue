<template>
    <b-form inline @submit="submitTask">
      <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Clean Room"
            v-model="newTask.task"
          ></b-form-input>

      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :value="null"
        :options=options
        id="inline-form-custom-select-pref"
        v-model="newTask.priority"
      >
      </b-form-select>
      <b-button id="submit-button" type="submit" variant="info"
        >Submit</b-button
      >
    </b-form>
</template>

<script>
import {
  BFormInput, BForm, BFormSelect, BButton,
} from 'bootstrap-vue';

export default {
  name: 'addTask',

  data() {
    return {
      newTask: {
        task: '',
        priority: '',
        selected: '',
      },
      options: [
        { value: 1, text: 'Life Changing' },
        { value: 2, text: 'Important' },
        { value: 3, text: 'Meh' },
      ],
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
  components: {
    BFormInput,
    BForm,
    BFormSelect,
    BButton,
  },
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
}
</style>
