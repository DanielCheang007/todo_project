<script setup>
	import ProjectList from "@/components/projects/ProjectList.vue"
</script>

<template>
	<div class="container">
		<aside>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/inbox">Inbox</router-link>
				</li>
				<li>
					<router-link to="/today">Today</router-link>
				</li>
			</ul>

			<div>My Projects</div>
			<ProjectList></ProjectList>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	height: 100%;
}
aside {
	flex: 4;
	background: #eee;
	padding: 1rem;
}
main {
	flex: 8;
	padding: 1rem;
}
</style>