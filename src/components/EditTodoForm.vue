<script setup>
import { ref, watch } from 'vue'
import Todo from "@/models/todo.js"

const props = defineProps(["todo"])

const emit = defineEmits(["after-submit"])

const formData = ref(null)

watch(props.todo, val => {
	const todo = new Todo()
	Object.assign(todo, {...val})
	formData.value = todo
}, {immediate: true })

function onSubmit() {
	Object.assign(props.todo, formData.value)
	emit('after-submit')
}
</script>

<template>
	<form @submit.prevent="onSubmit">
		<input type="text" v-model="formData.name">
		<input type="date" v-model="formData.date">
		<button>Save</button>
	</form>
</template>