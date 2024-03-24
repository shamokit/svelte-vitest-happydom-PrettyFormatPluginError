<script lang="ts">
	export let name: string;
	export let onclick: () => void;
</script>

<ul>
	<li>
		<button type="button" on:click="{onclick}">
			{#if name}
				<span>{name}</span>
			{:else}
				<span> No <span>Name</span> </span>
			{/if}
		</button>
	</li>
</ul>

<a href="/">{name || 'No Name'}</a>
