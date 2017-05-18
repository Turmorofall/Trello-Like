<template>
<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s11">
          <input id="first_name" type="text" class="validate" v-model="newTask.todo">
          <label for="first_name">Tâche à réaliser</label>					
        </div>
				<div class="icon col s1">
					<a @click="newTodo()" class="btn-floating btn-large waves-effect waves-light light-green"><i class="material-icons">add</i></a>
				</div>
      </div>
      <div class="row">
        <div class="input-field col s4">
						<label>Criticité</label>
						<p class="range-field">
							<input type="range" id="test5" min="0" max="10" v-model.number="newTask.criticity"/>
						</p>
        </div>
        <div class="col s4">
          <div class="switch">
						<label>
							Masquée
							<input type="checkbox" v-model="newTask.visibility">
							<span class="lever"></span>
							Visible
						</label>
					</div>
        </div>
			<div class="input-field col s4">
				<input id="nbh" type="number" class="validate" v-model.number="newTask.duration">
				<label for="nbh">Durée</label>
			</div>
			</div>
    </form>
  </div>
</template>

<script>
import {Store} from '@/Store.js';
export default {
  name: 'addtask',
  components: {
  },
  data () {
    return {
      todolist: Store.datas,
			newTask:{
				todo: '',
				criticity: 0,
				duration: 0,
				visibility: null,
			}
    }
  },
	methods:{
		newTodo(){
			this.todolist.todos.push(this.newTask);
			this.newTask={
				todo: '',
				criticity: 0,
				duration: 0,
				visibility: null,
			}
		}
	}
}
</script>

<style scoped>
.input-field{
	margin: 0;
}
.icon{
	margin: 0.5em auto 0.5em auto;
	padding: 0;
}
i{
	margin: 0 auto 0 auto;
}
</style>
