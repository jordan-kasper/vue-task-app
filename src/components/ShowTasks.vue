<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sort('value')">Task</th>
          <th @click="sort('priority')">Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in sortedTasks" v-bind:key="task">
          <td>
            <input
              contenteditable
              v-model="task.value"
              @blur="editTask(task)"
            />
          </td>

          <td>
            <select class="custom-select d-block w-100 spacing">
              <option selected v-if="task.priority === '1'"
                >Life Changing</option
              >
              <option selected v-if="task.priority === '2'">Important</option>
              <option selected v-if="task.priority === '3'">Meh</option>
              <option value="1">Life Changing</option>
              <option value="2">Important</option>
              <option value="3">Meh</option>
            </select>
          </td>
          <td><a @click.prevent="deleteTask(task)">Delete</a></td>
        </tr>
      </tbody>
    </table>

    debug: sort={{ currentSort }}, dir={{ currentSortDir }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['tasks'],

  data() {
    return {
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },
  methods: {
    /**
     * Removes a task from the tasks
     *
     * @param {String} task the task from the ul that is to be removed
     */
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
  },
  computed: {
    sortedTasks() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.tasks.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: #eee;
}
select {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  padding-left: 0;
  background-color: #eee;
}
</style>
