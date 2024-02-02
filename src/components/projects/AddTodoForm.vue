<script setup>
import { ref, watch } from 'vue'
import Todo from "@/models/todo.js"
import { useTodos } from '@/stores/todos.js'

const { add } = useTodos()

const props = defineProps(["projectId"])

function create() {
	const todo = new Todo()
	todo.projectId = +props.projectId
	return todo
}

const formData = ref(null)
watch(() => props.projectId, val => {
	formData.value = create()
}, { immediate: true })

function onSubmit() {
	add(formData.value)

	formData.value = create()
}
</script>

<template>
	<div v-if="!formData">loading...</div>
	<form v-else @submit.prevent="onSubmit">
		<input type="text" v-model="formData.name">
		<button>Save</button>
	</form>
</template>