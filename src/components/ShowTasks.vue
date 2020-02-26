<template>
  <div class="tasks">
    <b-jumbotron header="List of Tasks" lead="List of tasks that need done">
      <b-table
        ref="selectableTable"
        selectable
        :select-mode="selectMode"
        :items="tasks"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        @row-selected="onRowSelected"
        responsive="sm"
      >
        <!-- Example scoped slot for select state illustrative purposes -->
        <template v-slot:cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
      <p>
        <b-button
          size="sm"
          @click="selectAllRows"
          class="spacing"
          variant="primary"
          >Select all</b-button
        >
        <b-button
          size="sm"
          @click="deleteTask(selected)"
          class="spacing"
          variant="danger"
          >Delete Selected</b-button
        >
        <b-button
          size="sm"
          @click="deleteAll()"
          class="spacing"
          variant="danger"
          >Delete All</b-button
        >
      </p>
      <p>
        Selected Rows:<br />
        {{ selected }}
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'showTables',
  props: ['tasks'],

  data() {
    return {
      sortBy: 'priority',
      sortDesc: false,
      fields: [
        { key: 'Selected' },
        { key: 'task' },
        { key: 'priority', sortable: true },
      ],
      selected: [],
    };
  },
  methods: {
    /**
     * Removes a task from the tasks
     *
     * @param {String} task the task from the ul that is to be removed
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
      this.tasks = [];
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
};
</script>

<style scoped>
.spacing {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
