<script setup>
	import { ref, computed } from 'vue'
	import { storeToRefs } from 'pinia'

	import { useTodos } from '@/stores/todos.js'

	import TodoListItem from '@/components/TodoListItem.vue'

	// import TodoForm from '@/components/TodoForm.vue'

	const store = useTodos()
	const { todos, overdueTodos, todayTodos } = storeToRefs(store)
	const { add, destroy } = store

	function afterSubmit(todo) {
		add(todo)
	}

	function toggle(todo) {

	}

	function onDelete(todo) {
		destroy(todo)
	}
</script>

<template>
	<div>{{ todos.length }}個任務</div>

	<h2>過期</h2>
	<ul>
		<TodoListItem v-for="todo in overdueTodos" :todo="todo" @toggle="toggle(todo)" @delete="onDelete"></TodoListItem>
	</ul>

	<h2>今天</h2>
	<ul>
		<TodoListItem v-for="todo in todayTodos" :todo="todo" @toggle="toggle(todo)" @delete="onDelete"></TodoListItem>
	</ul>

	<!-- <TodoForm @after-submit="afterSubmit"></TodoForm> -->
</template>