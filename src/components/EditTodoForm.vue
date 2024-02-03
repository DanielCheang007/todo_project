<script setup>
import { ref, watch } from 'vue'
import Todo from "@/models/todo.js"

import { storeToRefs } from 'pinia'

import { useProjects } from '@/stores/projects.js'

const projectsState = useProjects()
const { projects } = storeToRefs(projectsState)

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
		<select v-model="formData.projectId">
			<option>-- Select Project --</option>
			<option v-for="proj in projects" :value="proj.id">{{ proj.name }}</option>
		</select>
		<button>Save</button>
	</form>
</template>