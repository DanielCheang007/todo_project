<script setup>
	import { ref, computed } from 'vue'
	import Project from '@/models/project.js'

	import { storeToRefs } from 'pinia'

	import { useProjects } from '@/stores/projects.js'

	const store = useProjects()
	const { projects } = storeToRefs(store)
	const { add } = store

	const create = () => new Project()

	const formData = ref(create())

	function onSubmit() {
		add(formData.value)
		formData.value = create()
	}
</script>

<template>
	<ul>
		<li v-for="project in projects">
			<router-link :to="`/projects/${project.id}`">
				# {{ project.name }}
			</router-link>
		</li>
	</ul>

	<form @submit.prevent="onSubmit">
		<input type="text" v-model="formData.name">
		<button>Add</button>
	</form>

</template>