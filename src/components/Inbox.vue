<script setup>
	import { storeToRefs } from 'pinia'

	import { useTodos } from '@/stores/todos.js'
	import TodoListItem from "@/components/TodoListItem.vue"

	import AddTodoForm from './AddTodoForm.vue';

	const store = useTodos()
	const { inbox } = storeToRefs(store)

</script>

<template>
	<h2>Inbox</h2>

	<TodoListItem v-for="todo in inbox" :todo="todo"></TodoListItem>
	<AddTodoForm></AddTodoForm>
</template>