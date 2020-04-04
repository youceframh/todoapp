<template>
  <div id="todotemplate">
      <h1>You have <b> {{id}} </b> todos</h1>

    <b-list-group v-for='objs in todos' v-bind:key='todos.id'>

        <b-row>
   <b-col><b-list-group-item>{{objs.text}}</b-list-group-item></b-col> 
   <b-col><b-button variant="danger" @click='remove(objs)'>Remove this one</b-button></b-col>
        </b-row>
          <br>  
    </b-list-group>
     
 <b-list-group>

  <b-list-group-item>
    <b-form-textarea v-model='addtodo.text' name="addtodo" v-on:blur="textareaBlured = true" :state="check">  </b-form-textarea>
  </b-list-group-item> 
  <b-button v-bind:variant="color" @click='add()'>add this one</b-button>

</b-list-group>

  </div>
</template>

<script>
export default {
    name:'todotemplate',
data(){
  return{
    todos:[], // The array list of todos (contains objects)
    id:0, // how many todos there is
    addtodo:{text:''}, // The text of add todo
    bordererror:'1px solid black', // error when the text of add todo is empty
    textareaBlured:false,
    color:'success'
  }
},
created: function (){
  if($cookies.get('todos')) this.todos = $cookies.get('todos').todos 
      this.id = this.todos.length
},
methods:{

  remove (todoss){ //function of removing todos

      let todos = this.$data.todos; // calling the array list of todos
      NProgress.start()
    todos.splice(todos.indexOf(todoss),1); // removing the wanted todo with the indexOf it
    this.$cookies.set('todos',{todos:this.todos});
    this.$data.id = todos.length; // Updating how many todos you have

  },

  add(){

      const addedText = this.$data.addtodo.text; // calling the text that wanted to be added

    if(addedText == ''){ // verfying if the text is empty
     this.$data.color = 'danger';// making border color of the text red
       setTimeout(() => this.$data.color = 'success', 500);
    }else{ 
      NProgress.start()
     this.$data.bordererror = '1px solid black'; // returning the border color to it's normal
     this.$data.todos.push({text:`${this.addtodo.text}`,id:`${this.$data.id++}`}) // add the todo
     this.$cookies.set('todos',{todos:this.todos});
     this.$data.id = this.$data.todos.length; // Updating how many todos you have
     this.$data.addtodo.text = '';
     this.$data.textareaBlured = false;
    } 

  }

},
computed:{//this part is additional
  check: function(){
    if(this.$data.textareaBlured == false){
      return null;
    }else{
      return this.$data.addtodo.text.length >= 1;
    }
  }
},
mounted: function () {
  this.$nextTick(function () {
    NProgress.done()
  })
},
updated: function () {
  this.$nextTick(function () {
    NProgress.done()
  })
}
};
//end of script
</script>

<style lang="scss">

</style>
