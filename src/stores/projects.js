
import { ref, watch } from 'vue'
import { defineStore } from "pinia"

import { getItem, setItem, loadItems } from '@/utils/storage.js'

import Project from '@/models/project'

export const useProjects = defineStore('projects', () => {
	// state

	const storageKey = 'projects'
	const counterKey = `${storageKey}_counter`

	const items = loadItems(storageKey, Project)
	const _counter = getItem(counterKey) || 0

	const projects = ref(items)
	const counter = ref(_counter)
	watch(projects, val => setItem(storageKey, projects.value), { deep: true })
	watch(counter, val => setItem(counterKey, counter.value))

	// getters

	// actions

	function find(id) {
		return projects.value.find(p => p.id === +id)
	}

	function add(project) {
		counter.value += 1
		project.id = counter.value
		projects.value.push(project)
	}

	function destroy(project) {
		const idx = projects.value.indexOf(project)
		if (idx > -1) {
			projects.value.splice(idx, 1)
		}
	}

	return {
		projects,
		find,
		add,
		destroy
	}
})