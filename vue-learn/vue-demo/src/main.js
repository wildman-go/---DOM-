import { createApp } from 'vue'
import App from './App.vue'
import TodoList from './components/TodoList.vue'

createApp(App).component('todo-list', TodoList).mount('#app')
