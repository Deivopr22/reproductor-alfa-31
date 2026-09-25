<script>
    import { trackState } from "$lib/store/cancion.svelte";
    import Icon from "@iconify/svelte";

</script>
{#if trackState.track}
<footer class="fixed bottom-0 left-0 right-0 z-50 bg-[#161618]/90 backdrop-blur-xl border-t border-neutral-800/80 px-6 py-2.5">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div class="flex items-center gap-3 w-1/4">
            <div class="w-11 h-11 rounded-md bg-neutral-800 overflow-hidden shrink-0 shadow-md">
                <img src={trackState.track.album.image} alt="Album Cover" class="w-full h-full object-cover" />
            </div>
            <div class="truncate">
                <h4 class="text-xs font-semibold text-white truncate">{trackState.track.title}</h4>
                <p class="text-[11px] text-neutral-400 truncate"></p>
            </div>
            <button class="text-neutral-400 hover:text-red-500 transition-colors ml-1">
                <Icon icon="lucide:heart" class="text-xs" />
            </button>
        </div>

        <!-- 2. Controles de Reproducción y Barra de Tiempo (Centro) -->
        <div class="">
            <audio src={trackState.track.audio} controls></audio>
        </div>

    </div>
</footer>
{/if}