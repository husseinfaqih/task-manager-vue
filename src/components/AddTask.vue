<template>
  <form class="add-form" @submit.prevent="addTaskAndClearFields">

    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTask',
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(['addTask']),

    addTaskAndClearFields() {

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
      };

      this.addTask(newTask);

      this.clearFields();
    },

  
    clearFields() {
      this.text = "";
    }
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
