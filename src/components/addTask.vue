<template>
<div>
  <b-form inline @submit.prevent="validateBeforeSubmit">
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Clean Room"
      v-model="newTask.task"
      name="name"
      v-validate="'required'"
      :class="{'input': true, 'is-danger': errors.has('name') }"
      untouched = resetForm
    ></b-form-input>

    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      :options="options"
      id="inline-form-custom-select-pref"
      v-model="newTask.priority"
      name="priority"
      v-validate="'required'"
      :class="{'input': true, 'is-danger': errors.has('priority') }"
      untouched = resetForm

    >
    </b-form-select>
    <b-button id="submit-button" type="submit" variant="info">Submit</b-button>

  </b-form>
  <div v-if="showErrors">
    <br>
    <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
    <br>
    <span v-show="errors.has('priority')">{{ errors.first('priority') }}</span>
  </div>
</div>
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
      showErrors: true,
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.submitTask();
          this.showErrors = false;
        } else {
          this.showErrors = true;
        }
      });
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
