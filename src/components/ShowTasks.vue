<template>
  <div>
    <b-jumbotron header="List of Tasks" lead="List of tasks that need done">
      <b-table
        ref="selectableTable"
        selectable
        :select-mode="selectMode"
        selected-variant="info"
        :items="tasks"
        :fields="fieldNames"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        @row-selected="onRowSelected"
        :tbody-tr-class="rowClass"
      >
        <template v-slot:cell(selected)="{ rowSelected }">
          <template v-if="rowSelected" :class="test">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
        </template>

        <template v-slot:cell(task)="tasks">
          <input contenteditable v-model=tasks.item.task>
        </template>

        <template v-slot:cell(priority)="tasks">
            <b-form-select size="sm" v-model="tasks.item.priority">
              <option selected v-if="tasks.item.priority === 1">Life Changing</option>
              <option selected v-if="tasks.item.priority === 2">Important</option>
              <option selected v-if="tasks.item.priority === 1">Meh</option>
              <option value=1>Life Changing</option>
              <option value=2>Important</option>
              <option value=3>Meh</option>
            </b-form-select>
        </template>
      </b-table>
      <p>
        <b-button
          size="sm"
          @click="selectAllRows"
          class="spacing"
          variant="info"
          >Select all</b-button
        >
        <b-button
          size="sm"
          @click="deleteTask(selected)"
          class="spacing"
          variant="danger"
          data-cy="deleteSelected"
          >Delete Selected</b-button
        >
        <b-button
          size="sm"
          @click="deleteAll()"
          class="spacing"
          variant="danger"
          data-cy="deleteAll"
          >Delete All</b-button
        >
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
import {
  BTable,
  BJumbotron,
  BButton,
  BFormSelect,
} from 'bootstrap-vue';

export default {
  name: 'showTasks',
  props: ['tasks'],

  data() {
    return {
      sortBy: 'priority',
      sortDesc: false,
      fieldNames: [
        { key: 'Selected' },
        { key: 'task' },
        { key: 'priority', sortable: true },
      ],
      selected: [],
      selectMode: 'multi',
    };
  },
  methods: {
    /**
     * Removes a task or tasks from the tasks
     *
     * @param {Object} taskList the list of tasks from the table that are to be removed
     */
    deleteTask(taskList) {
      taskList.forEach((task) => {
        const taskIndex = this.tasks.indexOf(task);
        this.tasks.splice(taskIndex, 1);
      });
    },
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    deleteAll() {
      this.$emit('listDeleted');
    },
    /**
     * Adds row highlighting depending on priority
     *
     * @param {String} item the task from the table that is to be highlighted
     */
    // eslint-disable-next-line consistent-return
    rowClass(item) {
      if (item.priority === '3') return 'table-success';
      if (item.priority === '2') return 'table-warning';
      if (item.priority === '1') return 'table-danger';
    },
  },
  watch: {
    tasks: {
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      deep: true,
    },
  },
  components: {
    BTable,
    BJumbotron,
    BButton,
    BFormSelect,
  },
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
  margin-left: 10px;
}
input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: transparent;
}
.jumbotron {
  background-color: white;
}
</style>
