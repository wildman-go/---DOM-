<template>
  <div id="app">
    <input v-model="message">
    {{message}}
    <div v-bind:id="message"></div>
        <todo-list>
            <todo-item @delete="handleDelete" v-for="item in list" v-bind:key="item" :title="item.title" :del="item.del">
                <!-- 2.6的语法 -->
                <template v-slot:pre-icon="{value}">
                    <span>前置图标, {{value}}</span>
                
                </template>
                <!-- 2.5的语法 -->
                <!-- <span slot="suf-icon">后置图标</span> -->

            </todo-item>
        </todo-list>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem, TodoList 
  },
  data: function(){
    return {
      message: 'hello world',
      list: [{
              title: '课程1',
              del: false,
            },{
              title: '课程2',
              del: true,
              },],
    }
    },
  methods: {
    handleDelete(val){
      console.log("handleDelete", val);
    }
  },
}
</script>