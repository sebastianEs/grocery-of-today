import { writable } from 'svelte/store'

export const groceries = writable([{id: 1, value: 'Bread', completed: true}])