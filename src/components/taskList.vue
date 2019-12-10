<template>
    <div class="row">
        <ul>
          <li class="collection-item" v-for="task in tasks" :key="task">
            <p>
              <label>
                <span>{{task}}</span>
                <span>
                  <a @click.prevent="deleteTask(task)">
                    <i>delete</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>
      </div>
</template>

<script>
    export default {
        props: ['tasks'],

        methods: {
            deleteTask(task) {
            const taskIndex = this.tasks.indexOf(task);
            this.tasks.splice(taskIndex, 1);
        }
    }
}
</script>