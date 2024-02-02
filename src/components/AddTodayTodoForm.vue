<script setup>
import { ref } from 'vue'
import Todo from "@/models/todo.js"
import { useTodos } from '@/stores/todos.js'

const { add } = useTodos()

function create() {
	const todo = new Todo()
	todo._date = new Date()
	return todo
}

const formData = ref(create())

function onSubmit() {
	add(formData.value)

	formData.value = create()
}
</script>

<template>
	<form @submit.prevent="onSubmit">
		<input type="text" v-model="formData.name">
		<button>Save</button>
	</form>
</template>