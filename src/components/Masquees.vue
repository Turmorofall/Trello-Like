<template>
  <div>
    <ul class="collection">
      <taskCollection @remove="removeTask(task)" v-if="!task.visibility" v-for="task in todolist.todos" :task="task" :key="task.id"></taskCollection>
    </ul>
  </div>
</template>

<script>
import {Store} from '@/Store.js';
import TaskCollection from './TaskCollection.vue';
export default {
  name: 'masquees',
  components: {
    taskCollection: TaskCollection,
  },
  data () {
    return {
      todolist: Store.datas,
    }
  },
  methods:{
    removeTask(task){
      this.todolist.todos.splice(this.todolist.todos.indexOf(task),1);
    }
  }
}
</script>

<style scoped>

</style>
