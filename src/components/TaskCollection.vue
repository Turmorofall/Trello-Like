<template>
		<li class="collection-item avatar">
      <i class="material-icons circle" v-if="task.criticity < 5">label_outline</i>
      <i class="material-icons circle" v-if="task.criticity >= 5">report_problem</i>
      <span class="title">{{task.todo}}</span>
			<p>Criticité : {{task.criticity}} </p>
      <i class="material-icons">query_builder</i>{{task.duration}}
      <a @click="removeTask()" class="secondary-content"><i class="material-icons">delete</i></a>
    </li>
</template>

<script>
export default {
		name: 'taskCollection',
		props: {
			task: {
				type: Object,
			}
		},
		methods:{
			removeTask(){
				this.$emit('remove');
			}
		}
	}
</script>

<style scoped>
a{
	cursor: pointer;
}
</style>