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
      :state= "inputState"
    ></b-form-input>
    <b-tooltip :disabled="show" :show.sync="showToolTip"
    target="inline-form-input-name" placement="top">
      Task Required
    </b-tooltip>

    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      :options="options"
      id="inline-form-custom-select-pref"
      v-model="newTask.priority"
      name="priority"
      v-validate="'required'"
      :class="{'input': true, 'is-danger': errors.has('priority') }"
      :state= "inputState"
    >
    </b-form-select>
    <b-tooltip :disabled="show" :show.sync="showToolTip"
    target="inline-form-custom-select-pref" placement="top">
      Priority Required
    </b-tooltip>

    <b-button id="submit-button" type="submit" variant="info">Submit</b-button>

  </b-form>
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
      inputState: null,
      taskError: null,
      priorityError: null,
      show: true,
      showToolTip: false,
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
          this.inputState = null;
          this.show = true;
          this.showToolTip = false;
        } else {
          this.inputState = false;
          this.show = false;
          this.showToolTip = true;
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
