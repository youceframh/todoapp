<template>
  <div id="app">
     
     <todotemplate> </todotemplate>

  </div>
</template>

<script>
export default {

data(){
  return{}
},
components:{
  todotemplate : () => import("./components/todotemplate.vue")
},  

};
//end of script
</script>

<style lang="scss">
#app {
  text-align:center;
  width:400px;
  font-family: 'Quicksand', sans-serif;
  color: #2c3e50;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
