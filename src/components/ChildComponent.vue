<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const count = ref(0)
function addCount() {
	count.value++
}

const f = () => {
	console.log("doc clicked")
}
document.addEventListener("click", f)

onBeforeUnmount(() => {
	document.removeEventListener("click", f)
})

let i = 0
const countingHandler = setInterval(() => {
	console.log(i++)
}, 1000)

onBeforeUnmount(() => {
	clearInterval(countingHandler)
})


const input = ref(null)
onMounted(() => {
  input.value.focus()
})
</script>

<template>
	<h3>This is a child component with counting: {{ count }}</h3>
	<div>
		<button @click="addCount">Add Count</button>
	</div>
  <input ref="input" />
</template>