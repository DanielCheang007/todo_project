<script setup>
	import { storeToRefs } from 'pinia'

	import { useTodos } from '@/stores/todos.js'
	import TodoListItem from "@/components/TodoListItem.vue"

	import AddTodayTodoForm from './AddTodayTodoForm.vue';

	import moment from "moment"

	const dateStr = moment(new Date()).format('M月D日 ‧ 今天 ‧ dddd')

	const store = useTodos()
	const { todayTodos, overdueTodos } = storeToRefs(store)
	
</script>

<template>
	<h2>Today</h2>

	<section>
		<h3>Overdue</h3>
		<TodoListItem v-for="todo in overdueTodos" :todo="todo"></TodoListItem>
	</section>

	<section>
		<h3>{{ dateStr }}</h3>
		<TodoListItem v-for="todo in todayTodos" :todo="todo"></TodoListItem>
		<AddTodayTodoForm></AddTodayTodoForm>
	</section>
</template>

<style scoped>
	section {
		margin-bottom: 2rem;
	}
</style>