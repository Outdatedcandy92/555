<script lang="ts">
	function goHome() {
		window.location.href = '/';
	}
</script>

<svelte:head>
	<title>555</title>
	<meta name="description" content="Submissions for 555 are opening soon." />
</svelte:head>

<div class="page-shell">
	<header class="topbar">
		<div class="brand">555</div>
		<nav class="nav" aria-label="Main navigation">
			<a class="nav-link" href="/">Home</a>
			<a class="nav-link" href="/#about">About</a>
			<a class="nav-link" href="/guides">Guide</a>
		</nav>
	</header>

	<main class="submit-page">
		<section class="submit-panel">
			<img class="submit-icon" src="/icons/icon-555.png" alt="555 icon" />
			<h1>Submissions opening soon.</h1>
			<p>Check back soon for the submission form!</p>
			<button class="primary-button" onclick={goHome}>Back home</button>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background: #7d7d7d;
		margin: 0;
	}

	.page-shell {
		min-height: 100vh;
	}

	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		height: 62px;
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
		gap: 0.3rem;
		flex-wrap: wrap;
		justify-content: flex-end;
		margin-left: auto;
	}

	.nav-link {
		padding: 0.3rem 0.85rem;
		font-size: clamp(0.9rem, 1.3vw, 1.3rem);
		font-weight: 700;
		color: var(--win98-blue);
		text-decoration: none;
	}

	.submit-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 62px);
		padding: 2rem 1rem;
	}

	.submit-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 720px;
		width: min(720px, calc(100% - 1.5rem));
		background: #d9d9d9;
		border: 4px solid #000000;
		box-shadow: inset 0 0 0 3px #f0f0f0;
		padding: 2.5rem 1.5rem;
	}

	.submit-icon {
		width: min(120px, 30vw);
		height: auto;
		margin-bottom: 1.25rem;
		filter: drop-shadow(0 4px 0 #000000);
	}

	.submit-panel h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(2.2rem, 4vw, 4rem);
		line-height: 1.1;
	}

	.submit-panel p {
		margin: 0 0 1.5rem;
		font-size: clamp(1.2rem, 2vw, 1.8rem);
		line-height: 1.4;
		max-width: 22ch;
	}

	.primary-button {
		background: var(--win98-panel);
		border: 3px solid var(--win98-border-dark);
		box-shadow: inset 2px 2px 0 var(--win98-border-light), inset -2px -2px 0 var(--win98-border-mid);
		padding: 0.8rem 2rem;
		font-size: 1.5rem;
		cursor: pointer;
	}

	@media (max-width: 720px) {
		.topbar {
			height: auto;
			min-height: 62px;
		}

		.nav {
			width: 100%;
			justify-content: space-between;
		}
	}
</style>
