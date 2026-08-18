<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let activeGuide = $derived(data.current ?? null);
</script>

<svelte:head>
	<title>555 Guides</title>
	<meta name="description" content="Guides for the 555 event, including Falstad basics, chip fundamentals, and submission tips." />
</svelte:head>

<div class="guide-shell">
	<header class="topbar">
		<div class="brand">555 - by rudy</div>
		<nav class="nav" aria-label="Main navigation">
			<a class="nav-link" href="/">Home</a>
			<a class="nav-link" href="/#about">About</a>
			<a class="nav-link active" href="/guides">Guide</a>
			<a class="nav-link submit-link" href="/#submit">Submit</a>
		</nav>
	</header>

	<main class="guide-main">
		<section class="guide-panel">
			<aside class="sidebar">
				<div class="sidebar-header">Guides</div>
				{#each data.guides as guide}
					<a class:active={guide.slug === activeGuide?.slug} class="guide-item" href={`/guides?guide=${guide.slug}`}>
						<span class="guide-title">{guide.title}</span>
						<span class="guide-subtitle">{guide.subtitle}</span>
					</a>
				{/each}
			</aside>

			<article class="guide-content">
				{#if activeGuide}
					<div class="content-header">
						<p class="eyebrow">555 guide</p>
						<h1>{activeGuide.title}</h1>
					</div>
					<div class="markdown-body">
						{@html activeGuide.html}
					</div>
				{:else}
					<div class="content-header">
						<p class="eyebrow">555 guide</p>
						<h1>No guide selected</h1>
					</div>
				{/if}
			</article>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background: #7d7d7d;
	}

	.guide-shell {
		min-height: 100vh;
	}

	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.4rem 0.8rem;
		background: var(--win98-panel);
		border: 3px solid var(--win98-border-dark);
		border-bottom: 3px solid var(--win98-border-light);
		box-shadow: inset -2px -2px 0 var(--win98-border-mid), inset 2px 2px 0 var(--win98-border-light);
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.brand {
		font-size: clamp(1.2rem, 2vw, 2rem);
		font-weight: 700;
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.3rem;
		flex-wrap: wrap;
	}

	.nav-link {
		padding: 0.3rem 0.85rem;
		font-size: clamp(0.9rem, 1.3vw, 1.3rem);
		font-weight: 700;
		color: var(--win98-blue);
		text-decoration: none;
	}

	.active {
		background: var(--win98-blue);
		color: #f4f4f4;
		border: 2px solid #000000;
		box-shadow: inset 1px 1px 0 #d8d8d8, inset -1px -1px 0 #000000;
	}

	.submit-link {
		display: inline-block;
		background: var(--win98-blue);
		color: #f4f4f4;
		border: 2px solid #000000;
		box-shadow: inset 1px 1px 0 #d8d8d8, inset -1px -1px 0 #000000;
	}

	.guide-main {
		padding: 2rem 1.25rem 3rem;
	}

	.guide-panel {
		display: grid;
		grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
		gap: 1rem;
		max-width: 1200px;
		margin: 0 auto;
		background: #d8d8d8;
		border: 4px solid #000000;
		box-shadow: inset 0 0 0 3px #eaeaea;
		padding: 1rem;
	}

	.sidebar {
		background: #c9c9c9;
		border: 3px solid #000000;
		box-shadow: inset 0 0 0 2px #e3e3e3;
		padding: 0.75rem 0.5rem;
		min-height: 520px;
	}

	.sidebar-header {
		padding: 0.5rem 0.75rem 0.85rem;
		font-weight: 700;
		font-size: 1.4rem;
		border-bottom: 2px solid #000000;
		margin-bottom: 0.5rem;
	}

	.guide-item {
		display: flex;
		flex-direction: column;
		padding: 0.7rem 0.75rem;
		margin-bottom: 0.5rem;
		background: transparent;
		color: #000000;
		text-decoration: none;
		border: 2px solid transparent;
		transition: background 0.15s ease;
	}

	.guide-item.active {
		background: var(--win98-blue);
		color: #f7f7f7;
		border-color: #000000;
		box-shadow: inset 1px 1px 0 #d8d8d8, inset -1px -1px 0 #000000;
	}

	.guide-title {
		font-weight: 700;
		font-size: 1.1rem;
		line-height: 1.25;
	}

	.guide-subtitle {
		font-size: 0.78rem;
		opacity: 0.85;
		margin-top: 0.2rem;
	}

	.guide-content {
		background: #efefef;
		border: 3px solid #000000;
		padding: 1.5rem 1.25rem 1.75rem;
		min-height: 520px;
	}

	.content-header {
		padding-bottom: 0.75rem;
		border-bottom: 3px solid #000000;
		margin-bottom: 1rem;
	}

	.eyebrow {
		margin: 0 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--win98-blue);
	}

	.content-header h1 {
		margin: 0;
		font-size: clamp(2rem, 3vw, 3.1rem);
		line-height: 1.1;
	}

	.markdown-body {
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.markdown-body :global(h1),
	.markdown-body :global(h2),
	.markdown-body :global(h3) {
		margin: 1.4rem 0 0.6rem;
		line-height: 1.2;
	}

	.markdown-body :global(h1) {
		font-size: clamp(1.7rem, 2.2vw, 2.3rem);
	}

	.markdown-body :global(h2) {
		font-size: clamp(1.25rem, 1.7vw, 1.8rem);
	}

	.markdown-body :global(p),
	.markdown-body :global(li) {
		margin: 0.5rem 0;
	}

	.markdown-body :global(ul),
	.markdown-body :global(ol) {
		padding-left: 1.4rem;
		margin: 0.9rem 0;
	}

	.markdown-body :global(blockquote) {
		margin: 1rem 0;
		padding: 0.6rem 0.9rem;
		border-left: 4px solid var(--win98-blue);
		background: #e9e9e9;
		font-style: italic;
	}

	.markdown-body :global(a) {
		color: var(--win98-blue);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
	}

	.markdown-body :global(pre) {
		background: #111111;
		color: #f4f4f4;
		padding: 1rem;
		border: 3px solid #000000;
		overflow-x: auto;
		margin: 1rem 0;
	}

	.markdown-body :global(code) {
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		background: rgba(0, 0, 0, 0.05);
		padding: 0.15rem 0.35rem;
	}

	.markdown-body :global(pre code) {
		background: transparent;
		padding: 0;
	}

	.markdown-body :global(img),
	.markdown-body :global(video) {
		max-width: 100%;
		display: block;
		height: auto;
		margin: 1rem auto;
		border: 3px solid #000000;
		background: #ffffff;
	}

	.markdown-body :global(video) {
		width: min(100%, 760px);
		max-height: 480px;
		object-fit: contain;
	}

	@media (max-width: 860px) {
		.guide-panel {
			grid-template-columns: 1fr;
		}

		.sidebar {
			min-height: 0;
		}

		.topbar {
			flex-direction: column;
			align-items: flex-start;
		}

		.nav {
			justify-content: flex-start;
		}
	}
</style>
