<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icons/icon-555.png" />
	<title>555</title>
	<meta name="theme-color" content="#c0c0c0" />
</svelte:head>

{@render children()}
