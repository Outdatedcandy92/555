<script lang="ts">
	const navItems = ['Home', 'About', 'Guide', 'Submit'];

	function scrollToAbout() {
		const about = document.getElementById('about');
		about?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<svelte:head>
	<title>555</title>
	<meta
		name="description"
		content="555 — an event where you design a circuit using a 555 timer in Falstad and submit it for stickers and a giant prize."
	/>
</svelte:head>

<div class="page-shell">
	<header class="topbar">
		<div class="brand">555 - by rudy</div>
		<nav class="nav" aria-label="Main navigation">
			{#each navItems as item}
				{#if item === 'Submit'}
					<a class="nav-link submit-link" href="https://forms.hackclub.com/555">{item}</a>
				{:else}
					<a
						class="nav-link"
						href={item === 'Home' ? '#top' : item === 'About' ? '#about' : item === 'Guide' ? '/guides' : 'https://forms.hackclub.com/555'}
					>
						{item}
					</a>
				{/if}
			{/each}
		</nav>
	</header>

	<main>
		<section id="top" class="hero">
			<div class="hero-copy left-copy">Make a circuit using a 555 timer</div>
			<div class="chip-wrap">
				<img class="chip-placeholder" src="/images/image1.png" alt="555 timer artwork" />
			</div>
			<div class="hero-copy right-copy">Get stickers + a chance to win a giant 3d printed 555 timer</div>
			<div class="cta-wrap">
				<button class="primary-button" onclick={scrollToAbout}>Get Started</button>
			</div>
		</section>

		<section id="about" class="about-section">
			<div class="about-grid">
				<div class="step-card step-one left-step">
					<div class="blue-strip"></div>
					<p>
						1. Design a circuit that uses a 555 in Falstad. Don’t know where to start? Read the
						<a class="inline-link" href="/guides">guide</a>.
					</p>
				</div>
				<div class="step-card step-two right-step">
					<div class="blue-strip"></div>
					<p>2. <a class="inline-link" href="https://forms.hackclub.com/555">Submit your project</a>.</p>
				</div>
				<div class="step-card step-three left-step">
					<div class="blue-strip"></div>
					<p>3. Once approved, you’ll get stickers shipped out.</p>
				</div>
				<div class="step-card step-four right-step">
					<div class="blue-strip"></div>
					<p>4. You’ll also receive a massive 3D-printed 555 timer if your project is really cool.</p>
				</div>
			</div>
			<div id="submit" class="submit-anchor" aria-hidden="true"></div>
		</section>
	</main>
</div>

<style>
	:root {
		--hero-image-width: min(620px, 68vw);
		--hero-image-top: 50%;
		--hero-image-left: 50%;
		--left-copy-top: 15.5rem;
		--left-copy-left: 8.8rem;
		--right-copy-bottom: 13.3rem;
		--right-copy-right: 8.8rem;
		--hero-copy-size: clamp(2.9rem, 3.5vw, 2.2rem);
		--cta-button-padding: 0.8rem 2.2rem;
		--cta-button-font-size: 2.4rem;
		--cta-bottom-offset: 6.4rem;
		--cta-shift-y: -0.35rem;
	}

	:global(body) {
		background: #7d7d7d;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.page-shell {
		min-height: 100vh;
		padding: 0;
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
		background: transparent;
		border: none;
		text-decoration: none;
	}

	.submit-link {
		display: inline-block;
		background: var(--win98-blue);
		color: #f3f3f3;
		border: 2px solid #000000;
		box-shadow: inset 1px 1px 0 #d9d9d9, inset -1px -1px 0 #000000;
		padding: 0.25rem 0.8rem;
	}

	.hero {
		position: relative;
		height: calc(100vh - 62px);
		min-height: calc(100vh - 62px);
		padding: 1.5rem 2.5rem 2rem;
		background: #c9c9c9;
		border: 4px solid #000000;
		border-top: none;
		box-shadow: inset 0 0 0 3px #d8d8d8;
		overflow: hidden;
	}

	.hero-copy {
		position: absolute;
		font-size: var(--hero-copy-size);
		line-height: 1.1;
		font-weight: 400;
		max-width: 16ch;
		word-break: break-word;
		z-index: 1;
	}

	.left-copy {
		top: var(--left-copy-top);
		left: var(--left-copy-left);
	}

	.right-copy {
		bottom: var(--right-copy-bottom);
		right: var(--right-copy-right);
		text-align: left;
	}

	.chip-wrap {
		position: absolute;
		left: var(--hero-image-left);
		top: var(--hero-image-top);
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 0;
	}

	.chip-placeholder {
		display: block;
		width: var(--hero-image-width);
		height: auto;
		max-height: 60vh;
		filter: drop-shadow(0 6px 0 #000000);
		pointer-events: none;
		object-fit: contain;
	}

	.cta-wrap {
		position: absolute;
		left: 50%;
		bottom: var(--cta-bottom-offset);
		transform: translate(-50%, var(--cta-shift-y));
		display: flex;
		justify-content: center;
		z-index: 2;
	}

	.primary-button {
		background: var(--win98-panel);
		border: 3px solid var(--win98-border-dark);
		box-shadow: inset 2px 2px 0 var(--win98-border-light), inset -2px -2px 0 var(--win98-border-mid);
		padding: var(--cta-button-padding);
		font-size: var(--cta-button-font-size);
		cursor: pointer;
	}

	.about-section {
		background: #7d7d7d;
		padding: 1.5rem 0 2.5rem;
		margin-top: 0;
		border-top: 4px solid #000000;
		min-height: calc(100vh - 62px);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.about-grid {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		padding: 0 4rem;
		max-width: 900px;
		width: min(900px, calc(100% - 2rem));
		margin: 0 auto;
		position: relative;
		justify-content: center;
	}

	.step-card {
		position: relative;
		background: #d9d9d9;
		border: 3px solid #000000;
		box-shadow: 4px 4px 0 #000000;
		padding: 1.8rem 2rem 1.5rem;
		min-height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: clamp(1.5rem, 2.2vw, 2.2rem);
		line-height: 1.35;
		margin-left: 0;
	}

	.step-card p {
		margin: 0 auto;
		width: 100%;
		max-width: 32ch;
		font-weight: 400;
		text-align: left;
	}

	.inline-link {
		display: inline-block;
		color: var(--win98-blue);
		font-weight: 700;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
		text-decoration-color: currentColor;
		background: transparent;
		padding: 0;
		border-radius: 0;
	}

	.inline-link:hover,
	.inline-link:focus-visible {
		background: transparent;
	}

	.submit-anchor {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
	}

	.blue-strip {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 6px;
		background: var(--win98-blue);
	}

	.step-one,
	.step-two,
	.step-three,
	.step-four {
		grid-column: auto;
		grid-row: auto;
		margin-top: 0;
	}

	.left-step::before,
	.right-step::before,
	.left-step::after,
	.right-step::after {
		display: none;
	}

	@media (max-width: 880px) {
		.hero {
			height: calc(100vh - 62px);
			min-height: calc(100vh - 62px);
			padding: 1rem 1rem 1.5rem;
		}

		.hero-copy {
			position: static;
			max-width: 100%;
			text-align: center;
			margin: 0;
			transform: none;
		}

		.left-copy {
			top: auto;
			left: auto;
			margin-top: 0.5rem;
		}

		.right-copy {
			bottom: auto;
			right: auto;
			margin-bottom: 0;
		}

		.chip-wrap {
			position: absolute;
			left: 50%;
			top: 48%;
			transform: translate(-50%, -50%);
		}

		.chip-placeholder {
			width: min(420px, 90vw);
		}

		.cta-wrap {
			position: absolute;
			left: 50%;
			bottom: 1.25rem;
			transform: translateX(-50%);
		}

		.about-grid {
			padding: 0 1rem;
			width: min(760px, calc(100% - 1rem));
		}

		.step-card {
			padding: 1.4rem 1.2rem 1.2rem;
			min-height: 135px;
		}

		.topbar {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem;
			height: auto;
			min-height: 62px;
		}

		.nav {
			width: 100%;
			justify-content: space-between;
			gap: 0.35rem;
			flex-wrap: wrap;
			margin-left: 0;
		}

		.nav-link {
			flex: 1 1 auto;
			min-width: 72px;
			text-align: center;
		}
	}
</style>
