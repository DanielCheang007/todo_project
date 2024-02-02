import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Inbox from '@/components/Inbox.vue'
import Today from '@/components/Today.vue'

import ShowProject from "@/components/projects/ShowProject.vue"

const routes = [
	{
		path: "/", 
		component: Home
	},
	{
		path: "/inbox", 
		component: Inbox
	},
	{
		path: "/today", 
		component: Today
	},

	{
		path: "/projects/:id",
		component: ShowProject
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export {
	router
}