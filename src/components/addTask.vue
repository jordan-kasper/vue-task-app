<template>
    <b-form inline @submit="submitTask">
      <label class="sr-only" for="inline-form-input-name">Name</label>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Clean Room"
            v-model="newTask.task"
          ></b-form-input>
          <span id="error">{{ errors[0] }}</span>
        </ValidationProvider>

      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :value="null"
        :options="{
          1: 'Life Changing',
          2: 'Important',
          3: 'Meh',
        }"
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
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'addTask',

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
  components: {
    BFormInput,
    BForm,
    BFormSelect,
    BButton,
    ValidationProvider,
  },
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
}
</style>
