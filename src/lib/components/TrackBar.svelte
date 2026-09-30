<script lang="ts">
    import { trackState } from "$lib/store/cancion.svelte";
    import Icon from "@iconify/svelte";

    let audioEl = $state<HTMLAudioElement | null>(null);
    let isPaused = $state(true);
    let currentTime = $state(0);
    let duration = $state(0);
    let volume = $state(0.75);

    // Alternar Reproducción / Pausa
    function togglePlay() {
        if (!audioEl) return;
        if (audioEl.paused) {
            audioEl.play();
        } else {
            audioEl.pause();
        }
    }

    // Cambiar la posición de la canción con la barra de progreso
    function handleSeek(e: Event) {
        const target = e.target as HTMLInputElement;
        if (audioEl) {
            audioEl.currentTime = Number(target.value);
        }
    }

    // Formatear segundos a MM:SS
    function formatTime(seconds: number) {
        if (isNaN(seconds) || seconds === 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }


</script>

{#if trackState.track}
<!-- Etiqueta Audio oculta pero activa -->
<audio 
    bind:this={audioEl}
    src={trackState.track.audio || trackState.track.preview_url} 
    autoplay
    bind:paused={isPaused}
    bind:currentTime={currentTime}
    bind:duration={duration}
    bind:volume={volume}
></audio>

<footer class="fixed bottom-0 left-0 right-0 z-50 bg-[#161618]/95 backdrop-blur-xl border-t border-neutral-800/80 px-6 py-2.5">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- 1. Información del Tema (Izquierda) -->
        <div class="flex items-center gap-3 w-1/4">
            <div class="w-11 h-11 rounded-md bg-neutral-800 overflow-hidden shrink-0 shadow-md">
                <img src={trackState.track.album.image} alt="Album Cover" class="w-full h-full object-cover" />
            </div>
            <div class="truncate">
                <h4 class="text-xs font-semibold text-white truncate">{trackState.track.title}</h4>
                <p class="text-[11px] text-neutral-400 truncate">{trackState.track.artist?.name || trackState.track.album.title}</p>
            </div>
            <button class="text-neutral-400 hover:text-red-500 transition-colors ml-1">
                <Icon icon="lucide:heart" class="text-xs" />
            </button>
        </div>

        <!-- 2. Controles Principales (Centro) -->
        <div class="flex flex-col items-center gap-1.5 w-2/4 max-w-md">
            <!-- Botones de Control -->
            <div class="flex items-center gap-5 text-neutral-400">
                <button class="hover:text-white transition-colors"><Icon icon="lucide:shuffle" class="text-xs" /></button>
                <button class="hover:text-white transition-colors"><Icon icon="lucide:skip-back" class="text-sm" /></button>
                
                <!-- Botón Play / Pause Rojo estilo Apple Music -->
                <button 
                    onclick={togglePlay}
                    class="w-8 h-8 rounded-full bg-[#ff2d55] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md"
                >
                    {#if isPaused}
                        <Icon icon="lucide:play" class="text-xs fill-current ml-0.5" />
                    {:else}
                        <Icon icon="lucide:pause" class="text-xs fill-current" />
                    {/if}
                </button>

                <button class="hover:text-white transition-colors"><Icon icon="lucide:skip-forward" class="text-sm" /></button>
                <button class="hover:text-white transition-colors"><Icon icon="lucide:repeat" class="text-xs" /></button>
            </div>
            
            <!-- Barra de Tiempo con indicador rojo -->
            <div class="w-full flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                
                <div class="relative flex-1 flex items-center">
                    <input 
                        type="range" 
                        min="0" 
                        max={duration || 100} 
                        value={currentTime} 
                        oninput={handleSeek}
                        class="w-full h-1 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-[#ff2d55]"
                    />
                </div>
                
                <span>-{formatTime(duration - currentTime)}</span>
            </div>
        </div>

        <!-- 3. Volumen y Opciones (Derecha) -->
        <div class="flex items-center justify-end gap-3 w-1/4 text-neutral-400">
    <button class="hover:text-white"><Icon icon="lucide:mic-2" class="text-xs" /></button>
    <button class="hover:text-white"><Icon icon="lucide:list-music" class="text-xs" /></button>
    
    <!-- Control de Volumen Funcional -->
    <div class="flex items-center gap-2 w-24 group">
        <!-- Botón para mutear rápido -->
        <button onclick={() => volume = volume > 0 ? 0 : 0.75} class="hover:text-white">
            <Icon icon={volume === 0 ? "lucide:volume-x" : "lucide:volume-2"} class="text-xs" />
        </button>
        
        <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            bind:value={volume}
            class="w-full h-1 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-neutral-300 group-hover:accent-[#ff2d55] transition-colors"
        />
    </div>
</div>

    </div>
</footer>
{/if}