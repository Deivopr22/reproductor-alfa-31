<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '@iconify/svelte';

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

	<footer class="fixed bottom-0 left-0 right-0 z-50 bg-[#161618]/90 backdrop-blur-xl border-t border-neutral-800/80 px-6 py-2.5">
		<div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
			
			<!-- 1. Track Info (Izquierda) -->
			<div class="flex items-center gap-3 w-1/4">
				<div class="w-11 h-11 rounded-md bg-neutral-800 overflow-hidden shrink-0 shadow-md">
					<img src="https://picsum.photos/100" alt="Album Cover" class="w-full h-full object-cover" />
				</div>
				<div class="truncate">
					<h4 class="text-xs font-semibold text-white truncate">Midnight City</h4>
					<p class="text-[11px] text-neutral-400 truncate">M83 · Hurry Up, We're Dreaming</p>
				</div>
				<button class="text-neutral-400 hover:text-red-500 transition-colors ml-1">
					<Icon icon="lucide:heart" class="text-xs" />
				</button>
			</div>

			<!-- 2. Controles de Reproducción y Barra de Tiempo (Centro) -->
			<div class="flex flex-col items-center gap-1 w-2/4 max-w-md">
				<div class="flex items-center gap-5 text-neutral-400">
					<button class="hover:text-white transition-colors"><Icon icon="lucide:shuffle" class="text-xs" /></button>
					<button class="hover:text-white transition-colors"><Icon icon="lucide:skip-back" class="text-sm" /></button>
					<button class="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
						<Icon icon="lucide:pause" class="text-xs fill-current" />
					</button>
					<button class="hover:text-white transition-colors"><Icon icon="lucide:skip-forward" class="text-sm" /></button>
					<button class="hover:text-white transition-colors"><Icon icon="lucide:repeat" class="text-xs" /></button>
				</div>
				
				<!-- Timeline Bar -->
				<div class="w-full flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
					<span>2:14</span>
					<div class="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden cursor-pointer relative group">
						<div class="h-full bg-red-600 w-1/2 rounded-full relative"></div>
					</div>
					<span>-1:49</span>
				</div>
			</div>

			<!-- 3. Controles Adicionales y Volumen (Derecha) -->
			<div class="flex items-center justify-end gap-3 w-1/4 text-neutral-400">
				<button class="hover:text-white"><Icon icon="lucide:mic-2" class="text-xs" /></button>
				<button class="hover:text-white"><Icon icon="lucide:list-music" class="text-xs" /></button>
				<div class="flex items-center gap-1.5 w-20">
					<Icon icon="lucide:volume-2" class="text-xs" />
					<div class="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
						<div class="h-full bg-neutral-300 w-3/4"></div>
					</div>
				</div>
			</div>

		</div>
	</footer>
</div>

