<script setup>
import { ref, computed } from "vue"

import EditTodoForm from "./EditTodoForm.vue"

import { useTodos } from '@/stores/todos.js'
import { useProjects } from '@/stores/projects.js'

const { destroy } = useTodos()

const projectStore = useProjects()
const { find } = projectStore

const props = defineProps(["todo"])

const emit = defineEmits(['toggle', 'delete'])

const editing = ref(false)

const elClass = computed(() => {
	return {
		done: props.todo?.done
	}
})

function toggle() {
	emit('toggle')
}

function onDel(){
	if (confirm("Are you sure?")) {
		destroy(props.todo)
	}
}
</script>

<template>
	<div class="todo" :class="elClass">
		<EditTodoForm :todo="todo" v-if="editing" @after-submit="editing = false"></EditTodoForm>
		<template v-else>
			<input type="checkbox" @change="toggle">
			{{ todo.name }}
			&middot;
			<a href="#" @click.prevent.stop="editing = !editing">Edit</a>

			&middot;
			<a href="#" @click.prevent.stop="onDel">Del</a>
			<div class="exts">
				{{ todo.cDate }} &middot;
				<router-link v-if="todo.projectId" :to="`/projects/${todo.projectId}`">
					# {{ find(todo.projectId)?.name }}
				</router-link>
			</div>
		</template>
	</div>
</template>

<style scoped>
.todo {
	padding: .5rem 0;
	margin: .5rem 0;
	border-bottom: 1px solid #f0f0f0;
}
.done {
	text-decoration: line-through;
}

.exts {
	font-size: smaller;
}
</style>