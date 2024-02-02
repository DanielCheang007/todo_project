
import { ref, computed, watch } from 'vue'
import { defineStore } from "pinia"

import { setItem, loadItems } from '@/utils/storage.js'

import Todo from '@/models/todo'

export const useTodos = defineStore('todos', () => {
	// state

	const storageKey = 'todos'

	const items = loadItems(storageKey, Todo)

	const todos = ref(items)
	watch(todos, val => setItem(storageKey, todos.value), { deep: true })

	// getters

	const inbox = computed(() => {
		return todos.value.filter(d => d.date === null)
	})

	const overdueTodos = computed(() => {
		return todos.value.filter(d => d.isOverdue).sort((a, b) => a.date > b.date ? 1 : -1)
	})

	const todayTodos = computed(() => {
		return todos.value.filter(d => d.isToday)
	})

	// actions

	function add(todo) {
		todos.value.push(todo)
	}

	function destroy(todo) {
		const idx = todos.value.indexOf(todo)
		if (idx > -1) {
			todos.value.splice(idx, 1)
		}
	}

	function findAllByProjectId(projectId) {
		console.log(projectId, typeof projectId)
		return todos.value.filter(d => d.projectId === +projectId)
	}

	return {
		todos,
		inbox,
		overdueTodos,
		todayTodos,
		add,
		destroy,
		findAllByProjectId
	}
})

// export const useTodos = defineStore('todos', {
// 	state: () => ({
// 		todos: [],
// 		filter: 'all',
// 		nextId: 0
// 	}),

// 	getters: {
// 		inbox(state) {
// 			return state.todos.filter(d => d.date === null)
// 		},
// 		today(state) {
// 			return state.todos.filter(d => d.isToday)
// 		} 
// 	},

// 	actions: {
// 		add(todo) {
// 			this.todos.push(todo)
// 		}
// 	}
// })