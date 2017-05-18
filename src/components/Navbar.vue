<template>
<div>
  <nav class="nav-extended card-panel teal #ffb74d orange lighten-2">
    <h1>YTTD</h1>
    <h2>Your Things To Do</h2>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#/">Home</a></li>
        <li class="tab"><a href="#/critiques">Tâches critiques</a></li>
        <li class="tab"><a href="#/masquees">Tâches masquées</a></li>
        <li id="iconNotif" class="right"><i class="small material-icons">chat_bubble_outline</i></li>
        <li id="averagetime" class="right">Durée moyenne : {{time}}</li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import {Store} from '@/Store.js';
export default {
  name: 'navbar',
  components: {
  },
  data () {
    return {
      todolist: Store.datas,
    }
  },
  // afficher le temps moyen
  computed:{
    time: function(){
      let timeaverage = 0;
      this.todolist.todos.forEach(function(element) {
        timeaverage += element.duration;
      });
      timeaverage = timeaverage/this.todolist.todos.length;
      return Math.round(timeaverage);
    }
  }
}
</script>

<style scoped>
.card-panel{
  margin: 0;
  padding: 0;
  text-align: center;
}
h1{
  margin: 0 auto 0 auto;
}
ul{
  width: inherit;
}
#iconNotif{
  margin-right: 1em;
}
#averagetime{
  margin-right: 1em;
  margin-top: 1em;
}
</style>