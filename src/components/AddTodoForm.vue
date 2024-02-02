<script setup>
import { ref } from 'vue'
import Todo from "@/models/todo.js"
import { useTodos } from '@/stores/todos.js'

const { add } = useTodos()

const formData = ref(new Todo())

function onSubmit() {
	add(formData.value)

	formData.value = new Todo()
}
</script>

<template>
	<form @submit.prevent="onSubmit">
		<input type="text" v-model="formData.name">
		<button>Save</button>
	</form>
</template>