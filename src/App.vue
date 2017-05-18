<template>
  <div id="app" class="container">
    <navbar></navbar>
    <addTask></addTask>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AddTask from '@/components/AddTask'

export default {
  name: 'app',
  components:{
  navbar: Navbar,
  addTask: AddTask,
},
}

</script>

<style>

</style>
