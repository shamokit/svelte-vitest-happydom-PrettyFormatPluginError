<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import Greeter from './Greeter.svelte';
	import { writable } from 'svelte/store';

	export let name: ComponentProps<Greeter>['name'];
	let nameStore = writable(name);
</script>

<Greeter name="{$nameStore}" onclick="{() => nameStore.set('Renamed')}" />
