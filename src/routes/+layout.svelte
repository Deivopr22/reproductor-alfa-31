<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '@iconify/svelte';
    import TrackBar from '$lib/components/TrackBar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-[#111111] text-white flex flex-col font-sans antialiased pb-28">
	<header class="sticky top-0 z-40 bg-[#111111]/80 backdrop-blur-md border-b border-neutral-800/50 px-6 py-3.5 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<div class="flex gap-2">
				<span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
				<span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
				<span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
			</div>

			<div class="flex items-center gap-2 text-neutral-300 ml-2">
				<Icon icon="lucide:music" class="text-red-500 text-sm" />
				<span class="font-semibold text-xs tracking-wide">Música</span>
			</div>
		</div>

		<div class="relative w-full max-w-sm hidden md:block">
			<Icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs" />
			<input 
				type="text" 
				placeholder="Buscar canciones, artistas o álbumes..." 
				class="w-full bg-[#1c1c1e] text-xs border border-neutral-800/80 rounded-md pl-8 pr-10 py-1.5 focus:outline-none focus:border-neutral-600 text-neutral-200 placeholder-neutral-500"
			/>
			<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 border border-neutral-700/60 rounded px-1 py-0.2">⌘K</span>
		</div>

		<div class="flex items-center gap-4">
			<span class="text-[9px] font-bold text-red-500 border border-red-500/30 bg-red-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
				Hi-Res Lossless
			</span>
			<div class="flex items-center gap-3 text-neutral-400 text-xs">
				<button class="hover:text-white"><Icon icon="lucide:sliders-horizontal" /></button>
				<button class="hover:text-white"><Icon icon="lucide:user" /></button>
			</div>
		</div>
	</header>

	<main class="flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 py-8">
		{@render children()}
	</main>

	<TrackBar />
</div>

