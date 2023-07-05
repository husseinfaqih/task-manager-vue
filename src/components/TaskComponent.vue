<template>
  <div>
    <h3 >{{ task.text }}</h3>
    <i class="fas fa-times"></i>
    <i class="fas fa-pen"></i>
  </div>
</template>

<script>

export default {
  name: 'TaskComponent',
  props: {
    task: Object
  },
  
}
</script>

<style >

</style>
