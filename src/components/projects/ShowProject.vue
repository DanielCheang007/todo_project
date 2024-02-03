<script setup>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useTodos } from '@/stores/todos.js'
import { useProjects } from '@/stores/projects.js'

import TodoListItem from "@/components/TodoListItem.vue"
import AddTodoForm from "./AddTodoForm.vue";

const route = useRoute()
const todoStore = useTodos()
const { findAllByProjectId } = todoStore

const projectStore = useProjects()
const { find } = projectStore

const projectId = computed(() => route.params.id)

const project = computed(() => find(projectId.value))

const todos = computed(() => findAllByProjectId(projectId.value))

</script>
<template>
	<h2>Project #{{ project.id }}: {{ project?.name }}</h2>

	<h3>Todos ({{ todos.length }})</h3>
	
	<TodoListItem v-for="todo in todos" :todo="todo"></TodoListItem>
	<AddTodoForm :projectId="projectId"></AddTodoForm>
</template>