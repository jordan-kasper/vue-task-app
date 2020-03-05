<template>
<div>
  <b-form inline @submit.prevent="validateBeforeSubmit">
    <label class="sr-only" for="task-name">Name</label>
    <b-form-input
      id="task-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Clean Room"
      v-model="newTask.task"
      name="name"
      v-validate="'required'"
      :class="{'input': true, 'is-danger': errors.has('name') }"
      :state= "taskInputState"
    ></b-form-input>

    <b-tooltip :disabled="taskShow" :show.sync="taskShowToolTip"
    target="task-name" placement="bottom">
      Task Required
    </b-tooltip>

    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      :options="options"
      id="priority"
      v-model="newTask.priority"
      name="priority"
      v-validate="'required'"
      :class="{'input': true, 'is-danger': errors.has('priority') }"
      :state= "priorityInputState"
    >
    </b-form-select>
    <b-tooltip :disabled="priorityShow" :show.sync="priorityShowToolTip"
    target="priority" placement="bottom">
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
      priorityInputState: null,
      taskInputState: null,
      taskError: null,
      priorityError: null,
      taskShow: true,
      taskShowToolTip: false,
      priorityShow: true,
      priorityShowToolTip: false,
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
          this.taskInputState = null;
          this.taskIshow = true;
          this.taskIshowToolTip = false;
          this.priorityInputState = null;
          this.priorityShow = true;
          this.priorityShowToolTip = false;
        } else {
          this.$validator.validate('name').then((n) => {
            if (!n) {
              this.taskInputState = false;
              this.taskShow = false;
              this.taskShowToolTip = true;
            }
          });
          this.$validator.validate('priority').then((p) => {
            if (!p) {
              this.priorityInputState = false;
              this.priorityShow = false;
              this.priorityShowToolTip = true;
            }
          });
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
